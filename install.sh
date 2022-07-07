#!/bin/bash

clear

pnpm install 

pnpm install @google-cloud/storage @nestjs/platform-express @nestjs/config 
pnpm install @nestjs/event-emitter @nestjs/config class-transformer class-validator
pnpm install axios file-type express lodash bluebird ts-mixer morgan

npx typesync
rm -rf ./node_modules

pnpm install
pnpm install -D @types/node @types/express @types/multer 
