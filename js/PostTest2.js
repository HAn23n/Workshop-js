const StudentData = {
    "name": "Hogwarts",
    "students": [
        {"fname": "Harry", "lname": "Potter", "house": "Gryffindor", "age": 15, "class": 3},
        {"fname": "Hermione", "lname": "Granger", "house": "Gryffindor", "age": 15, "class": 3},
        {"fname": "Ron", "lname": "Weasley", "house": "Gryffindor", "age": 15, "class": 3},
        {"fname": "Draco", "lname": "Malfoy", "house": "Slytherin", "age": 15, "class": 3},
        {"fname": "Luna", "lname": "Lovegood", "house": "Ravenclaw", "age": 14, "class": 2},
        {"fname": "Cedric", "lname": "Diggory", "house": "Hufflepuff", "age": 17, "class": 4},
    ]
};

function displayStudent(house = "") {
    const tableBody = document.getElementById("studentTable");
    tableBody.innerHTML = "";
    const filterHouse = house ? StudentData.students.filter(student => student.house === house) : StudentData.students;

    filterHouse.forEach(student => {
        const row = `<tr>
                        <td>${student.fname}</td>
                        <td>${student.lname}</td>
                        <td>${student.house}</td>
                        <td>${student.age}</td>
                        <td>${student.class}</td>
                    </tr>`;
        tableBody.insertAdjacentHTML('beforeend', row);
    });
}

document.getElementById("houseDrop").addEventListener("change", function() {
    const selectedHouse = this.value;
    displayStudent(selectedHouse);
});

document.getElementById("clear_B").addEventListener("click", function() {
    document.getElementById("studentTable").innerHTML = "";
    document.getElementById("houseDrop").value = "";
});

document.getElementById("refresh_B").addEventListener("click", function() {
    const selectedHouse = document.getElementById("houseDrop").value;
    displayStudent(selectedHouse);
});
displayStudent();