#!/bin/bash

clear

nest new -p pnpm -s app

cd app 

pnpm install

pnpm add @types/node @types/express @types/body-parser

