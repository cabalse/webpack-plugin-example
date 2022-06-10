export default class TextModule {
    constructor(text) {
        this.text = text;
    }
    render() {
        return document.createTextNode(this.text);
    }
}