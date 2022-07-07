#!/bin/bash

NC='\033[0m'              # Text Reset

# Regular Colors
BLACK='\033[0;30m'        # Black
RED='\033[0;31m'          # Red
GREEN='\033[0;32m'        # Green
YELLOW='\033[0;33m'       # Yellow
BLUE='\033[0;34m'         # Blue
PURPLE='\033[0;35m'       # Purple
CYAN='\033[0;36m'         # Cyan
WHITE='\033[0;37m'        # White

# High Intensity
IBLACK='\033[0;90m'       # Black
IRED='\033[0;91m'         # Red
IGREEN='\033[0;92m'       # Green
IYELLOW='\033[0;93m'      # Yellow
IBLUE='\033[0;94m'        # Blue
IPURPLE='\033[0;95m'      # Purple
ICYAN='\033[0;96m'        # Cyan
IWHITE='\033[0;97m'       # White

# Bold
BBLACK='\033[1;30m'       # Black
BRED='\033[1;31m'         # Red
BGREEN='\033[1;32m'       # Green
BYELLOW='\033[1;33m'      # Yellow
BBLUE='\033[1;34m'        # Blue
BPURPLE='\033[1;35m'      # Purple
BCYAN='\033[1;36m'        # Cyan
BWHITE='\033[1;37m'       # White

printf "\n\n"

printf "\n${WHITE} ● ${IYELLOW}INITIALIZE  ${NC}\n\n"

rm -rf ./package.json 2>/dev/null
rm -rf ./package-lock.json 2>/dev/null
rm -rf ./node_modules 2>/dev/null
npm init -y --silent --force 

printf "\n${WHITE} ● ${IYELLOW}INSTALL DEPENDENCIES ${NC}\n\n"

npm install --silent --save-dev typescript ts-node tslib typesync @types/node syncpack xo prettier

printf "\n${WHITE} ● ${IYELLOW}SOURCE FOLDER ${NC}\n\n"

rm -rf ./src 2>/dev/null
mkdir -p ./src
echo "console.log('\nHello World\n');" >> ./src/index.ts
cat ./src/index.ts

printf "\n${WHITE} ● ${IYELLOW}TYPESCRIPT SETUP ${NC}\n\n"

rm -rf ./tsconfig.json 2>/dev/null
tsc --init --target es6 --module commonjs --outDir ./dist --rootDir ./src --sourceMap 

npm set name "project"
npm set version "0.0.1"
npm set description "Project"
npm set author "Author"
npm set license "MIT"

npm pkg set scripts.start="node ./dist/index.js"
npm pkg set scripts.dev="ts-node ./src/index.ts"
npm pkg set scripts.build="tsc --build"
npm pkg set scripts.watch="tsc --watch"
npm pkg set scripts.format="prettier --write ./src/**/*.ts"

npx syncpack format
cat ./package.json

printf "${IYELLOW} ▶ ${WHITE}BUILD CHECK ${NC}\n"
npm run build

printf "${IYELLOW} ▶ ${WHITE}TS-NODE ${NC}\n"
npm run dev 

printf "${IYELLOW} ▶ ${WHITE}NODE ${NC}\n"
npm run start

# read -p "Press any key..."