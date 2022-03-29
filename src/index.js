import './css/style.css';

// toDo item factory
const toDoFactory = (title, description, dueDate, priority, status=false) => {

    const getTitle = () => title;
    const getDescription = () => description;
    const getDueDate = () => dueDate;
    const getPriority = () => priority;
    const getStatus = () => status;

    const summarize = () => {
        const summary = `Title: ${title}\nDescription: ${description}\nDue Date: ${dueDate}\nPriority: ${priority}`;
        return summary;
    }

    return {getTitle, getDescription, getDueDate, getPriority, getStatus, summarize};
};

// project factory
const projectFactory = (name) => {
    const getName = () => name;

    const toDos = [];

    const addToProject = (toDo) => {
        toDos.push(toDo);
    };

    const removeFromProject = (itemIndex) => {
        if(itemIndex > toDos.length){
            throw new Error('Index out of bounds!');
        }
        delete toDos[itemIndex];
    };

    const printItems = () => {
        toDos.forEach((item) => {
            console.log(item.summarize());
        })
    };

    return {getName, addToProject, removeFromProject, printItems};
};


// internal projects module
const toDoModule = (() => {
    const projects = [];

    // create a new project and add to projects list
    const addProject = (projectName) => {
        projects.push(projectFactory(projectName));
    };

    // remove an existing project given its id
    const removeProject = (projectId) => {
        if(projectId > projects.length) {
            throw new Error("Index out of bounds!");
        }
        // projectId is the index of the project in the array as well as the projectId data attribute of the DOM node 
        delete projects[projectId];
    };

    // add a toDo item to an existing project
    const addToProject = (projectId, item) => {
        if(!Boolean(projects[projectId])) {
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
        const toDo = toDoFactory(title, description, dueDate, priority);
        projects[projectId].addToProject(toDo);
    };

    // remove a toDo item from an existing project
    const removeFromProject = (projectId, itemId) => {
        if(!Boolean(projects[projectId])) {
            throw new Error("Cannot add an item to a project that doesn't exist");
        }
        projects[projectId].removeFromProject(itemId);

    };


    return {addProject, removeProject, addToProject, removeFromProject};

})();


// const displayController = (() => {
//     const addProject = (project) => {
    
//     };



// })();

const today = toDoFactory('Work on to do', 'n/a', 'A week later', 'high');
const newToDo = toDoFactory('Work on table', 'Finish assembling the table', 'Sometime next week', 'medium');

const homeProject = projectFactory('Home Project');
homeProject.addToProject(today);
homeProject.addToProject(newToDo);
homeProject.printItems();

console.log("Now deleting an item from our project");

homeProject.removeFromProject(1);
homeProject.printItems();
