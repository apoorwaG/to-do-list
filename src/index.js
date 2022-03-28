// toDo item factory
const toDoFactory = (title, description, dueDate, priority) => {

    const getTitle = () => title;
    const getDescription = () => description;
    const getDueDate = () => dueDate;
    const getPriority = () => priority;

    const summarize = () => {
        const summary = `Title: ${title}\nDescription: ${description}\nDue Date: ${dueDate}\nPriority: ${priority}`;
        return summary;
    }

    return {getTitle, getDescription, getDueDate, getPriority, summarize};
};

// project factory
const projectFactory = (name) => {
    const getName = () => name;

    const toDos = []

    const addToProject = (toDo) => {
        toDos.push(toDo);
    }

    const removeFromProject = (itemIndex) => {
        if(itemIndex > toDos.length){
            throw new Error('Index out of bounds!');
        }
        delete toDos[itemIndex];
    }

    const printItems = () => {
        toDos.forEach((item) => {
            console.log(item.summarize());
        })
    }

    return {getName, addToProject, removeFromProject, printItems}
};

const today = toDoFactory('Work on to do', 'n/a', 'A week later', 'high');
const newToDo = toDoFactory('Work on table', 'Finish assembling the table', 'Sometime next week', 'medium');

const homeProject = projectFactory('Home Project');
homeProject.addToProject(today);
homeProject.addToProject(newToDo);
homeProject.printItems();

console.log("Now deleting an item from our project");

homeProject.removeFromProject(1);
homeProject.printItems();
