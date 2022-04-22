const storageController = (() => {

    const addProject = (projectName, projectId) => {
        let projectsLiteral = localStorage.getItem("projects");
        if (projectsLiteral === null) {
            let projects = {};
            projects[projectId] = {"name": projectName, "items": {}};
            localStorage.setItem("projects", JSON.stringify(projects));
        } else {
            let projects = JSON.parse(projectsLiteral);
            projects[projectId] = {"name": projectName, "items": {}};
            localStorage.setItem("projects", JSON.stringify(projects));
        }

        console.log(JSON.parse(localStorage.getItem("projects")));

    };

    const removeProject = (projectId) => {
        let projectsLiteral = localStorage.getItem("projects");
        if (projectsLiteral == null) {
            throw Error("Local storage is empty!")
        }
        let projects = JSON.parse(projectsLiteral);
        if (!Boolean(projects[projectId])) {
            throw Error("Project doesn't exist in localStorage!");
        }
        delete projects[projectId];
        localStorage.setItem("projects", JSON.stringify(projects));

        console.log(JSON.parse(localStorage.getItem("projects")));
    };

    const addToProject = (projectId, itemId, item) => {
        let projectsLiteral = localStorage.getItem("projects");
        if (projectsLiteral == null) {
            throw Error("Local storage is empty!")
        }
        let projects = JSON.parse(projectsLiteral);
        if (!Boolean(projects[projectId])) {
            throw Error("Project doesn't exist in localStorage!");
        }
        // add an additional field, status
        item.status = false;
        projects[projectId]["items"][itemId] = item;

        localStorage.setItem("projects", JSON.stringify(projects));

        console.log(JSON.parse(localStorage.getItem("projects")));
    };

    const removeFromProject = (projectId, itemId) => {
        let projectsLiteral = localStorage.getItem("projects");
        if (projectsLiteral == null) {
            throw Error("Local storage is empty!")
        }
        let projects = JSON.parse(projectsLiteral);
        if (!Boolean(projects[projectId])) {
            throw Error("Project doesn't exist in localStorage!");
        }
        if (!Boolean(projects[projectId]["items"][itemId])) {
            throw Error("Item doesn't exist in this project!");
        }

        delete projects[projectId]["items"][itemId];
        localStorage.setItem("projects", JSON.stringify(projects));

        console.log(JSON.parse(localStorage.getItem("projects")));
    };

    const editToDoInProject = (projectId, itemId, item) => {
        let projectsLiteral = localStorage.getItem("projects");
        if (projectsLiteral == null) {
            throw Error("Local storage is empty!")
        }
        let projects = JSON.parse(projectsLiteral);
        if (!Boolean(projects[projectId])) {
            throw Error("Project doesn't exist in localStorage!");
        }
        if (!Boolean(projects[projectId]["items"][itemId])) {
            throw Error("Item doesn't exist in this project!");
        }

        // editing doesn't change status, so save it first
        let previousStatus = projects[projectId]["items"][itemId].status;
        item.status = previousStatus
        
        projects[projectId]["items"][itemId] = item

        localStorage.setItem("projects", JSON.stringify(projects));
        console.log(JSON.parse(localStorage.getItem("projects")));        
    };

    const toggleItemStatus = (projectId, itemId) => {
        let projectsLiteral = localStorage.getItem("projects");
        if (projectsLiteral == null) {
            throw Error("Local storage is empty!")
        }
        let projects = JSON.parse(projectsLiteral);
        if (!Boolean(projects[projectId])) {
            throw Error("Project doesn't exist in localStorage!");
        }
        if (!Boolean(projects[projectId]["items"][itemId])) {
            throw Error("Item doesn't exist in this project!");
        }

        // if previously true, update status to false
        // if previously false, update it to true
        let previousStatus = projects[projectId]["items"][itemId].status;
        if (previousStatus) {
            projects[projectId]["items"][itemId].status = false;
        } else {
            projects[projectId]["items"][itemId].status = true;
        }
        localStorage.setItem("projects", JSON.stringify(projects));
        console.log(JSON.parse(localStorage.getItem("projects")));        
    };

    const initializeApp = () => {
        console.log(`Projects stored:`);
        console.log(JSON.parse(localStorage.getItem("projects")));        

        let literal = localStorage.getItem("projects");
        let projectsAndTodos = JSON.parse(literal);


        const newStorage = {};
        let numProjects = 0;
        for (let project in projectsAndTodos) {
            newStorage[numProjects] = {"name": projectsAndTodos[project]["name"], "items":{}};
            let numItems = 0;
            for (let item in projectsAndTodos[project]["items"]) {
                newStorage[numProjects]["items"][numItems] = projectsAndTodos[project]["items"][item]
                numItems += 1
            }
            numProjects += 1;
        }

        localStorage.setItem("projects", JSON.stringify(newStorage));
        console.log(`Projects reorganized`);
        console.log(JSON.parse(localStorage.getItem("projects")));
        
        return newStorage;
    };

    return { addProject, removeProject, addToProject, removeFromProject, editToDoInProject, toggleItemStatus, initializeApp }

})();


export { 
    storageController 
}