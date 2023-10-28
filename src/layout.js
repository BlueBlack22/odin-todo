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
    sidebar.appendChild(createDiv('sidebar-header', 'Your projects:'));

    return sidebar;
};

function createMainBox() {
    const mainBox = createDiv('main-box');
    const tableBox = createDiv('table-box');
    const table = document.createElement('table');
    const thead = document.createElement('thead');
    const tr = document.createElement('tr');

    const title = document.createElement('th');
    title.textContent = 'Title';
    const desc = document.createElement('th');
    desc.textContent = 'Description';

    return mainBox;
};

export { createLayout }