import './css/style.css';

// toDo item factory
const toDoFactory = (id = null, title, description, dueDate, priority, status = false) => {

    const getId = () => id;
    const getTitle = () => title;
    const getDescription = () => description;
    const getDueDate = () => dueDate;
    const getPriority = () => priority;
    const getStatus = () => status;

    const summarize = () => {
        const summary = `Id: ${id}\nTitle: ${title}\nDescription: ${description}\nDue Date: ${dueDate}\nPriority: ${priority}`;
        return summary;
    }

    return { getId, getTitle, getDescription, getDueDate, getPriority, getStatus, summarize };
};

// project factory
const projectFactory = (name) => {
    const toDos = [];
    let numToDos = 0;

    const getName = () => name;

    const add = (toDo) => {
        toDos.push(toDo);
        numToDos++;
    };

    const remove = (itemIndex) => {
        if (!Boolean(toDos[itemIndex])) {
            throw new Error("Cannot find item in this project!");
        }
        delete toDos[itemIndex];
        numToDos--;
    };

    const visualize = () => {
        toDos.forEach((item) => {
            console.log(item.summarize());
        })
    };

    const getToDos = () => toDos;

    const getNumToDos = () => numToDos;

    return { getName, add, remove, getToDos, getNumToDos, visualize };
};


// internal projects module
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

    return { getNumProjects, addProject, removeProject, viewProject, getNumToDos, addToProject, removeFromProject };

})();

// DOM controller; adds stuff to and removes stuff from dom
// controls the event listeners as well
const displayController = (() => {
    const projectsSection = document.querySelector('.projects');

    // add new project to display and return the node
    const addProject = (projectName, projectId) => {
        const project = document.createElement("div");
        project.textContent = projectName;
        project.setAttribute("data-projectid", `${projectId}`);
        projectsSection.appendChild(project);
        return project;
    };

    const deleteAllItems = (projectNode) => {
        // console.log(projectNode);
        const projectId = projectNode.getAttribute("data-projectid");
        const listItemsToDelete = document.querySelectorAll(`div.toDos [data-projectid="${projectId}"]`);
        listItemsToDelete.forEach((node) => {
            const nodeParent = node.parentNode;
            nodeParent.removeChild(node);
        });
    };

    const deleteAllItemsv2 = () => {
        const toDoSection = document.querySelector('.toDos');
        while(toDoSection.firstChild) {
            toDoSection.removeChild(toDoSection.firstChild);
        }
    };

    // remove project as well as the to do list items
    const removeProject = (projectNode) => {
        // deleteAllItems(projectNode);
        deleteAllItemsv2();
        const parent = projectNode.parentNode;
        parent.removeChild(projectNode);
    };

    const clearProjectContent = () => {
        const contentSection = document.querySelector(".content");
        deleteAllItemsv2();
        const addItemButton = document.querySelector(".content .addButton");
        if(addItemButton !== null){
            contentSection.removeChild(addItemButton);
        }
    }

    // adding toDos to a project
    const addToProject = (projectId, item, itemId) => {
        const toDoSection = document.querySelector('.toDos');
        const toDo = document.createElement("div");
        toDo.setAttribute("data-todoid", `${itemId}`);
        toDo.setAttribute("data-projectid", `${projectId}`);
        toDo.textContent = JSON.stringify(item);
        toDoSection.appendChild(toDo);
    };

    // function to display project items in the DOM
    // project: internal project object
    // projectId: id of the project in the DOM
    const viewProject = (project, projectId) => {
        const toDos = project.getToDos();
        toDos.forEach((toDo) => {
            const item = {
                title: toDo.getTitle(),
                description: toDo.getDescription(),
                dueDate: toDo.getDueDate(),
                priority: toDo.getPriority(),
            }   
            addToProject(projectId, item, toDo.getId());
        });
    };

    // function to display the add to do button
    // returns the button node once created/displayed
    const displayAddItemButton = (projectId) => {
        console.log(projectId);
        const contentSection = document.querySelector(".content");
        const button = document.createElement("div")
        button.classList.add("addButton");
        button.textContent = "Add Item";
        button.setAttribute("data-projectid", `${projectId}`);
        contentSection.appendChild(button);
        return button;
    };

    // function to display add form in the DOM
    // returns the form node once displayed
    const renderAddItemForm = (projectId) => {
        const itemForm = document.createElement("div");
        itemForm.classList.add("addItemForm");

        const fields = [{for: "title", type: "text", textC: "Title: "},
                        {for: "desc", type: "textarea", textC: "Description: "},
                        {for: "date", type: "date", textC: "Date: "}];
        fields.forEach((field) => {
            const row = document.createElement("div");
            row.classList.add("row");
            const label = document.createElement("label");
            label.setAttribute("for", field.for);
            label.textContent = field.textC;
            row.appendChild(label);

            const input = document.createElement("input");
            input.setAttribute("type", field.type);
            input.setAttribute("id", field.for);
            input.setAttribute("name", field.for);
            if(field.for === "title" || field.for === "date"){
                input.setAttribute("required", "true");
            }
            row.appendChild(input);

            itemForm.appendChild(row);
        });


        const row = document.createElement("div");
        const radioLabel = document.createElement("div");
        radioLabel.classList.add("radioLabel");
        radioLabel.textContent = "Priority: ";
        row.appendChild(radioLabel);

        const options = [{id: "low", textC: "Low"}, {id: "medium", textC: "Medium"}, {id: "high", textC: "High"}];
        options.forEach((option) => {
            const input = document.createElement("input");
            input.setAttribute("type", "radio");
            input.setAttribute("name", "priority");
            input.setAttribute("id", option.id);
            input.setAttribute("value", option.id);
            if(option.id === "medium") {
                input.setAttribute("required", "true");
                input.setAttribute("selected", "true");
            }
            row.appendChild(input);

            const label = document.createElement("label");
            label.setAttribute("for", option.id);
            label.textContent = option.textC;
            row.appendChild(label);
        });

        itemForm.appendChild(row);

        const submitButton = document.createElement("button");
        submitButton.textContent = "Add";
        submitButton.setAttribute("type", "submit");
        submitButton.setAttribute("data-projectid", `${projectId}`);
        itemForm.appendChild(submitButton);

        const cancelButton = document.createElement("button");
        cancelButton.textContent = "Cancel";
        cancelButton.setAttribute("type", "reset");
        itemForm.appendChild(cancelButton);

        itemForm.style.display = "block";

        const contentSection = document.querySelector(".content");
        contentSection.appendChild(itemForm);

        return itemForm;
    };

    return { addProject, removeProject, clearProjectContent, displayAddItemButton, renderAddItemForm, viewProject, addToProject };

})();


