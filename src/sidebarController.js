import { createDiv, createPara, createList } from "./domCreators";
import { tasks } from "./tasks";

const sidebarController = (() => {

    const displayProjects = () => {
        const projects = tasks.getProjectList();

        for (const i in projects) {
            document.querySelector('.project-box').appendChild(createProjectBar(projects[i]));
        }
    };

    const createProjectBar = (name) => {
        const strip = createDiv('project-bar', undefined);

        const deleteBtn = document.createElement('btn');
        const deleteIcon = document.createElement('i');
        deleteIcon.classList.add('fa-solid');
        deleteIcon.classList.add('fa-pen-to-square');
        deleteBtn.appendChild(deleteIcon);
        deleteBtn.classList.add('project-button');
        deleteBtn.addEventListener('click', (e) => console.log('remove'));

        strip.appendChild(createDiv('project-bar-name', name));
        strip.appendChild(deleteBtn);

        return strip;        
    };

    return {
        displayProjects
    };
})();

export { sidebarController };