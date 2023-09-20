import { createDiv, createPara, createList } from "./creators";

function createLayout() {
    const layout = createDiv('layout');

    layout.appendChild(createDiv('header', 'header'));
    layout.appendChild(createDiv('sidebar', 'sidebar'));
    layout.appendChild(createDiv('task-box', 'taskBox'));

    return layout;
};  

export { createLayout }