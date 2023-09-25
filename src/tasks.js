const tasks = (() => {
    const taskList = [];

    const createTask = (title, description, dueDate, priority) => {
        taskList.push(title, description, dueDate, priority);
    };

    const getTask = (index) => {
        return taskList[index];
    };

    return { createTask, getTask };
})();

export { createTask, getTask }