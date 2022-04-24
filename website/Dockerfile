FROM node:lts-slim as dev
WORKDIR /app
COPY package.json .
COPY yarn.lock .
RUN yarn install
COPY . .
CMD [ "yarn", "start" ]

FROM node:lts-slim as build
WORKDIR /app
COPY package.json .
COPY yarn.lock .
RUN yarn install
COPY . .
RUN yarn build

# FROM node:lts-slim as prod
# WORKDIR /app
# COPY ./server/package.json .
# COPY ./server/yarn.lock .
# RUN yarn install
# COPY --from=build /app/build/ ./build/
# COPY ./server/index.js .
# CMD [ "yarn", "start" ]