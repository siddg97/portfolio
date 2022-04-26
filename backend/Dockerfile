FROM node:lts-slim as dev
ENV CI=true
WORKDIR /app
COPY package.json .
COPY yarn.lock .
RUN yarn install
COPY . .
CMD ["yarn", "dev"]

FROM node:lts-slim as build
WORKDIR /app
COPY --from=dev /app .
RUN yarn build

FROM node:lts-slim as deps
WORKDIR /app
COPY package.json .
COPY yarn.lock .
RUN yarn install --prod --frozen-lockfile

FROM node:lts-slim as prod
WORKDIR /app
COPY --from=deps /app/node_modules /node_modules
COPY --from=build /app/build .
CMD ["node", "index.js"]