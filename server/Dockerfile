FROM node:alpine as base
ENV CI=true
WORKDIR /app
COPY package.json .
COPY yarn.lock .
RUN yarn install --frozen-lockfile --network-timeout 1000000
COPY . .
CMD ["yarn", "start:dev"]

FROM node:alpine as build
WORKDIR /app
COPY --from=base /app .
RUN yarn build

FROM node:alpine as deps
WORKDIR /app
COPY package.json .
COPY yarn.lock .
RUN yarn install --prod --frozen-lockfile --network-timeout 1000000

FROM node:alpine as prod
WORKDIR /app
COPY --from=base /app/assets /app
COPY --from=deps /app/node_modules /node_modules
COPY --from=build /app/build .
CMD ["node", "index.js"]