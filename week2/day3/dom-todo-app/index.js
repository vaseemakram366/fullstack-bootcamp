// Step-1 select/catch the form

// const { jsxs } = require("react/jsx-runtime");

// let todoArr;

// if(JSON.parse)(localStorage.getItem("todo"))==null{
//     todoArr = []

//     } else{
// //         todoArr = JSON.parse(localStorage.getItem("todo"))
//     }


let todoArr = JSON.parse(localStorage.getItem("todo")) || [];
let favArr = JSON.parse(localStorage.getItem("fav")) || [];


displayTable(todoArr);



document.querySelector("form").addEventListener("submit", getDetails);

// step-2

function getDetails(e) {
    e.preventDefault();
    let name = document.querySelector("#task").value;
    let priority = document.querySelector("#priority").value;

    // console.log(name,priority);

    let taskObj = { name, priority };
    todoArr.push(taskObj);

    
    console.log(todoArr);

    localStorage.setItem("todo", JSON.stringify(todoArr));

    // <tr>
    //     <th>Task</th>
    //     <th>Priority</th>
    //     <th>Favourite</th>
    // </tr>

    displayTable(todoArr);
}

function displayTable(arr){
    document.querySelector("tbody").innerText = ""

    arr.forEach((el) => {
        
    
    const row = document.createElement("tr");

    const td1 = document.createElement("td");
    td1.innerText = el.name;

    const td2 = document.createElement("td");
    td2.innerText = el.priority;

    const td3 = document.createElement("button");
    td3.innerText = "add";

    td3.addEventListener("click", function () {
        favArr.push(el);
        localStorage.setItem("fav", JSON.stringify(favArr))

        alert("Todo added to Fav page")
    });

    row.append(td1, td2, td3);
    document.querySelector("tbody").append(row);
});
}