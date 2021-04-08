FROM node:alpine as server-base
ENV CI=true
WORKDIR /app
COPY ./server/package.json .
RUN yarn install
COPY ./server .

FROM node:alpine as server-build
WORKDIR /app
COPY --from=server-base /app .
RUN yarn build

FROM node:alpine as server-deps
WORKDIR /app
COPY ./server/package.json .
RUN yarn install --prod

FROM node:alpine as react-build
WORKDIR /app
COPY ./client/package.json .
RUN yarn install
COPY ./client .
RUN yarn build

FROM node:alpine as pkg
WORKDIR /app
# static assets and react build
COPY --from=server-base /app/assets /app/assets
COPY --from=react-build /app/build /app/react
# server node_modules and compiled JS for server
COPY --from=server-deps /app/node_modules /app/node_modules
COPY --from=server-build /app/build /app/src
# Package into executable binary
COPY ./server/pkg.config.json .
RUN npx pkg@4.5.1 ./src/index.js -c ./pkg.config.json

FROM gcr.io/distroless/cc
COPY --from=pkg /app/build/index /app/index
WORKDIR /app
CMD ["./index"]