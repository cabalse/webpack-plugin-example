const doT = require('dot');

doT.templateSettings = {
    evaluate:    /\{\{([\s\S]+?)\}\}/g,
    interpolate: /\{\{=([\s\S]+?)\}\}/g,
    encode:      /\{\{!([\s\S]+?)\}\}/g,
    use:         /\{\{#([\s\S]+?)\}\}/g,
    define:      /\{\{##\s*([\w\.$]+)\s*(\:|=)([\s\S]+?)#\}\}/g,
    conditional: /\{\{\?(\?)?\s*([\s\S]*?)\s*\}\}/g,
    iterate:     /\{\{~\s*(?:\}\}|([\s\S]+?)\s*\:\s*([\w$]+)\s*(?:\:\s*([\w$]+))?\s*\}\})/g,
    varname: 'it',
    strip: false,
    append: true,
    selfcontained: false
};

const listOfModulesTemplate = doT.template(`
import ContainerModule from "./../modules/containerModule.js";
{{~ it.modules :m}}import {{=m.module}} from "./../modules/{{=m.file}}";
{{~}}

const listOfModules = [
    {{~ it.modules :m}}new ContainerModule(new {{=m.module}}('{{=m.module}}')),
    {{~}}
];

export default listOfModules;
`);

module.exports = listOfModulesTemplate;
