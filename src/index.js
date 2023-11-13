import './style.css';
import { createLayout } from "./layout";
import { tasks } from './tasks';
import { sidebarController } from './sidebarController';
import { createDiv, createPara, createList } from "./domCreators";
import { taskController } from './taskController';
import { newTaskModal } from './newTaskModal';
import { editTaskModal } from './editTaskModal';

createLayout();
taskController.displayStripPage('default');

tasks.createTask('Go to the gym', 'leg day :(', '2023-11-11', 'low');
tasks.createTask('Go to sleep1', 'at least 8h', '2023-11-12', 'medium');
tasks.createTask('Go to sleep2', 'at least 8h', '2023-11-13', 'medium', true);
tasks.createTask('Go to sleep3', 'at least 8h', '2023-11-14', 'medium');

tasks.createProject('test');

sidebarController.displayProjects();
taskController.displayProjectName('default');
taskController.displayTask('default');
taskController.displayAddTask();

document.getElementById('content').appendChild(newTaskModal.createNewTaskModal());
document.getElementById('content').appendChild(editTaskModal.createEditTaskModal(''));