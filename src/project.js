import { toDoFactory } from "./toDo";
import { addDays, isThisWeek, isYesterday } from "date-fns";

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
        if(!Boolean(toDos[itemIndex])) {
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

    const getItem = (itemId) => {
        if (!Boolean(toDos[itemId])) {
            throw new Error("Cannot find item in this project!");
        }
        return toDos[itemId];
    }

    const getToDos = () => toDos;

    const getNumToDos = () => toDos.length;

    const editToDo = (itemId, item) => {
        if(!Boolean(toDos[itemId])) {
            throw new Error("Cannot find item in this project!");
        }
        toDos[itemId].setTitle(item.title);
        toDos[itemId].setDescription(item.description);
        toDos[itemId].setPriority(item.priority);
        toDos[itemId].setDueDate(item.dueDate);

        console.log(toDos[itemId].summarize());
    };

    const toggleItemStatus = (itemId) => {
        if(!Boolean(toDos[itemId])) {
            throw new Error("Cannot find item in this project!");
        }
        
        if(toDos[itemId].getStatus() === true){
            toDos[itemId].setStatus(false);
        } else {
            toDos[itemId].setStatus(true);
        }
    };

    const getDescription = (itemId) => {
        if (!Boolean(toDos[itemId])) {
            throw new Error("Cannot find item in this project!")
        }
        return toDos[itemId].getDescription();
    };

    // return an array of toDo items in this project whose due date is today
    const getTodayItems = () => {
        if (numToDos == 0) {
            return [];
        }
        const dueToday = [];
        toDos.forEach((toDo) => {
            let dueDate = toDo.getDueDate();
            if (isYesterday(dueDate)) {
                dueToday.push(toDo);
            }
        });

        return dueToday;
    };

    // return an array of toDo items in this current week where duedate is in the current week
    const getThisWeekItems = () => {
        if (numToDos == 0) return [];

        const dueThisWeek = []
        toDos.forEach((toDo) => {
            let dueDate = toDo.getDueDate();
            if (isThisWeek(dueDate)) {
                dueThisWeek.push(toDo);
            }
        });
        return dueThisWeek;
    }

    return { getName, add, remove, getItem, getToDos, getNumToDos, editToDo, toggleItemStatus, visualize, getDescription, getTodayItems, getThisWeekItems };
};

export {
    projectFactory
}