import './style.css';
import { createLayout } from "./layout";
import { tasks } from './tasks';
import { sidebarController } from './sidebarController';
import { createDiv, createPara, createList } from "./domCreators";
import { taskController } from './taskController';
import { newTaskModal } from './newTaskModal';
import { editTaskModal } from './editTaskModal';

createLayout();
sidebarController.createProject();

tasks.createTask('Go to the gym', 'leg day :(', '01.10.2023', 'low');
tasks.createTask('Go to sleep1', 'at least 8h', '10.10.2023', 'medium');
tasks.createTask('Go to sleep2', 'at least 8h', '10.10.2023', 'medium');
tasks.createTask('Go to sleep3', 'at least 8h', '10.10.2023', 'medium');

tasks.createProject('test');
console.log(tasks.getProjectList());

sidebarController.displayProjects();
taskController.displayProjectName('default');
taskController.displayTask('default');
taskController.displayAddTask();

document.getElementById('content').appendChild(newTaskModal.createNewTaskModal());
document.getElementById('content').appendChild(editTaskModal.createEditTaskModal(''));