import { createDiv, createPara, createList } from "./domCreators";
import { taskController } from "./taskController";
import { tasks } from "./tasks";

const editTaskModal = (() => {
    const createEditTaskModal = (id) => {
        let task = {};

        if (id !== "") {
            task = tasks.getTask(tasks.findIndexByID(id));
        } else {
            task = {
                title: '',
                description: '',
                dueDate: '',
                priority: ''
            }
        }

        const modal = document.createElement('dialog');
        modal.setAttribute('id', 'edit-modal');

        const headerBox = createDiv('modal-header-box', undefined);

        const headerText = createDiv('modal-header-text', 'Edit task details');

        const closeBtn = document.createElement('button');
        closeBtn.classList.add('modal-close-btn');
        closeBtn.innerText = 'x';

        closeBtn.addEventListener('click', () => {
            document.getElementById('edit-modal').close();
        });

        modal.appendChild(closeBtn);

        headerBox.appendChild(headerText);
        headerBox.appendChild(closeBtn);

        const form = document.createElement('form');

        const titleDiv = createDiv('modal-title', undefined);
        const titleLabel = document.createElement('label');
        titleLabel.innerText = 'Title:';
        titleLabel.htmlFor = 'editTitle';
        const titleInput = document.createElement('input');
        titleInput.setAttribute('type', 'text');
        titleInput.setAttribute('id', 'editTitle');
        titleInput.value = task.title;
        titleInput.required = true;
        titleInput.autofocus = true;
        titleDiv.appendChild(titleLabel);
        titleDiv.appendChild(document.createElement('br'));
        titleDiv.appendChild(titleInput);

        const descDiv = createDiv('modal-desc', undefined);
        const descLabel = document.createElement('label');
        descLabel.htmlFor = 'editDesc';
        descLabel.innerText = 'Description:';
        const descInput = document.createElement('input');
        descInput.value = task.description;
        descInput.setAttribute('type', 'text');
        descInput.setAttribute('id', 'editDesc');
        descDiv.appendChild(descLabel);
        descDiv.appendChild(document.createElement('br'));
        descDiv.appendChild(descInput);

        const dateDiv = createDiv('modal-date', undefined);
        const dateLabel = document.createElement('label');
        dateLabel.htmlFor = 'editDueDate';
        dateLabel.innerText = 'Due date:';
        const dateInput = document.createElement('input');
        dateInput.setAttribute('type', 'date');
        dateInput.setAttribute('id', 'editDueDate');
        dateInput.value = task.dueDate;
        dateInput.required = true;
        dateDiv.appendChild(dateLabel);
        dateDiv.appendChild(document.createElement('br'));
        dateDiv.appendChild(dateInput);

        const projectDiv = createDiv('modal-project', undefined);
        const projectLabel = document.createElement('label');
        projectLabel.innerText = 'Assign to project:';
        const projectSelect = document.createElement('select');
        projectSelect.setAttribute('id', 'projectSelect');
        projectSelect.required = true;
    
        const defaultOption = document.createElement('option');
        defaultOption.value = 'default';
        defaultOption.text = 'Default Project';
        projectSelect.appendChild(defaultOption);

        const projects = tasks.getProjectList();
        for (let i = 1; i < projects.length; i++) {
            const newOption = document.createElement('option');
            newOption.text = projects[i];
            projectSelect.appendChild(newOption);
        }
        projectSelect.value = task.project;
        projectLabel.appendChild(projectSelect);
        projectDiv.appendChild(projectLabel);
        
        const priorityDiv = createDiv('modal-priority', undefined);
        const priorityLabel = document.createElement('label');
        priorityLabel.innerText = `Select task's priority:`;
        const prioritySelect = document.createElement('select');
        prioritySelect.setAttribute('id', 'prioritySelect');
        prioritySelect.required = true;

        const lowOption = document.createElement('option');
        lowOption.text = 'Low';
        prioritySelect.appendChild(lowOption);

        const mediumOption = document.createElement('option');
        mediumOption.text = 'Medium';
        prioritySelect.appendChild(mediumOption);

        const highOption = document.createElement('option');
        highOption.text = 'High';
        prioritySelect.appendChild(highOption);

        prioritySelect.value = task.priority;

        priorityLabel.appendChild(prioritySelect);
        priorityDiv.appendChild(priorityLabel);

        const createBtn = document.createElement('button');
        createBtn.setAttribute('id', 'createBtn');
        createBtn.type = 'submit';
        createBtn.innerText = 'Edit Task';

        form.addEventListener('submit', (e) => {
            console.log(editTitle.value, editDesc.value, editDueDate.value, projectSelect.value, prioritySelect.value);
            editTask(id, editTitle.value, editDesc.value, editDueDate.value, projectSelect.value, prioritySelect.value);
            document.getElementById('edit-modal').close();
            e.preventDefault();
        })

        form.appendChild(titleDiv);
        form.appendChild(descDiv);
        form.appendChild(dateDiv);
        form.appendChild(projectDiv);
        form.appendChild(priorityDiv);
        form.appendChild(createBtn);

        modal.appendChild(headerBox);
        modal.appendChild(form);

        return modal;
    };

    const editTask = (id, title, description, dueDate, project, priority) => {
        tasks.editTask(id, title, description, dueDate, priority, project);
        taskController.displayStripPage(project);
    };

    return {
        createEditTaskModal
    }
})();

export { editTaskModal };