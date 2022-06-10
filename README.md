# webpack-plugin-example
A small exemple project to show how to use the plugin and loader features in webpack, and a scaffold script

This project is created in the following way (starting from scratch)

## Setup
`npm init --y`

## Install webpack
`npm install webpack webpack-cli --save-dev`

## Create webpack config file
`npx webpack-cli init`

## Scaffold Module example

Run following script to scaffold a new Module
`npm run scaffold-module [module name]`

Build project to auto update the list of modules to be rendered (src/data/listOfModules.js)
`npm run build:dev (or build:prod)`
