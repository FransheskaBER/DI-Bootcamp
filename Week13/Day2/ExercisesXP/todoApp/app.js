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

