let tasks = [
    {
        name: "Maths Assignment",
        status:"completed"
    },
    {
        name: "Lunch",
        status: "todo"
    },
    {
        name: "Cleaning The House",
        status: "running"
    }
];

displayTable();

//Add new task     
function addTask()
{
    let task = document.querySelector("#task");
    tasks.push({
        name: task.value,
        status: "Todo"
    });
    task.value ="";
    displayTable();

} 

// update status for clicked task
function updateStatus(index)
{
    let statuses = ["Todo", "Running", "Completed"];
    let statusIndex = statuses.indexOf(tasks[index].status);
    ++statusIndex;
    if(statusIndex > 2) statusIndex = 0;
    tasks[index].status = statuses[statusIndex];
    displayTable();

}

// Delete the task by clicking
function deleteTask(index)
{
    tasks.splice(index,1);
    displayTable();

}

// Render the tasks array using Javascript.
function displayTable()
{
    let table = document.querySelector("table")

    while(table.childNodes.length > 2)
    {
        table.removeChild(table.lastChild);
    }

    let index = 0;

    tasks.forEach(task => {
        let tableRow = document.createElement("tr");
        let name = document.createElement("td");
        let status = document.createElement("td");
        let deleteTask = document.createElement("td");
        
        name.innerText = task.name;
        status.innerText = task.status;
        status.classList.add(task.status.toLowerCase());

        deleteTask.classList.add("fa");
        deleteTask.classList.add("fa-trash");

        deleteTask.setAttribute("onclick","deleteTask("+index+")");
        status.setAttribute("onclick","updateStatus("+index+")");
        ++index;

        tableRow.appendChild(name);
        tableRow.appendChild(status);
        tableRow.appendChild(deleteTask);

        table.appendChild(tableRow)
    });
}