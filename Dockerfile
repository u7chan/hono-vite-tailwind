FROM node:22-slim AS base

FROM base AS builder

WORKDIR /app
COPY . .

RUN npm i -g bun
RUN bun i
RUN bun run build
RUN rm -rf node_modules
RUN bun i --production

FROM base AS runner

WORKDIR /app

COPY --from=builder /usr/local/bin/bun /usr/local/bin/bun
COPY --from=builder /app/dist ./dist
COPY --from=builder /app/node_modules ./node_modules
COPY --from=builder /app/src/api ./src/api
COPY --from=builder /app/src/front/index.tsx ./src/front/index.tsx
COPY --from=builder /app/src/index.ts ./src/index.ts
COPY --from=builder /app/tsconfig.json ./tsconfig.json

ENV TZ=Asia/Tokyo
ENV PROD=true

USER node

CMD ["bun", "run", "--hot", "./src/index.ts"]