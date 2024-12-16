# hono-vite-tailwind

## Architectures

|#|tech|
|-|-|
|Language|TypeScript|
|Runtime|Node|
|Package Manager|Bun|
|Linter & Formatter|Biome|
|CSS Styling|Tailwind CSS|
|Build & Bundler|Vite|
|Frontend|hono/jsx|
|Develop environment|Dev Containers (for VSCode)|
|Deploy|Docker Container|


## Test Local DB

```sh
docker run --env POSTGRES_PASSWORD=postgres -itd -p 5432:5432 --name pg_dev postgres:17-alpine
```