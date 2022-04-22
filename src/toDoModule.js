import { projectFactory } from "./project";
import { toDoFactory } from "./toDo";

// module stores data so it can be used in DOM
const toDoModule = (() => {
    const projects = [];
    let numProjects = 0;

    const getNumProjects = () => numProjects;

    // create a new project and add to projects list
    // returns the project's id in the internal list
    const addProject = (projectName) => {
        projects.push(projectFactory(projectName));
        numProjects += 1;
        return projects.length - 1;
    };

    // remove an existing project given its id
    const removeProject = (projectId) => {
        if (!Boolean(projects[projectId])) {
            throw new Error("Cannot remove an a project that doesn't exist");
        }
        // projectId is the index of the project in the array as well as the projectId data attribute of the DOM node 
        delete projects[projectId];
        numProjects--;
    };

    // get name of an existing project given its id
    const getProjectName = (projectId) => {
        if (!Boolean(projects[projectId])) {
            throw new Error("Cannot get name of a project that doesn't exist!");
        }
        return projects[projectId].getName();
    }

    // display all items on a project and return the project
    const viewProject = (projectId) => {
        if (!Boolean(projects[projectId])) {
            throw new Error("Cannot view a project that doesn't exist");
        }
        console.log(`Project name: ${projects[projectId].getName()}`);
        projects[projectId].visualize();
        return projects[projectId].getToDos();
    };

    // get number of items/toDos in a project
    const getNumToDos = (projectId) => projects[projectId].getNumToDos();

    // given porjectId and itemId, return that toDo item from that project
    const getItemInProject = (projectId, itemId) => {
        if (!Boolean(projects[projectId])) {
            throw new Error("Project doesn't exist internally!");
        }
        return projects[projectId].getItem(itemId);
    };

    // add a toDo item to an existing project and return the id
    const addToProject = (projectId, item) => {
        if (!Boolean(projects[projectId])) {
            throw new Error("Cannot add an item to a project that doesn't exist");
        }
        // item has title, description, dueDate, and priority attributes
        let title;
        let description;
        let dueDate;
        let priority;
        let status;
        try {
            title = item.title;
            description = item.description;
            dueDate = item.dueDate;
            priority = item.priority;
            if ('status' in item) {
                status = item.status;
            } else {
                status = false;
            }
        } catch (error) {
            throw error;
        }

        const id = getNumToDos(projectId);
        const toDo = toDoFactory(id, title, description, dueDate, priority, status);
        projects[projectId].add(toDo);
        return id;
    };

    // remove a toDo item from an existing project
    const removeFromProject = (projectId, itemId) => {
        if (!Boolean(projects[projectId])) {
            throw new Error("Cannot remove an item from a project that doesn't exist");
        }
        projects[projectId].remove(itemId);

    };

    const editToDoInProject = (projectId, todoId, item) => {
        if(!Boolean(projects[projectId])) {
            throw new Error("Project doesn't exist internally!")
        }
        projects[projectId].editToDo(todoId, item);
    };

    const toggleItemStatus = (projectId, todoId) => {
        if(!Boolean(projects[projectId])) {
            throw new Error("Project doesn't exist internally!")
        }
        projects[projectId].toggleItemStatus(todoId);
    };

    const getDescriptionProjectItem = (projectId, todoId) => {
        if (!Boolean(projects[projectId])){
            throw new Error("Cannot get description of project that doesn't exist!");
        }
        return projects[projectId].getDescription(todoId);
    };

    // returns an array of objects for each project
    // each object has a projectId, and an array of toDo items
    const getTodayItems = () => {
        const projectAndToDos = [];
        for (let i = 0; i < projects.length; i++) {
            // if project exists internally
            if (Boolean(projects[i])) {
                let todayItems = projects[i].getTodayItems();
                // if project has items due today
                if (todayItems.length > 0) {
                    let project = {projectId: i, items: todayItems};
                    projectAndToDos.push(project);
                    console.log(`Project: ${projects[i].getName()}`)
                    for (let k = 0; k < todayItems.length; k++){
                        console.log(todayItems[k].summarize());
                    }
                }
            }
        }
        console.log(projectAndToDos);
        return projectAndToDos;
    };

    // returns an array of objects for each project
    // each object has a projectId, and an array of toDo items
    const getThisWeekItems = () => {
        const projectAndToDos = [];
        for (let i = 0; i < projects.length; i++) {
            // if project exists internally
            if (Boolean(projects[i])) {
                let thisWeekItems = projects[i].getThisWeekItems();
                // if project has items due today
                if (thisWeekItems.length > 0) {
                    let project = {projectId: i, items: thisWeekItems};
                    projectAndToDos.push(project);
                    console.log(`Project: ${projects[i].getName()}`)
                    for (let k = 0; k < thisWeekItems.length; k++){
                        console.log(thisWeekItems[k].summarize());
                    }
                }
            }
        }
        console.log(projectAndToDos);
        return projectAndToDos;
    };

    return { getNumProjects, getProjectName, addProject, removeProject, viewProject, getNumToDos, addToProject, removeFromProject, getItemInProject, editToDoInProject, toggleItemStatus, getDescriptionProjectItem, getTodayItems, getThisWeekItems };

})();

export {
    toDoModule
} 