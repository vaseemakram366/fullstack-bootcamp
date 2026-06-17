// Step-1 select/catch the form

document.querySelector("form").addEventListener("submit", getDetails);

// Step-2

function getDetails(e) {
    e.preventDefault();

    let name = document.querySelector("#name").value;
    let docID = document.querySelector("#docID").value;
    let dept = document.querySelector("#dept").value;
    let exp = document.querySelector("#exp").value;
    let email = document.querySelector("#email").value;
    let mbl = document.querySelector("#mbl").value;

    let role;

    if (exp > 5) {
        role = "Senior";
    } else if (exp >= 2 && exp <= 5) {
        role = "Junior";
    } else {
        role = "Trainee";
    }

    let doctorObj = {
        name,
        docID,
        dept,
        exp,
        email,
        mbl,
        role
    };

    console.log(doctorObj);

    displayTable(doctorObj);
}

function displayTable(doctorObj) {

    const row = document.createElement("tr");

    const td1 = document.createElement("td");
    td1.innerText = doctorObj.name;

    const td2 = document.createElement("td");
    td2.innerText = doctorObj.docID;

    const td3 = document.createElement("td");
    td3.innerText = doctorObj.dept;

    const td4 = document.createElement("td");
    td4.innerText = doctorObj.exp;

    const td5 = document.createElement("td");
    td5.innerText = doctorObj.email;

    const td6 = document.createElement("td");
    td6.innerText = doctorObj.mbl;

    const td7 = document.createElement("td");
    td7.innerText = doctorObj.role;

    const td8 = document.createElement("td");
    td8.innerText = "Delete";

    td8.addEventListener("click", function () {
        row.remove();
    });

    row.append(
        td1,
        td2,
        td3,
        td4,
        td5,
        td6,
        td7,
        td8
    );

    document.querySelector("tbody").append(row);
}