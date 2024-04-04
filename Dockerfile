# syntax=docker/dockerfile:1
FROM oven/bun:1 as build
WORKDIR /app
COPY package.json bun.lockb ./
RUN bun i
COPY . .
RUN bun run build

FROM caddy:2-alphine
COPY --from=build /app/dist /usr/share/caddy/
EXPOSE 80
