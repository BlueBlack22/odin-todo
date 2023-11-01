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

    const displayAddProject = () => {
        const strip = createDiv('project-add', 'Add new project');
        document.querySelector('.sidebar').appendChild(strip);
    };

    return {
        displayProjects,
        displayAddProject
    };
})();

export { sidebarController };