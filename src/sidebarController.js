import { createDiv, createPara, createList } from "./domCreators";
import { tasks } from "./tasks";

const sidebarController = (() => {

    const displayProjects = () => {
        const projects = tasks.getProjectList();

        for (const i in projects) {
            document.querySelector('.sidebar').appendChild(createDiv('project-box', projects[i]));
        }
    };

    const displayTask = (projectName) => {
        const matchingIndexes = tasks.findIndexByProjectName(projectName);

        for (const i in matchingIndexes) {
            const task = tasks.getTask(matchingIndexes[i]);

            document.querySelector('.task-box').appendChild(createDiv('task', task.title));
        }
    };

    return {
        displayProjects,
        displayTask
    };
})();

export { sidebarController };