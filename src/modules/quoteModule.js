import quoteTemplate from "./../assets/templates/quote.dottemplate";

export default class QuoteModule {
    constructor(text) {
        this.text = text;
    }
    render() {
        return document.createTextNode(quoteTemplate({ quote: this.text }));
    }
}