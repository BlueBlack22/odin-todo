const tasks = (() => {
    const taskList = [];

    const createTask = (title, description, dueDate, priority) => {
        const newTask = taskConstructor(title, description, dueDate, priority);
        taskList.push(newTask);
    };

    const taskConstructor = (title, description, dueDate, priority) => {
        return {
            title,
            description,
            dueDate,
            priority
        }
    };  

    const getTask = (index) => {
        return taskList[index];
    };

    const getTaskList = () => {
        return taskList;
    };

    return { createTask, getTask, getTaskList };
})();

export { tasks }