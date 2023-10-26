const tasks = (() => {
    const taskList = [];
    const projectList = ['default'];
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

    const createProject = (projectName) => {
        if (projectList.includes(projectName)) {
            return false;
        } else {
            projectList.push(projectName)
        }
    };

    const removeProject = (projectName) => {
        
    };

    const getProjectName = (index) => {
        return projectList[index];        
    };

    const getProjectList = () => {
        return projectList;
    };

    const findIndexByID = (id) => {
        for (const i in taskList) {
            if (taskList[i].id == id) {
                return i;
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
        deleteTask, 
        getTask, 
        getTaskList,  
        changeTitle,
        changeDescription,
        changeDueDate,
        changePriority,
        changeStatus,
        changeProject,
        createProject,
        getProjectName,
        getProjectList
    };
})();

export { tasks }