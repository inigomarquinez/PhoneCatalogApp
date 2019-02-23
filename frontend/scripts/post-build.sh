#!/bin/bash

# console colors
CYAN='\033[0;36m'
BLACK='\033[0m'

# npm run build creates a build directory with a production build of the app
productionOutputFolder="./build"
# Copy the production build to api subrpoject, under client folder
destinationFolder="../api/client"

# build-volta script has finished
echo -e "${CYAN}Production build generated @ $productionOutputFolder!${BLACK}"

# Remove previous production build from api
echo -e "${CYAN}Removing previous production build @ $destinationFolder ...${BLACK}"
rm -v -r -f $destinationFolder/*

# Copy new production build
echo -e "${CYAN}Copying production build to $destinationFolder ... ${BLACK}"
# Create dir
mkdir -p $destinationFolder
# Copy webpack output
cp -v -r ${productionOutputFolder}/* $destinationFolder

# Post-build tasks finished
echo -e "${CYAN}Production build copied to $destinationFolder${BLACK}"
echo -e "${CYAN}You can now run 'npm run production' at your server.${BLACK}"
