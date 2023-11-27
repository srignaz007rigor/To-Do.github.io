//get the html elements

const taskForm = document.getElementById('taskForm');
const taskInput = document.getElementById('taskInput');
const taskList = document.getElementById('taskList');

//create a task counter

let taskId = 1;

//function(or)logic to add a new task

function addTask(event)
{
    event.preventDefault();
    const taskText = taskInput.value.trim();

    if(taskText !== "")
    {
        const taskItem = document.createElement('li');
        taskItem.innerHTML = `
        <span>${taskText}</span>
        <button class="delete-btn">Delete</button>
        `;
        taskList.append(taskItem);
        taskInput.value = ""; //we are leaving it empty because we do not want to show this value to the user on the input
        taskId++; //incrementing the task id.

        //add event to the delete button

        const deleteBtn = taskItem.querySelector('.delete-btn');
        deleteBtn.addEventListener('click', deleteTask);
    }
}

//creating a function called 'deleteTask'

function deleteTask(event)
{
    const taskItem = event.target.parentElement;
    //targetting the parent item deletes the entire added listItem
    console.log(taskItem);
    taskList.removeChild(taskItem);
}

//add event listener to the form

taskForm.addEventListener('submit', addTask);
