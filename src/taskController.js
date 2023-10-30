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
        const sTitle = createDiv('strip-title', title);
        const sDesc = createDiv('strip-desc', description);
        const sDate = createDiv('strip-date', dueDate);
        
        strip.appendChild(sTitle);
        strip.appendChild(sDesc);
        strip.appendChild(sDate);

        return strip;
    };

    return {
        displayTask
    };
})();

export { taskController };