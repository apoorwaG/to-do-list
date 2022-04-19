const storageController = (() => {

    const addProject = (projectName, projectId) => {
        console.log(`Updated storage: ${localStorage}`);
    };

    const removeEntry = () => {
        console.log(`Updated storage: ${localStorage}`);
    };

    const updateEntry = () => {
        console.log(`Updated storage: ${localStorage}`);
    };

    const getAllEntries = () => {
        console.log(`Updated storage: ${localStorage}`);
    };

    addEntry();

})();


export { 
    storageController 
}