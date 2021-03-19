FROM node:alpine as server-base
ENV CI=true
WORKDIR /app
COPY ./server/package.json .
COPY ./server/yarn.lock .
RUN yarn install --network-timeout 1000000
COPY ./server .

FROM node:alpine as server-build
WORKDIR /app
COPY --from=server-base /app .
RUN yarn build

FROM node:alpine as server-deps
WORKDIR /app
COPY ./server/package.json .
COPY ./server/yarn.lock .
RUN yarn install --prod --frozen-lockfile --network-timeout 1000000

FROM node:alpine as react-build
WORKDIR /app
COPY ./client/package.json .
COPY ./client/yarn.lock .
RUN yarn install --prod --network-timeout 1000000
COPY ./client .
RUN yarn build

FROM node:alpine as prod
WORKDIR /app
# static assets and react build
COPY --from=server-base /app/assets /assets
COPY --from=react-build /app/build /app/react
# server node_modules and compiled JS for server
COPY --from=server-deps /app/node_modules /node_modules
COPY --from=server-build /app/build .
CMD ["node", "index.js"]