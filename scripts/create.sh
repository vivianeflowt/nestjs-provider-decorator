#!/bin/bash

clear

nest new -s -p pnpm app

cd app

pnpm install

pnpm install class-transformer class-validator
pnpm install express @nestjs/platform-express
pnpm install lodash bluebird ts-mixer morgan
pnpm install compression chalk@4

pnpm install -D @types/node @types/express @types/jest



# npx typesync
# rm -rf ./node_modules



