import { createDiv, createPara, createList } from "./domCreators";
import { tasks } from "./tasks";

const taskModal = (() => {
    const createModal = () => {
        const modal = document.createElement('dialog');
        modal.setAttribute('id', 'modal');

        const headerBox = createDiv('modal-header-box', undefined);

        const headerText = createDiv('modal-header-text', 'Create new task');

        const closeBtn = document.createElement('button');
        closeBtn.classList.add('modal-close-btn');
        closeBtn.innerText = 'x';
        modal.appendChild(closeBtn);

        headerBox.appendChild(headerText);
        headerBox.appendChild(closeBtn);

        const form = document.createElement('form');

        const titleDiv = createDiv('modal-title', undefined);
        const titleLabel = document.createElement('label');
        titleLabel.innerText = 'Title:';
        titleLabel.htmlFor = 'newTitle';
        const titleInput = document.createElement('input');
        titleInput.setAttribute('type', 'text');
        titleInput.setAttribute('id', 'newTitle');
        titleInput.required = true;
        titleDiv.appendChild(titleLabel);
        titleDiv.appendChild(document.createElement('br'));
        titleDiv.appendChild(titleInput);

        const descDiv = createDiv('modal-desc', undefined);
        const descLabel = document.createElement('label');
        descLabel.htmlFor = 'newDesc';
        descLabel.innerText = 'Description:';
        const descInput = document.createElement('input');
        descInput.setAttribute('type', 'text');
        descInput.setAttribute('id', 'newDesc');
        descDiv.appendChild(descLabel);
        descDiv.appendChild(document.createElement('br'));
        descDiv.appendChild(descInput);

        const dateDiv = createDiv('modal-date', undefined);
        const dateLabel = document.createElement('label');
        dateLabel.htmlFor = 'newDueDate';
        dateLabel.innerText = 'Due date:';
        const dateInput = document.createElement('input');
        dateInput.setAttribute('type', 'date');
        dateInput.setAttribute('id', 'newDueDate');
        dateDiv.appendChild(dateLabel);
        dateDiv.appendChild(document.createElement('br'));
        dateDiv.appendChild(dateInput);

        const projectDiv = createDiv('modal-project', undefined);
        const projectLabel = document.createElement('label');
        projectLabel.innerText = 'Assign to project:';
        const projectSelect = document.createElement('select');
    
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
        projectLabel.appendChild(projectSelect);
        projectDiv.appendChild(projectLabel);
        
        const priorityDiv = createDiv('modal-priority', undefined);
        const priorityLabel = document.createElement('label');
        priorityLabel.innerText = `Select task's priority:`;
        const prioritySelect = document.createElement('select');

        const lowOption = document.createElement('option');
        lowOption.text = 'Low';
        prioritySelect.appendChild(lowOption);

        const mediumOption = document.createElement('option');
        mediumOption.text = 'Medium';
        prioritySelect.appendChild(mediumOption);

        const highOption = document.createElement('option');
        highOption.text = 'High';
        prioritySelect.appendChild(highOption);

        priorityLabel.appendChild(prioritySelect);
        priorityDiv.appendChild(priorityLabel);

        const createBtn = document.createElement('button');
        createBtn.setAttribute('id', 'createBtn');
        createBtn.value = 'default';
        createBtn.innerText = 'Create Task';

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

    return {
        createModal
    }
})();

export { taskModal };