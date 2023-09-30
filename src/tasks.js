const tasks = (() => {
    const taskList = [];
    let taskID = 0;

    const createTask = (title, description, dueDate, priority, status = false, project = 'default') => {
        const id = taskID;
        const newTask = taskConstructor(title, description, dueDate, priority, status, project, id);
        taskID++;
        taskList.push(newTask);
    };

    const taskConstructor = (title, description, dueDate, priority, status, project, id) => {
        return {
            title,
            description,
            dueDate,
            priority,
            status,
            project,
            id
        }
    };

    const changeStatus = (id, newStatus) => {
        
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