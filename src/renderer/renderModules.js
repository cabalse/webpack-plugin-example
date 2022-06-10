const renderModules = (root, modules) => {
    let rootElement = document.getElementById(root);
    modules.forEach(module => {
        let tag = document.createElement("div");
        tag.appendChild(module.render());
        rootElement.appendChild(tag);
    });
}

export default renderModules;