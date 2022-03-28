/******/ (() => { // webpackBootstrap
var __webpack_exports__ = {};
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
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

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWFpbi5qcyIsIm1hcHBpbmdzIjoiOzs7OztBQUFBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQSxrQ0FBa0MsTUFBTSxpQkFBaUIsWUFBWSxjQUFjLFFBQVEsY0FBYyxTQUFTO0FBQ2xIO0FBQ0E7O0FBRUEsWUFBWTtBQUNaOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDs7QUFFQSxZQUFZO0FBQ1o7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vdG8tZG8tbGlzdC8uL3NyYy9pbmRleC5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyIvLyB0b0RvIGl0ZW0gZmFjdG9yeVxuY29uc3QgdG9Eb0ZhY3RvcnkgPSAodGl0bGUsIGRlc2NyaXB0aW9uLCBkdWVEYXRlLCBwcmlvcml0eSkgPT4ge1xuXG4gICAgY29uc3QgZ2V0VGl0bGUgPSAoKSA9PiB0aXRsZTtcbiAgICBjb25zdCBnZXREZXNjcmlwdGlvbiA9ICgpID0+IGRlc2NyaXB0aW9uO1xuICAgIGNvbnN0IGdldER1ZURhdGUgPSAoKSA9PiBkdWVEYXRlO1xuICAgIGNvbnN0IGdldFByaW9yaXR5ID0gKCkgPT4gcHJpb3JpdHk7XG5cbiAgICBjb25zdCBzdW1tYXJpemUgPSAoKSA9PiB7XG4gICAgICAgIGNvbnN0IHN1bW1hcnkgPSBgVGl0bGU6ICR7dGl0bGV9XFxuRGVzY3JpcHRpb246ICR7ZGVzY3JpcHRpb259XFxuRHVlIERhdGU6ICR7ZHVlRGF0ZX1cXG5Qcmlvcml0eTogJHtwcmlvcml0eX1gO1xuICAgICAgICByZXR1cm4gc3VtbWFyeTtcbiAgICB9XG5cbiAgICByZXR1cm4ge2dldFRpdGxlLCBnZXREZXNjcmlwdGlvbiwgZ2V0RHVlRGF0ZSwgZ2V0UHJpb3JpdHksIHN1bW1hcml6ZX07XG59O1xuXG4vLyBwcm9qZWN0IGZhY3RvcnlcbmNvbnN0IHByb2plY3RGYWN0b3J5ID0gKG5hbWUpID0+IHtcbiAgICBjb25zdCBnZXROYW1lID0gKCkgPT4gbmFtZTtcblxuICAgIGNvbnN0IHRvRG9zID0gW11cblxuICAgIGNvbnN0IGFkZFRvUHJvamVjdCA9ICh0b0RvKSA9PiB7XG4gICAgICAgIHRvRG9zLnB1c2godG9Ebyk7XG4gICAgfVxuXG4gICAgY29uc3QgcmVtb3ZlRnJvbVByb2plY3QgPSAoaXRlbUluZGV4KSA9PiB7XG4gICAgICAgIGlmKGl0ZW1JbmRleCA+IHRvRG9zLmxlbmd0aCl7XG4gICAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoJ0luZGV4IG91dCBvZiBib3VuZHMhJyk7XG4gICAgICAgIH1cbiAgICAgICAgZGVsZXRlIHRvRG9zW2l0ZW1JbmRleF07XG4gICAgfVxuXG4gICAgY29uc3QgcHJpbnRJdGVtcyA9ICgpID0+IHtcbiAgICAgICAgdG9Eb3MuZm9yRWFjaCgoaXRlbSkgPT4ge1xuICAgICAgICAgICAgY29uc29sZS5sb2coaXRlbS5zdW1tYXJpemUoKSk7XG4gICAgICAgIH0pXG4gICAgfVxuXG4gICAgcmV0dXJuIHtnZXROYW1lLCBhZGRUb1Byb2plY3QsIHJlbW92ZUZyb21Qcm9qZWN0LCBwcmludEl0ZW1zfVxufTtcblxuY29uc3QgdG9kYXkgPSB0b0RvRmFjdG9yeSgnV29yayBvbiB0byBkbycsICduL2EnLCAnQSB3ZWVrIGxhdGVyJywgJ2hpZ2gnKTtcbmNvbnN0IG5ld1RvRG8gPSB0b0RvRmFjdG9yeSgnV29yayBvbiB0YWJsZScsICdGaW5pc2ggYXNzZW1ibGluZyB0aGUgdGFibGUnLCAnU29tZXRpbWUgbmV4dCB3ZWVrJywgJ21lZGl1bScpO1xuXG5jb25zdCBob21lUHJvamVjdCA9IHByb2plY3RGYWN0b3J5KCdIb21lIFByb2plY3QnKTtcbmhvbWVQcm9qZWN0LmFkZFRvUHJvamVjdCh0b2RheSk7XG5ob21lUHJvamVjdC5hZGRUb1Byb2plY3QobmV3VG9Ebyk7XG5ob21lUHJvamVjdC5wcmludEl0ZW1zKCk7XG5cbmNvbnNvbGUubG9nKFwiTm93IGRlbGV0aW5nIGFuIGl0ZW0gZnJvbSBvdXIgcHJvamVjdFwiKTtcblxuaG9tZVByb2plY3QucmVtb3ZlRnJvbVByb2plY3QoMSk7XG5ob21lUHJvamVjdC5wcmludEl0ZW1zKCk7XG4iXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=