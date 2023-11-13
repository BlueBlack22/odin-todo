import { createDiv, createPara, createList } from "./domCreators";
import { tasks } from "./tasks";
import { editTaskModal } from "./editTaskModal";

const taskController = (() => {
    let lastProject = '';

    const displayTask = (projectName) => {
        document.querySelector('.strip-box').innerText = '';

        const matchingIndexes = tasks.findIndexByProjectName(projectName);
        
        if (matchingIndexes.length > 0) {
            for (const i in matchingIndexes) {
                const task = tasks.getTask(matchingIndexes[i]);
        
                document.querySelector('.strip-box').appendChild(createTaskStrip(task.title, task.dueDate, task.status, task.id));
                document.querySelector('.strip-box').appendChild(createDescBox(task.description));
            }
        } else {
            document.querySelector('.strip-box').appendChild(createDiv('empty-strip', 'There are no tasks in this project yet.'));
        }
    };

    const createTaskStrip = (title, dueDate, status, id) => {
        const strip = document.createElement('div');
        strip.classList.add('strip');
        strip.setAttribute('data-id', id);
        if (status === true ) {
            strip.classList.add('status-completed');
        }

        const left = createDiv('strip-left', undefined);
        const right = createDiv('strip-right', undefined);

        const sTitle = createDiv('strip-title', title);
        const sDate = createDiv('strip-date', dueDate);
        
        const checkBox = document.createElement('input');
        checkBox.setAttribute('type', 'checkbox');
        checkBox.name = 'status-checkbox';
        checkBox.checked = status;
        checkBox.addEventListener('change', (e) => {
            if (checkBox.checked == true) {
                tasks.editStatus(id, true);
            } else {
                tasks.editStatus(id, false);
            }
            displayStripPage('default');
        });
        checkBox.addEventListener('click', (e) => {
            e.stopPropagation();
        });
        
        const editBtn = document.createElement('btn');
        const editIcon = document.createElement('i');
        editIcon.classList.add('fa-solid');
        editIcon.classList.add('fa-pen-to-square');
        editBtn.appendChild(editIcon);
        editBtn.classList.add('strip-button');
        editBtn.addEventListener('click', (e) => {
            e.stopPropagation();
            document.getElementById('edit-modal').remove();
            document.getElementById('content').appendChild(editTaskModal.createEditTaskModal(id));
            document.getElementById('edit-modal').showModal();
        });

        const deleteBtn = document.createElement('btn');
        const deleteIcon = document.createElement('i');
        deleteIcon.classList.add('fa-solid');
        deleteIcon.classList.add('fa-trash');
        deleteBtn.appendChild(deleteIcon);
        deleteBtn.classList.add('strip-button');
        deleteBtn.addEventListener('click', (e) => {
            e.stopPropagation();
            tasks.deleteTask(strip.dataset.id);
            displayStripPage('default');
        });

        left.appendChild(checkBox);
        left.appendChild(sTitle);

        right.appendChild(sDate);
        right.appendChild(editBtn);
        right.appendChild(deleteBtn);

        strip.appendChild(left);
        strip.appendChild(right);

        strip.addEventListener('click', () => {
            strip.classList.toggle('desc-active');
            let content = strip.nextElementSibling;
            if (content !== null) {
                if (content.style.display === 'block') {
                    content.style.display = 'none';
                } else {
                    content.style.display = 'block';
                }
            }
        });

        return strip;
    };

    const createDescBox = (description) => {
        const descBox = createDiv('desc-box', undefined);
        const desc = document.createElement('p');
        desc.innerText = description;
        descBox.appendChild(desc);

        return descBox;
    };

    const displayProjectName = (projectName) => {
        document.querySelector('.main-header').textContent = '';
        const name = createDiv('project-name', projectName);
        document.querySelector('.main-header').appendChild(name);
    };

    const displayAddTask = () => {
        const addBtn = document.createElement('button');
        addBtn.classList.add('new-task-btn');
        addBtn.innerText = 'Add new task';

        addBtn.addEventListener('click', () => {
            document.getElementById('new-modal').showModal();
        });

        document.querySelector('.main-header').appendChild(addBtn);
    };

    const displayStripPage = (projectName) => {
        displayTask(projectName);
        displayProjectName(projectName);
        displayAddTask();
    };

    return {
        displayTask,
        displayProjectName,
        displayAddTask,
        displayStripPage
    };
})();

export { taskController };