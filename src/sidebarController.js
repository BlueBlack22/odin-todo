import { createDiv, createPara, createList } from "./domCreators";
import { tasks } from "./tasks";

const sidebar = document.querySelector('.sidebar');

const sidebarController = (() => {

    /*
    const createProjects = () => {
        const projects = tasks.getProjectList();

        for (const i in projects) {
            sidebar.appendChild(createDiv('project-box', projects[i]));
        }
    };
    */

    const createDupsko = (text) => {
        sidebar.appendChild(createDiv('project-box', 'dupsko'));
    }

    return {
        //createProjects,
        createDupsko
    };
})();

export { sidebarController };