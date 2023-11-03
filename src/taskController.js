import { createDiv, createPara, createList } from "./domCreators";
import { tasks } from "./tasks";

const taskController = (() => {
    
    const displayTask = (projectName) => {
        const matchingIndexes = tasks.findIndexByProjectName(projectName);
    
        for (const i in matchingIndexes) {
            const task = tasks.getTask(matchingIndexes[i]);
    
            document.querySelector('.strip-box').appendChild(createTaskStrip(task.title, task.description, task.dueDate));
        }
    };
    
    const createTaskStrip = (title, description, dueDate) => {
        const strip = createDiv('strip', undefined);
        const left = createDiv('strip-left', undefined);
        const right = createDiv('strip-right', undefined);

        const sTitle = createDiv('strip-title', title);
        const sDesc = createDiv('strip-desc', description);
        const sDate = createDiv('strip-date', dueDate);
        
        const checkBox = document.createElement('input');
        checkBox.setAttribute('type', 'checkbox');
        
        const editBtn = document.createElement('btn');
        const editIcon = document.createElement('i');
        editIcon.classList.add('fa-solid');
        editIcon.classList.add('fa-pen-to-square');
        editBtn.appendChild(editIcon);
        editBtn.classList.add('strip-button');
        editBtn.addEventListener('click', (e) => console.log('edit'));

        const deleteBtn = document.createElement('btn');
        const deleteIcon = document.createElement('i');
        deleteIcon.classList.add('fa-solid');
        deleteIcon.classList.add('fa-trash');
        deleteBtn.appendChild(deleteIcon);
        deleteBtn.classList.add('strip-button');
        deleteBtn.addEventListener('click', (e) => console.log('remove'));

        left.appendChild(checkBox);
        left.appendChild(sTitle);
        left.appendChild(sDesc);

        right.appendChild(sDate);
        right.appendChild(editBtn);
        right.appendChild(deleteBtn);

        strip.appendChild(left);
        strip.appendChild(right);

        return strip;
    };

    const displayProjectName = (projectName) => {
        const name = createDiv('project-name', projectName);
        document.querySelector('.main-header').appendChild(name);
    };

    const displayAddTask = () => {
        const addBtn = document.createElement('button');
        addBtn.classList.add('new-task-btn');
        addBtn.innerText = 'Add new task';

        addBtn.addEventListener('click', () => {
            document.getElementById('modal').showModal();
        });

        document.querySelector('.main-header').appendChild(addBtn);
    };

    return {
        displayTask,
        displayProjectName,
        displayAddTask
    };
})();

export { taskController };