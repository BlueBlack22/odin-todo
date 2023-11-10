import { createDiv, createPara, createList } from "./domCreators";

function createLayout() {
    const content = document.getElementById('content');

    content.appendChild(createHeader());
    content.appendChild(createSidebar());
    content.appendChild(createMainBox());
};

function createHeader() {
    const header = createDiv('header');
    header.appendChild(createPara(undefined, 'ToDo'));

    return header;
};

function createSidebar() {
    const sidebar = createDiv('sidebar');
    const projectBox = createDiv('project-box', undefined);
    sidebar.appendChild(createDiv('sidebar-header', 'Your projects:'));
    sidebar.appendChild(projectBox);

    return sidebar;
};

function createMainBox() {
    const mainBox = createDiv('main-box');
    const mainHeader = createDiv('main-header');
    const stripBox = createDiv('strip-box');
    mainBox.appendChild(mainHeader);
    mainBox.appendChild(stripBox);

    return mainBox;
};

export { createLayout }