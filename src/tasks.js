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

    const findIndexByID = (id) => {
        for (const i in taskList) {
            if (taskList[i].id == id) {
                return i
            }
        }
    };

    const deleteTask = (id) => {
        const index = findIndexByID(id);
        taskList.splice(index, 1);
    };

    const changeTitle = (id, newTitle) => {
        const index = findIndexByID(id);
        taskList[index].title = newTitle;
    };

    const changeDescription = (id, newDesc) => {
        const index = findIndexByID(id);
        taskList[index].description = newDesc;
    };

    const changeDueDate = (id, newDate) => {
        const index = findIndexByID(id);
        taskList[index].dueDate = newDate;
    };

    const changePriority = (id, newPriority) => {
        const index = findIndexByID(id);
        taskList[index].priority = newPriority;
    };

    const changeStatus = (id, newStatus) => {
        const index = findIndexByID(id);
        taskList[index].status = newStatus;
    };

    const changeProject = (id, newProject) => {
        const index = findIndexByID(id);
        taskList[index].project = newProject;
    };

    const getTask = (index) => {
        return taskList[index];
    };

    const getTaskList = () => {
        return taskList;
    };

    return { 
        createTask, 
        getTask, 
        getTaskList,  
        deleteTask,
        changeTitle,
        changeDescription,
        changeDueDate,
        changePriority,
        changeStatus,
        changeProject
    };
})();

export { tasks }