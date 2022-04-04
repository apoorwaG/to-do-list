// toDo item factory
const toDoFactory = (_id = null, _title, _description, _dueDate, _priority, _status = false) => {
    let id = _id;
    let title = _title;
    let description = _description;
    let dueDate = _dueDate;
    let priority = _priority;
    let status = _status;

    const getId = () => id;

    const getTitle = () => title;
    const setTitle = (newTitle) => {title = newTitle};

    const getDescription = () => description;
    const setDescription = (newDesc) => {description = newDesc};

    const getDueDate = () => dueDate;
    const setDueDate = (newDueDate) => {dueDate = newDueDate};

    const getPriority = () => priority;
    const setPriority = (newPriority) => {priority = newPriority};

    const getStatus = () => status;
    const setStatus = (newStatus) => {status = newStatus};

    const summarize = () => {
        const summary = `Id: ${id}\nTitle: ${title}\nDescription: ${description}\nDue Date: ${dueDate}\nPriority: ${priority}\nStatus: ${status}`;
        return summary;
    }

    return { getId, getTitle, getDescription, getDueDate, getPriority, getStatus, 
        setTitle, setDescription, setDueDate, setPriority, setStatus, summarize };
};

export {
    toDoFactory
}