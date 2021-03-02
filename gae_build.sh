#!/bin/bash

rm -rf ./app

cd client
yarn install
yarn lint
yarn test:ci
yarn build
mkdir -p ../app/client/build
mv build/* ../app/client/build
rm -rf build

cd ../server
yarn install
yarn lint
yarn test:ci
yarn build
mv build/* ../app/
cp -r assets ../app/assets
cp package.json ../app
rm -rf build

cd ..
cp app.yaml ./app/app.yaml
cp .gcloudignore ./app/.gcloudignore
