import TitleModule from "./modules/titleModule";
import TextModule from "./modules/textModule";
import renderModules from "./renderer/renderModules";
import listOfModules from "./data/listOfModules";

import "./assets/css/main.css";

const moduleList = [
    new TitleModule("Hello!"),
    new TextModule("Welcome to Webpack Tech Talk"),
    new TextModule("Here is a automated list of all the modules in this little project: "),
    ...listOfModules,
]

function app() {
    renderModules("root", moduleList);
};

app();
