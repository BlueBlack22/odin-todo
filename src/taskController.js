import { createDiv, createPara, createList } from "./domCreators";
import { tasks } from "./tasks";
import editImg from "./img/edit.svg";
import deleteImg from "./img/delete.svg";

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
        
        const editBtn = document.createElement('img');
        editBtn.src = editImg;
        editBtn.classList.add('strip-icon');
        editBtn.addEventListener('click', (e) => console.log('edit'));

        const deleteBtn = document.createElement('img');
        deleteBtn.src = deleteImg;
        deleteBtn.classList.add('strip-icon');
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
        document.querySelector('.strip-box').appendChild(name);
    };

    return {
        displayTask,
        displayProjectName
    };
})();

export { taskController };