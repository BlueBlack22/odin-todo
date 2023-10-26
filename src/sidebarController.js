import { createDiv, createPara, createList } from "./domCreators";
import { tasks } from "./tasks";

const sidebarController = (() => {

    const createProjects = () => {
        const projects = tasks.getProjectList();

        for (const i in projects) {
            document.querySelector('.sidebar').appendChild(createDiv('project-box', projects[i]));
        }
    };

    return {
        createProjects
    };
})();

export { sidebarController };