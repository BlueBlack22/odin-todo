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
        deleteIcon.classList.add('fa-trash');
        deleteBtn.appendChild(deleteIcon);
        deleteBtn.classList.add('project-button');
        deleteBtn.addEventListener('click', (e) => console.log('remove'));

        strip.appendChild(createDiv('project-bar-name', name));
        strip.appendChild(deleteBtn);

        return strip;        
    };

    const createProject = () => {
        const addBtn = document.createElement('button')
        addBtn.classList.add = 'project-add';
        addBtn.innerText = 'Add new project';
        
        addBtn.addEventListener('click', (e) => {
            console.log('new project');
        })

        document.querySelector('.sidebar').appendChild(addBtn);
        
    }; 

    return {
        displayProjects,
        createProject
    };
})();

export { sidebarController };