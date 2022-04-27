# To-do-list  
A dynamic to-do list created using vanilla JavaScript, HTML, and CSS.  
Demo: https://apoorwag.github.io/to-do-list/

## Features
- add, view and delete projects
- add, edit, and delete items for each project
- view to-do items due today/this week

## Technical details
- uses webpack to load the separate modules, external libraries, to handle assets
- uses `date-fns` library for a human-readable formatting of dates
- uses `localStorage` from `Web Storage API` to emulate a full-stack experience: user data is 
  preserved between browser sessions
- created with some SOLID principles in mind: closely follows the Single Responsibility Principle for better debugging
  and design