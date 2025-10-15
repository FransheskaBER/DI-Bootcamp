// code from todo.js:
// export class TodoList{
//     constructor(){
//         this.tasks = []; // stores all tasks here 
//     }

//     addTask(description){
//         this.tasks.push({description, completed: false});
//     }

//     markComplete(index){
//         if (this.tasks[index]){
//             this.tasks[index].completed = true;
//         } else {
//             console.log("Task not found");
//         }
//     }

//     listTasks(){
//         this.tasks.forEach((task) => {
//             console.log(task);
//         });
//     }
// }

import { TodoList } from "./todo.js";

const myList = new TodoList();

myList.addTask("Buy milk");
myList.addTask("Study JavaScript");
myList.addTask("Rest 30 minutes");
myList.addTask("Take a shower");

myList.listTasks();

myList.markComplete("1");
myList.markComplete("3");
myList.listTasks();