// logic/reactivity controller; calls the functions on the displayController as well as the internal toDoList module
// creates all event listeners here
const logicController = (() => {

    let currentProject = null;
    const getNumProjects = () => toDoModule.getNumProjects();
    const getNumToDos = (projectId) => toDoModule.getNumToDos(projectId);

    const projects = ["One", "Two", "Three"];

    const addProjectButton = document.querySelector(".sidebar .addButton");
    addProjectButton.addEventListener('click', (event) => {
        // get the project name
        // add to internal module as well as the display module
        // set current project to the newly added project
        projects.forEach((project) => {
            const projectName = project;
            const numProjects = getNumProjects();
            toDoModule.addProject(projectName);
            currentProject = displayController.addProject(projectName, numProjects);
            currentProject.addEventListener('click', openProject);
        });
    });

    // function to run once a project has been clicked
    // clear the current to do list and repopulate
    // display the add items button for this project
    const openProject = (event) => {
        const projectNode = event.target;
        const projectId = projectNode.getAttribute("data-projectid");
        // console.log(projectNode);
        displayController.clearProjectContent();
        currentProject = projectNode;
        // display internal project to do items
        const project = toDoModule.viewProject(projectId);
        // display the project to Do items in the DOM
        displayController.viewProject(project, projectId);
        // show the add item button as well
        showAddToDoButton(projectId);
    };

    // reneder the add item button in the DOM
    // add event listener to the button
    const showAddToDoButton = (projectId) => {
        const button = displayController.displayAddItemButton(projectId);
        button.addEventListener('click', () => {
            console.log(projectId);
            const form = displayController.renderAddItemForm(projectId);

        });
    };

    // const addItemsToProjectDummy = (projectid, item) => {
    //     const itemId = toDoModule.addToProject(projectid, item);
    //     if(projectid == currentProject.getAttribute("data-projectid")){
    //         displayController.addToProject(projectid, item, itemId);
    //     }
    // };

    // const addToDoButton = document.querySelector(".content .addButton");
    // addToDoButton.addEventListener('click', (event) => {
    //     const projectId = Math.floor(Math.random() * 3);
    //     const item = { title: 'Work on to do', description: 'n/a', dueDate: 'A week Later', priority: 'high' };
    //     addItemsToProjectDummy(projectId, item);
    //     const item2 = {title: 'Work on table', description: 'Finish assembling the table', dueDate: 'Sometime next week', priority: 'medium'};
    //     addItemsToProjectDummy(projectId, item2);
    // });

})();