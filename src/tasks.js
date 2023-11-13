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

    const deleteProject = (projectName) => {
        if (projectName !== 'default') {
            for (const i in projectList) {
                if (projectList[i] === projectName) {
                    projectList.splice(i, 1);
                }
            }

            deleteTasksInProject(projectName);
        } else {
            return false;
        }
    };

    const deleteTasksInProject = (projectName) => {
        const indexesToDelete = findIndexByProjectName(projectName);
        
        for (const i in indexesToDelete) {
            deleteTaskByIndex(indexesToDelete[i]);
        }
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

    const findIndexByProjectName = (projectName) => {
        const matchingIndexes = [];

        for (const i in taskList) {
            if (taskList[i].project == projectName) {
                matchingIndexes.push(i);
            }
        }

        return matchingIndexes;
    };

    const deleteTask = (id) => {
        const index = findIndexByID(id);
        taskList.splice(index, 1);
    };

    const deleteTaskByIndex = (index) => {
        taskList.splice(index, 1);
    };

    const editTask = (id, title, description, dueDate, priority, project) => {
        const index = findIndexByID(id);
        taskList[index].title = title;
        taskList[index].description = description,
        taskList[index].dueDate = dueDate;
        taskList[index].priority = priority;
        taskList[index].project = project;
    };

    const editStatus = (id, status) => {
        const index = findIndexByID(id);
        taskList[index].status = status;
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
        deleteTaskByIndex, 
        getTask, 
        getTaskList,
        findIndexByID,
        findIndexByProjectName,  
        editTask,
        editStatus,
        createProject,
        deleteProject,
        getProjectName,
        getProjectList
    };
})();

export { tasks }