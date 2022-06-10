const fs = require('fs');
const moduleTemplate = require('../templates/module.template');

const componentName = process.argv[2];
const moduleName = componentName.charAt(0).toUpperCase() + componentName.slice(1);
const fileName = componentName.charAt(0).toLocaleLowerCase() + componentName.slice(1);

const content = moduleTemplate({
    moduleName: moduleName,
});

fs.writeFile("./src/modules/" + fileName + ".js", content, err => {});
