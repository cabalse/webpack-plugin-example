# webpack-plugin-example
A small exemple project to show how to use the plugin and loader features in webpack, and a scaffold script

This project is created in the following way (starting from scratch)

## Create Project

### Setup
`npm init --y`

### Install webpack
`npm install webpack webpack-cli --save-dev`

### Create webpack config file
`npx webpack-cli init`

## Scaffold Module example

Run following script to scaffold a new Module
`npm run scaffold-module [module name]`

Build project to auto update the list of modules to be rendered (src/data/listOfModules.js)
`npm run build:dev (or build:prod)`

## Plugin example

The plugins are located in the folder utilities/plugins.

### CompileModulesListPlugin

This plugin hooks compiler.hooks.beforeRun in order to scan folder src/modules for all \*.js files, assuming all js-files are module files. The plugin uses a doT.js template (located in utilities/templates) to write out all modules in the src/data/listOfModules.js file to be rendered on the startpage.

This is a simple example to show how a plugin can be used to accumulate data and make connections that can otherwise be forgotten by a developer.

