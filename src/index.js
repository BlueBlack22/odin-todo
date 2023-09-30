import './style.css';
import { createLayout } from "./layout";
import { tasks } from './tasks';

createLayout();

tasks.createTask('Go to the gym', 'leg day :(', '01.10.2023', 'low');
console.log(tasks.getTaskList());