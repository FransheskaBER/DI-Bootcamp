export class TodoList{
    constructor(){
        this.tasks = []; // stores all tasks here 
    }

    addTask(description){
        this.tasks.push({description, completed: false});
    }

    markComplete(index){
        if (this.tasks[index]){
            this.tasks[index].completed = true;
        } else {
            console.log("Task not found");
        }
    }

    listTasks(){
        this.tasks.forEach((task) => {
            console.log(task);
        });
    }
}