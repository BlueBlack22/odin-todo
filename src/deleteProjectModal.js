import { createDiv, createPara, createList } from "./domCreators";
import { taskController } from "./taskController";
import { tasks } from "./tasks";

const deleteProjectModal = (() => {
    const createDeleteProjectModal = (project = '') => {
        const modal = document.createElement('dialog');
        modal.setAttribute('id', 'delete-modal');

        modal.appendChild(createDiv('modal-delete-header', 'Are you sure?'));
        modal.appendChild(createPara('modal-delete-text', 'All tasks in this project will be removed.'));

        const cancelButton = document.createElement('button');
        cancelButton.classList.add('modal-remove-cancel');
        cancelButton.innerText = 'Cancel';
        cancelButton.addEventListener('click', () => {
            document.getElementById('delete-modal').close();
        })
        modal.appendChild(cancelButton);

        const confirmButton = document.createElement('button');
        confirmButton.classList.add('modal-remove-confirm');
        confirmButton.innerText = 'Confirm';
        confirmButton.addEventListener('click', () => {
            tasks.deleteProject(project);
            taskController.displayStripPage('default');
            document.getElementById('delete-modal').close();
        })
        modal.appendChild(confirmButton);

        return modal;
    }

    return {
        createDeleteProjectModal
    }
})();

export { deleteProjectModal };