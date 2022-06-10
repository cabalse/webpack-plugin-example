const fs = require('fs')
const { promisify } = require('util');
const listOfModulesTemplate = require('../templates/listOfModules.template');
const glob = promisify(require('glob'))

const modulesBlackList = ["ContainerModule"];

class CompileModulesListPlugin {
    constructor({} = {}) {
    };
    extractValuefromFile(regExp, filePath) {
        let found;
        var data = fs.readFileSync(filePath, 'utf8');
        found = data.match(regExp);
        return found[1];
    };
    compileModulesFromModuleFiles(files, root) {
        let modules = [];
        files.forEach(file => {
            const moduleName = this.extractValuefromFile(/export default class (.*?) {/, `${root}/${file}`);
            if (!modulesBlackList.includes(moduleName)) {
                modules.push({ module: moduleName, file: file.replace(/^.*[\\\/]/, '')});
            }
        });
        return modules;
    };
    async execute() {
        const root = process.cwd();
        const files = await glob('**/src/modules/*.js', {});
        const modules = this.compileModulesFromModuleFiles(files, root);
        const content = listOfModulesTemplate({
            modules,
            modulePath: "./../modules/",
        });
        fs.writeFile("./src/data/listOfModules.js", content, err => {});
    };
    apply(compiler) {
        const pluginName = CompileModulesListPlugin.name;

        compiler.hooks.beforeRun.tapPromise(
            pluginName,
            async compilation => {
               this.execute();
          }
        )

        // compiler.hooks.watchRun.tapPromise(
        //     pluginName,
        //     async compilation => {
        //         this.execute();
        //     }
        // )
    }
  }

  module.exports = CompileModulesListPlugin;
