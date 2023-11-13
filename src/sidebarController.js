import { createDiv, createPara, createList } from "./domCreators";
import { taskController } from "./taskController";
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

        strip.appendChild(createDiv('project-bar-name', name));

        if (name !== 'default') {
            const deleteBtn = document.createElement('btn');
            const deleteIcon = document.createElement('i');
            deleteIcon.classList.add('fa-solid');
            deleteIcon.classList.add('fa-trash');
            deleteBtn.appendChild(deleteIcon);
            deleteBtn.classList.add('project-button');
            deleteBtn.addEventListener('click', (e) => {
                e.stopPropagation();
                console.log('remove');
            });
            strip.appendChild(deleteBtn);
        }

        strip.addEventListener('click', (e) => {
            taskController.displayStripPage(name);
        });

        return strip;        
    };

    const createProject = () => {
        const addBtn = document.createElement('button')
        addBtn.classList.add = 'project-add';
        addBtn.innerText = 'Add new project';
        
        addBtn.addEventListener('click', (e) => {
            console.log('new project');
        });

        document.querySelector('.sidebar').appendChild(addBtn);
        
    }; 

    return {
        displayProjects,
        createProject
    };
})();

export { sidebarController };