FROM node:alpine
WORKDIR /app

COPY package.json .
COPY yarn.lock .

RUN yarn install --frozen-lockfile --network-timeout 1000000

COPY . .
CMD [ "yarn", "start"]
# RUN yarn build

# FROM nginx:alpine
# COPY --from=build /app/build /usr/share/nginx/html

