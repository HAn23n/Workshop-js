var person = [
    { name: "Nutticha", lastname: "Tippayaboont", age: 30, university: [{ name: "SUT" }] },
    { name: "Saksorn", lastname: "Sawatdeerakaa", age: 22, university: [{ name: "TU" }] },
    { name: "Natthawut", lastname: "SoNoob", age: 99, university: [{ name: "KU" }] }
];

const tableBody = document.getElementById("myTable");


function displayTable() {
    tableBody.innerHTML = '';  
    person.forEach((p, index) => {  
        const row = document.createElement("tr");
        row.innerHTML = `
            <td>${p.name}</td>
            <td>${p.lastname}</td>
            <td>${p.age}</td>
            <td>${p.university[0].name}</td>  
            <td><input type="button" value="Delete" class="btn btn-warning" onclick="DeletePerson(${index})"></td>  
        `;
        tableBody.appendChild(row); 
    });
}


function AddPerson() {
    const name = document.getElementById("name").value;
    const lastname = document.getElementById("lastname").value;
    const age = document.getElementById("age").value;
    const university = document.getElementById("university").value;


    if (name && lastname && age && university) {
        const nameExists = person.some(p => p.name === name);
        if (nameExists) {
            alert("Please fill in duplicate name information.");

        } else {
            person.push({
                name: name,
                lastname: lastname,
                age: parseInt(age), 
                university: [{ name: university }]
            });

            displayTable();
            document.getElementById("name").value = '';
            document.getElementById("lastname").value = '';
            document.getElementById("age").value = '';
            document.getElementById("university").value = '';
        }
    }
}


function DeletePerson(index) {
    person.splice(index, 1);
    displayTable();
}
displayTable();