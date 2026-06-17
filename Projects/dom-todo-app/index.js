// Step-1 select/catch the form

document.querySelector("form").addEventListener("submit", getDetails);

// step-2

function getDetails(e) {
    e.preventDefault();
    let name = document.querySelector("#task").value;
    let priority = document.querySelector("#priority").value;

    // console.log(name,priority);

    let taskObj = { name, priority };
    console.log(taskObj);

    // <tr>
    //     <th>Task</th>
    //     <th>Priority</th>
    //     <th>Favourite</th>
    // </tr>

    displayTable(taskObj)
}

function displayTable(taskObj){
    const row = document.createElement("tr");

    const td1 = document.createElement("td");
    td1.innerText = taskObj.name;

    const td2 = document.createElement("td");
    td2.innerText = taskObj.priority;

    const td3 = document.createElement("td");
    td3.innerText = taskObj.add;

    row.append(td1, td2, td3);
    document.querySelector("tbody").append(row);
}