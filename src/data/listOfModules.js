
import ContainerModule from "./../modules/containerModule.js";
import QuoteModule from "./../modules/quoteModule.js";
import TextModule from "./../modules/textModule.js";
import TitleModule from "./../modules/titleModule.js";


const listOfModules = [
    new ContainerModule(new QuoteModule('QuoteModule')),
    new ContainerModule(new TextModule('TextModule')),
    new ContainerModule(new TitleModule('TitleModule')),
    
];

export default listOfModules;
