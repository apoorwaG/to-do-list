const storageController = (() => {

    const addProject = (projectName, projectId) => {
        localStorage.clear();

        let projectsLiteral = localStorage.getItem("projects");
        if (projectsLiteral === null) {
            let projects = {};
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

    return { addProject, removeProject, addToProject, removeFromProject }

})();


export { 
    storageController 
}