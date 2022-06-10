export default class TitleModule {
    constructor(text) {
        this.text = text;
    }
    render() {
        let header = document.createElement("h1");
        let text = document.createTextNode(this.text);
        header.appendChild(text);
        return header;
    }
}