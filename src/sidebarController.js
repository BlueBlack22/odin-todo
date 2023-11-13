import { createDiv, createPara, createList } from "./domCreators";
import { taskController } from "./taskController";
import { tasks } from "./tasks";

const sidebarController = (() => {

    const displayProjects = () => {
        document.querySelector('.sidebar').innerText = '';
        document.querySelector('.sidebar').appendChild(createDiv('sidebar-header', 'Your projects:'));
        document.querySelector('.sidebar').appendChild(createDiv('project-box', undefined));

        const projects = tasks.getProjectList();

        for (const i in projects) {
            document.querySelector('.project-box').appendChild(createProjectBar(projects[i]));
        }

        createProject();
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
        addBtn.classList.add('project-add');
        addBtn.innerText = 'Add new project';
        
        addBtn.addEventListener('click', (e) => {
            createProjectInput();
        });

        document.querySelector('.sidebar').appendChild(addBtn);
    };
    
    const createProjectInput = () => {
        const container = createDiv('new-project-box');
        const form = document.createElement('form');

        const nameInput = document.createElement('input');
        nameInput.setAttribute('type', 'text');
        nameInput.setAttribute('id', 'newProject');
        nameInput.required = true;
        nameInput.autofocus = true;
        
        const cancelBtn = document.createElement('button');
        cancelBtn.innerText = 'Cancel';
        cancelBtn.classList.add('project-btn');
        cancelBtn.classList.add('project-cancel');

        const confirmBtn = document.createElement('button');
        confirmBtn.innerText = 'Confirm';
        confirmBtn.classList.add('project-btn');
        confirmBtn.classList.add('project-confirm');

        form.appendChild(nameInput);
        form.appendChild(cancelBtn);
        form.appendChild(confirmBtn);

        container.appendChild(form);

        document.querySelector('.project-add').remove();
        document.querySelector('.sidebar').appendChild(container);
    };

    return {
        displayProjects
    };
})();

export { sidebarController };