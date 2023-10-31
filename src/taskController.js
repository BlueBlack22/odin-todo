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
        
        const editBtn = document.createElement('button');
        const deleteBtn = document.createElement('button');

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

    return {
        displayTask
    };
})();

export { taskController };