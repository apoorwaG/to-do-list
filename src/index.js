import './css/style.css';

import { toDoModule } from './toDoModule';
import { displayController } from './displayController';

// logic/reactivity controller; calls the functions on the displayController as well as the internal toDoList module
// creates all event listeners here
const logicController = (() => {

    // function that gets triggered by the add project button
    // renders the field for adding projects
    const renderAddProjectForm = (event) => {
        // first toggle the addProjectButton so it is hidden
        displayController.toggleDisplay(event.target);

        // render the form on the DOM
        const form = displayController.renderAddProjectForm();

        // add event listeners to form buttons
        // addProject button
        form.querySelector("button.addProject").addEventListener('click', () => {
            // validate form first
            if(validateAddProjectForm(form)) {
                const project = addProject(form);
                displayController.toggleDisplay(event.target);
                // open this project
                openProject({target: project});
                // remove add project form upon addition of project and event listener 
                removeAddProjectForm();
            }
        });

        // cancel button
        form.querySelector("button.cancelAdd").addEventListener('click', () => {
            removeAddProjectForm();
            displayController.toggleDisplay(event.target);
        });

    };

    const addProjectButton = document.querySelector(".sidebar .addButton");
    addProjectButton.addEventListener('click', renderAddProjectForm);

    // function that gets triggered by the add project button in the add project form
    // assumes form data is validated
    const addProject = (form) => {
        const projectName = form.querySelector("input").value;
        // add the project and get its internal id
        const projectId = toDoModule.addProject(projectName);
        // add project on DOM and get the node
        const project = displayController.addProject(projectName, projectId);
        // add listener to project
        project.addEventListener('click', openProject);
        // add listener to delete button in project
        project.querySelector(".deleteProjectButton").addEventListener('click', (event) => {
            displayController.removeProject(project);
            toDoModule.removeProject(projectId);
            event.stopPropagation();
        });
        return project;
    };

    // function that gets triggered by the add project button
    // returns true or false upon validation
    const validateAddProjectForm = (form) => {
        console.log("Yet to implement add project form validation");
        return true;
    };

    // function that gets triggered by the cancel button in add project form
    const removeAddProjectForm = () => {
        displayController.removeAddProjectForm();
    };


    // function to run once a project has been clicked
    // clear content section
    // display the add items button for this project
    const openProject = (event) => {
        displayController.clearContentSection();
        const projectNode = event.target;
        const projectId = projectNode.getAttribute("data-projectid");
        // display internal project to do items
        const project = toDoModule.viewProject(projectId);
        // display the project to Do items in the DOM
        const toDoNodes = displayController.viewProject(project, projectId);
        // call function to add event listeners to each toDo node buttons
        toDoNodes.forEach(addActionListeners);
        // show the add item button as well
        showAddToDoButton(projectId);
    };

    // reneder the add item button in the DOM
    // add event listener to the button
    const showAddToDoButton = (projectId) => {
        const button = displayController.displayAddItemButton(projectId);
        button.addEventListener('click', () => {
            console.log(projectId);
            renderAddItemForm(projectId);
        });
    };

    // render the add item form in the DOM
    // add event listeners to in-form buttoms
    const renderAddItemForm = (projectId) => {
        // toggle the addItem button so it is hidden
        const addItemButton = document.querySelector(".content .addButton");
        displayController.toggleDisplay(addItemButton);

        const form = displayController.renderAddItemForm(projectId);
        const submitButton = form.querySelector("button[type=submit]");
        submitButton.addEventListener("click", () => {
            if(validateForm(form)){
                addItemToProject(projectId, form);
                removeAddItemForm();
                // toggle the addItem button once done
                displayController.toggleDisplay(addItemButton);
            }
        });

        const cancelButton = form.querySelector("button[type=reset]");
        cancelButton.addEventListener("click", () => {
            removeAddItemForm()
            // toggle the addItem button once done
            displayController.toggleDisplay(addItemButton);
        });
    };

    // function to remove the add toDo form from the DOM
    const removeAddItemForm = () => {
        displayController.removeAddItemForm();
    }

    // function to validate form entries
    // returns true upon success
    // alerts the user upon failure
    const validateForm = (form) => {
        console.log("Yet to implement validation!");
        return true;
    };

    // extract data from the form, package into an item object, and return it
    const getFormData = (form) => {
        const item = {
            title: form.querySelector(`input[id="title"]`).value,
            description: form.querySelector(`input[id="desc"]`).value,
            dueDate: form.querySelector(`input[type="date"]`).value,
        };

        let priorityValue = null;
        const priorityOptions = form.querySelectorAll(`input[type="radio"]`);
        priorityOptions.forEach((option) => {
            if(option.checked === true){
                priorityValue = option.value;
            }
        });

        item.priority = priorityValue;

        return item;
    };

    // called by add button in add to do form
    // extracts data from the form and adds it to the appropriate project internally,
    // and renders it on the DOM
    // assumes form data is validated
    const addItemToProject = (projectId, form) => {
        console.log(`Adding to project ${projectId}`);
    
        // extract data and add to toDoModule and DOM
        const item = getFormData(form);

        // add item to internal toDoModule and get the id
        const itemId = toDoModule.addToProject(projectId, item);

        // add item to the DOM
        const toDo = displayController.addToProject(projectId, item, itemId);

        // add listeners to each button in toDo element
        addActionListeners(toDo);
    };

    // function to event listeners to edit/delete buttons as well as the checkbox
    const addActionListeners = (toDo) => {
        const deleteButton = toDo.querySelector("button.delete");
        deleteButton.addEventListener('click', deleteItem);
        
        const editButton = toDo.querySelector("button.edit");
        editButton.addEventListener('click', (event) => {
            // before rendering the edit item form, toggle the add item button display
            // toggle the add item button
            const addItemButton = document.querySelector(".content .addButton");
            displayController.toggleDisplay(addItemButton);
            renderEditItemForm(event);
        });

        const checkBox = toDo.querySelector(`input[type="checkBox"]`);
        checkBox.addEventListener('click', toggleItemStatus);
    };

    // function that gets triggered by the checkBox input
    const toggleItemStatus = (event) => {
        const projectId = event.target.getAttribute("data-projectid");
        const itemId = event.target.getAttribute("data-todoid");
        toDoModule.toggleItemStatus(projectId, itemId);
    };

    // function that gets triggered by the delete item button
    const deleteItem = (event) => {
        const projectId = event.target.getAttribute("data-projectid");
        const todoId = event.target.getAttribute("data-todoid");

        toDoModule.removeFromProject(projectId, todoId);
        displayController.removeFromProject(projectId, todoId);
    };

    // function that gets triggered by the edit item button
    const renderEditItemForm = (event) => {
        const projectId = event.target.getAttribute("data-projectid");
        const todoId = event.target.getAttribute("data-todoid");

        // first get the data from the internal module
        const toDoItem = toDoModule.getItemInProject(projectId, todoId);

        // pre-fill the entry areas with stored data
        const form = displayController.renderAddItemForm(projectId);
        form.querySelector(`input[id="title"]`).value = toDoItem.getTitle();
        form.querySelector(`input#desc`).value = toDoItem.getDescription();
        form.querySelector(`input#date`).value = toDoItem.getDueDate();
        form.querySelector(`input#${toDoItem.getPriority()}`).checked = true;
        
        // add listener to add/edit button
        const editItemButton = document.querySelector("button[type='submit']");
        editItemButton.textContent = "Submit";
        editItemButton.addEventListener('click', () => {
            if(validateForm(form)){
                editItem(todoId, projectId, form);
                removeAddItemForm();
                // toggle the addItem button once done
                displayController.toggleDisplay(document.querySelector(".content .addButton"));
            }
        });

        // add listener to cancel button
        const cancelButton = form.querySelector("button[type=reset]");
        cancelButton.addEventListener("click", () => {
            removeAddItemForm();
            // toggle the addItem button once done
            displayController.toggleDisplay(document.querySelector(".content .addButton"));
        });
    };

    // function that gets triggered by the submit button in the edit form
    // extracts data from the form and edits the appropriate project's toDo item internally,
    // and renders/edits it on the DOM
    // assumes form data is validated
    const editItem = (todoId, projectId, form) => {
        // extract form data
        const item = getFormData(form);
        console.log(item);
        
        // edit item data in internal module
        toDoModule.editToDoInProject(projectId, todoId, item);

        // edit item data in DOM
        displayController.editToDo(projectId, todoId, item);
    };


})();