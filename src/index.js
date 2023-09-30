import './style.css';
import { createLayout } from "./layout";
import { tasks } from './tasks';

createLayout();

tasks.createTask('Go to the gym', 'leg day :(', '01.10.2023', 'low');
tasks.createTask('Go to sleep', 'at least 8h', '10.10.2023', 'medium');
console.log(tasks.getTask(1));