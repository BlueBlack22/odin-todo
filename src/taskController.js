import { createDiv, createPara, createList } from "./domCreators";
import { tasks } from "./tasks";

const taskController = (() => {
    
    const displayTask = (projectName) => {
        const matchingIndexes = tasks.findIndexByProjectName(projectName);
    
        for (const i in matchingIndexes) {
            const task = tasks.getTask(matchingIndexes[i]);
    
            document.querySelector('.strip-box').appendChild(createTaskStrip(task.title));
        }
    };
    
    const createTaskStrip = (title) => {
        const strip = createDiv('strip', undefined);
        const sTitle = createDiv('strip-title', title);
        
        strip.appendChild(sTitle);

        return strip;
    };

    return {
        displayTask
    };
})();

export { taskController };