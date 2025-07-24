var nameInput = document.getElementById("nameInput");
var idInput = document.getElementById("idInput");
var ageInput = document.getElementById("ageInput");
var tableBody = document.getElementById("tableBody");

// pattern: الاسم لازم يكون حروف بس
var namePattern = /^[a-zA-Z\s]+$/;

function validateName(name) {
    if (name === "") {
        alert("Name is required.");
        return false;
    } else if (!namePattern.test(name)) {
        alert("Name must contain only letters.");
        return false;
    }
    return true;
}

function validateId(id) {
    var idPattern = /^[0-9]+$/;

    if (id === "") {
        alert("ID is required.");
        return false;
    } else if (!idPattern.test(id)) {
        alert("ID must be numbers only.");
        return false;
    }

    var rows = tableBody.getElementsByTagName("tr");
    for (var i = 0; i < rows.length; i++) {
        var existingId = rows[i].cells[0].innerText;
        if (existingId === id) {
            alert("ID already exists.");
            return false;
        }
    }

    return true;
}

function validateAge(age) {
    if (age === "") {
        alert("Age is required.");
        return false;
    } else if (isNaN(age)) {
        alert("Age must be a number.");
        return false;
    } else if (age < 18 || age > 100) {
        alert("Age must be between 18 and 100.");
        return false;
    }

    return true;
}

function addData() {
    var name = nameInput.value;
    var id = idInput.value;
    var age = ageInput.value;

    if (validateId(id) && validateName(name) && validateAge(age)) {
        var newRow = document.createElement("tr");

        var idCell = document.createElement("td");
        var nameCell = document.createElement("td");
        var ageCell = document.createElement("td");
        var actionCell = document.createElement("td");

        idCell.innerText = id;
        nameCell.innerText = name;
        ageCell.innerText = age;

        var delBtn = document.createElement("button");
        delBtn.innerText = "Delete";
        delBtn.onclick = function () {
            tableBody.removeChild(newRow);
        };

        actionCell.appendChild(delBtn);

        newRow.appendChild(idCell);
        newRow.appendChild(nameCell);
        newRow.appendChild(ageCell);
        newRow.appendChild(actionCell);

        tableBody.appendChild(newRow);

        // Reset fields
        idInput.value = "";
        nameInput.value = "";
        ageInput.value = "";
    }
}
