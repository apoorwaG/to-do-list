import './css/style.css';

import { toDoModule } from './toDoModule';
import { displayController } from './displayController';
import { format, addDays } from 'date-fns'; 

// logic/reactivity controller; calls the functions on the displayController as well as the internal toDoList module
// creates all event listeners here
const logicController = (() => {

    // function to run as soon as app starts: initialize today/this week and toDos for today's module
    const initializeToday = () => {
        const sidebar = document.querySelector(".sidebar");
        const pSection = document.querySelector(".projects");

        const currentSection = document.createElement("div");
        currentSection.classList.add("currents");

        const today = document.createElement("div");
        today.classList.add("current");
        today.textContent = "Today"
        today.addEventListener('click', openToday);

        const thisWeek = document.createElement("div");
        thisWeek.classList.add("current");
        thisWeek.textContent = "This Week";
        thisWeek.addEventListener('click', openThisWeek);

        currentSection.appendChild(today);
        currentSection.appendChild(thisWeek);

        sidebar.insertBefore(currentSection, pSection);
    };

    const openToday = (event) => {
        console.log("ToDos due today:");
        displayController.clearContentSection();

        const projectAndToDos = toDoModule.getTodayItems();

        for (let i = 0; i < projectAndToDos.length; i++) {

            let projectId = projectAndToDos[i].projectId;
            // projectAndToDos[i].items.forEach(item => {
            //     let toDo = displayController.addToProject(projectId, item, item.getId());
            //     addActionListeners(toDo);
            // });
            const toDoNodes = displayController.viewProject(projectAndToDos[i].items, projectId);
            toDoNodes.forEach(addActionListeners);
        }
        event.stopPropagation();
    }

    const openThisWeek = (event) => {
        console.log("ToDos due this week:");
        displayController.clearContentSection();

        const projectAndToDos = toDoModule.getThisWeekItems();

        event.stopPropagation();
    };

    initializeToday();

    // function that gets triggered by the add project button
    // renders the field for adding projects
    const renderAddProjectForm = (event) => {
        // first toggle the addProjectButton so it is hidden
        const addProjectButton = event.currentTarget;
        displayController.toggleDisplay(addProjectButton);

        // render the form on the DOM
        const form = displayController.renderAddProjectForm();

        // add event listeners to form buttons
        // addProject button
        form.querySelector("button.addProject").addEventListener('click', () => {
            // validate form first
            if(validateAddProjectForm(form)) {
                const project = addProject(form);
                displayController.toggleDisplay(addProjectButton);
                // open this project
                openProject({target: project});
                // remove add project form upon addition of project and event listener 
                removeAddProjectForm();
            }
        });

        // cancel button
        form.querySelector("button.cancelAdd").addEventListener('click', () => {
            removeAddProjectForm();
            displayController.toggleDisplay(addProjectButton);
        });
    };

    const addProjectButton = document.querySelector(".sidebar .addButton");
    // populate add project button
    displayController.fillAddProjectButton(addProjectButton);
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
        // console.log("Yet to implement add project form validation");
        // console.log(form.querySelector("input").value);
        if(form.querySelector("input").value == ""){
            displayController.displayErrorMessage("Project must have a name!");
            return false;
        }
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
        const toDos = toDoModule.viewProject(projectId);
        // display the project to Do items in the DOM
        const toDoNodes = displayController.viewProject(toDos, projectId);
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
        let message = "";
        if (form.querySelector("input#title").value == ""){
            message = "To do must have a title!\n"
        } 
        if (form.querySelector("input#date").value == ""){
            message += "To do must have a date!\n";
        }
        if(Boolean(message)){
            displayController.displayErrorMessage(message);
            return false;
        }
        return true;
    };

    // extract data from the form, package into an item object, and return it
    const getFormData = (form) => {
        const item = {
            title: form.querySelector(`input[id="title"]`).value,
            description: form.querySelector(`textarea[id="desc"]`).value,
            dueDate: new Date(form.querySelector(`input[type="date"]`).value),
        };

        console.log(form.querySelector(`input[type="date"]`).value);
        console.log(item.dueDate);

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
        const deleteButton = toDo.querySelector("div.delete");
        deleteButton.addEventListener('click', deleteItem);
        
        const editButton = toDo.querySelector("div.edit");
        editButton.addEventListener('click', (event) => {
            // before rendering the edit item form, toggle the add item button display
            // toggle the add item button
            const addItemButton = document.querySelector(".content .addButton");
            displayController.toggleDisplay(addItemButton);
            renderEditItemForm(event);
        });

        const checkBox = toDo.querySelector(`input[type="checkBox"]`);
        checkBox.addEventListener('click', toggleItemStatus);

        const title = toDo.querySelector(".title");
        title.addEventListener('click', toggleDescription);
    };

    // function that gets triggered by the checkBox input
    const toggleItemStatus = (event) => {
        const projectId = event.target.getAttribute("data-projectid");
        const itemId = event.target.getAttribute("data-todoid");
        toDoModule.toggleItemStatus(projectId, itemId);
        displayController.toggleItemStatus(projectId, itemId);
    };

    // function that gets triggered by clicking the title of toDo
    const toggleDescription = (event) => {
        const toDoNode = event.currentTarget.parentNode.parentNode;

        const projectId = toDoNode.getAttribute("data-projectid");
        const todoId = toDoNode.getAttribute("data-todoid");

        const text = toDoModule.getDescriptionProjectItem(projectId, todoId);
        displayController.toggleDescription(toDoNode, text);

        event.stopPropagation();
    };

    // function that gets triggered by the delete item button
    const deleteItem = (event) => {
        const projectId = event.currentTarget.getAttribute("data-projectid");
        const todoId = event.currentTarget.getAttribute("data-todoid");

        toDoModule.removeFromProject(projectId, todoId);
        displayController.removeFromProject(projectId, todoId);
        event.stopPropagation();
    };

    // function that gets triggered by the edit item button
    const renderEditItemForm = (event) => {
        const projectId = event.currentTarget.getAttribute("data-projectid");
        const todoId = event.currentTarget.getAttribute("data-todoid");

        // first get the data from the internal module
        const toDoItem = toDoModule.getItemInProject(projectId, todoId);

        // pre-fill the entry areas with stored data
        const form = displayController.renderAddItemForm(projectId);
        form.querySelector(`input[id="title"]`).value = toDoItem.getTitle();
        form.querySelector(`textarea#desc`).value = toDoItem.getDescription();
        console.log(toDoItem.getDueDate());
        const formattedDate = format(addDays(toDoItem.getDueDate(), 1), "yyyy-MM-dd");
        // form.querySelector(`input#date`).value = format(toDoItem.getDueDate(), "yyyy-mm-dd");
        // console.log(`Formatted Date: ${formattedDate}`);
        form.querySelector(`input#date`).value = formattedDate;
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

        event.stopPropagation();
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