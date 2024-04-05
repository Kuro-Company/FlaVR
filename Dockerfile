# syntax=docker/dockerfile:1
FROM node:alpine as build
ENV PNPM_HOME="/pnpm"
ENV PATH="$PNPM_HOME:$PATH"
RUN corepack enable
WORKDIR /app
COPY . .
RUN apk add --update --no-cache \
    python3 gcc g++ make
RUN pnpm i
RUN pnpm run build

FROM caddy:2-alpine
COPY --from=build /app/dist /usr/share/caddy/
EXPOSE 80
