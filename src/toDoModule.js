import { projectFactory } from "./project";
import { toDoFactory } from "./toDo";

// module stores data so it can be used in DOM
const toDoModule = (() => {
    const projects = [];
    let numProjects = 0;

    const getNumProjects = () => numProjects;

    // create a new project and add to projects list
    const addProject = (projectName) => {
        projects.push(projectFactory(projectName));
        numProjects += 1;
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

    // display all items on a project and return the project
    const viewProject = (projectId) => {
        if (!Boolean(projects[projectId])) {
            throw new Error("Cannot view a project that doesn't exist");
        }
        console.log(`Project name: ${projects[projectId].getName()}`);
        projects[projectId].visualize();
        return projects[projectId];
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
        try {
            title = item.title;
            description = item.description;
            dueDate = item.dueDate;
            priority = item.priority;
        } catch (error) {
            throw error;
        }
        const id = getNumToDos(projectId);
        const toDo = toDoFactory(id, title, description, dueDate, priority);
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

    return { getNumProjects, addProject, removeProject, viewProject, getNumToDos, addToProject, removeFromProject, getItemInProject, editToDoInProject, toggleItemStatus };

})();

export {
    toDoModule
} 