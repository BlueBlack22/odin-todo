import './style.css';
import { createLayout } from "./layout";
import { tasks } from './tasks';
import { sidebarController } from './sidebarController';
import { createDiv, createPara, createList } from "./domCreators";
import { taskController } from './taskController';

createLayout();

tasks.createTask('Go to the gym', 'leg day :(', '01.10.2023', 'low');
tasks.createTask('Go to sleep1', 'at least 8h', '10.10.2023', 'medium');
tasks.createTask('Go to sleep2', 'at least 8h', '10.10.2023', 'medium');
tasks.createTask('Go to sleep3', 'at least 8h', '10.10.2023', 'medium');


sidebarController.displayProjects();
taskController.displayProjectName('default');
taskController.displayTask('default');