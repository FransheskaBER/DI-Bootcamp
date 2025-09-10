const tasks = [];
let taskIdCounter = 0;

const newUl = document.createElement("ul");
const div = document.querySelector(".listTasks");
div.appendChild(newUl);

const form = document.getElementById("todoForm")

function addTask(newTask){
    const li = document.createElement("li");
    li.setAttribute("data-task-id", newTask.task_id)

    const btn = document.createElement("button");
    btn.type = "button";
    btn.classList.add("deleteBtn");
    btn.innerHTML = '<i class="fa-solid fa-xmark"></i>';

    const checkbox = document.createElement("input");
    checkbox.type = "checkbox";
    checkbox.checked = newTask.done;

    const label = document.createElement("label");
    label.textContent = newTask.text;

    //Attach two functions ONCE per new item
    checkbox.addEventListener("change", doneTask);
    btn.addEventListener("click", deleteTask);

    li.append(btn, checkbox, label);
    newUl.appendChild(li);
};

form.addEventListener("submit", (e) => {
    e.preventDefault();

    const value = document.getElementById("newTask").value.trim();
    if (value === ""){
    alert("Please enter a task");
    return;
    }

    const newTask = {
        task_id: taskIdCounter,
        text: value,
        done: false
    };
    
    tasks.push(newTask);
    addTask(newTask);
    taskIdCounter++;
    form.reset();
});

function doneTask(){
    const listItems = document.querySelectorAll("li");

    listItems.forEach(li => {
        const checkbox = li.querySelector("input[type='checkbox']");
        const label = li.querySelector("label");
        const id = parseInt(li.getAttribute("data-task-id"));
        const task = tasks.find(t => t.task_id === id) //for each object in the array, check if its task_id is the same as the id im looking for
        if (task) task.done = checkbox.checked;
        
        label.classList.toggle("completed", checkbox.checked); 
    });
};


function deleteTask(e){
    const button = e.currentTarget;
    const btnLi = button.closest("li");
    const id = parseInt(btnLi.getAttribute("data-task-id"));
            
    btnLi.remove();
            
    const index = tasks.findIndex(t => t.task_id === id);
    if (index !== -1){ // -1 is if it didnt find that index so in that case we are saying if you do find it do x
        tasks.splice(index, 1)
    };
    };