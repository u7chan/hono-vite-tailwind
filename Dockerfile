FROM node:22-slim AS base

FROM base AS builder

WORKDIR /app
COPY . .

RUN npm i -g bun
RUN bun i
RUN bun run build
RUN rm -rf node_modules && rm -rf ./src/client
RUN bun i --production

FROM base AS runner

WORKDIR /app

COPY --from=builder /usr/local/bin/bun /usr/local/bin/bun
COPY --from=builder /app/dist ./dist
COPY --from=builder /app/node_modules ./node_modules
COPY --from=builder /app/src ./src
COPY --from=builder /app/tsconfig.json ./tsconfig.json

ENV TZ=Asia/Tokyo
ENV PROD=true

USER node

CMD ["npx", "tsx", "./src/node-server.ts"]