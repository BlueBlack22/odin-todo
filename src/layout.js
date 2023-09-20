import { createDiv, createPara, createList } from "./creators";

function createLayout() {
    const content = document.getElementById('content');

    content.appendChild(createHeader());
    content.appendChild(createSidebar());
    content.appendChild(createTaskBox());
};

function createHeader() {
    const header = createDiv('header');
    header.appendChild(createPara(undefined, 'ToDo'));

    return header;
};

function createSidebar() {
    const sidebar = createDiv('sidebar');

    return sidebar;
};

function createTaskBox() {
    const taskBox = createDiv('task-box');

    return taskBox;
};

export { createLayout }