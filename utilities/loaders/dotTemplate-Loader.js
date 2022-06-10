module.exports = function (source) {
    return `
        const doT = require('dot');
        const moduleTemplate = doT.template(\`${source}\`);
        module.exports = moduleTemplate;
    `;
} 
