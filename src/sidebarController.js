import { createDiv, createPara, createList } from "./domCreators";
import { tasks } from "./tasks";

const sidebarController = (() => {

    const displayProjects = () => {
        const projects = tasks.getProjectList();

        for (const i in projects) {
            document.querySelector('.sidebar').appendChild(createProjectBar(projects[i]));
        }
    };

    const createProjectBar = (name) => {
        const strip = createDiv('project-bar', undefined);

        const deleteBtn = document.createElement('button');

        strip.appendChild(createDiv('project-bar-name', name));
        strip.appendChild(deleteBtn);

        return strip;        
    };

    return {
        displayProjects
    };
})();

export { sidebarController };