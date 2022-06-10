export default class ContainerModule {
    constructor(element) {
        this.element = element;
    }
    render() {
        let container = document.createElement("div");
        container.classList.add("container");
        container.appendChild(this.element.render());
        return container;
    }
}