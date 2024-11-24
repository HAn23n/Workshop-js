function checkObjects() {
    const inputData = document.getElementById("inputText").value;
    try {
        const objects = JSON.parse(inputData);
        let duplicateColumn = false;
        let duplicateRow = false;
        
        const columnSet = new Set();
        for (const obj of objects) {
            for (const key in obj) {
                if (columnSet.has(key)) {
                    duplicateColumn = true;
                }
                columnSet.add(key);
            }
        }
        const rowSet = new Set();
        for (const obj of objects) {
            const rowStr = JSON.stringify(obj);
            if (rowSet.has(rowStr)) {
                duplicateRow = true;
            }
            rowSet.add(rowStr);
        }
        const resultText = `
        <p><strong>Object Duplicate Column:</strong> ${duplicateColumn ? 'True' : 'False'}</p>
        <p><strong>Object Duplicate Row:</strong> ${duplicateRow ? 'True' : 'False'}</p>
        `;
        document.getElementById("result").innerHTML = resultText;
        console.log(resultText);
    } catch (error) {
    document.getElementById("result").innerHTML = "<p class='text-danger'>Invalid JSON format.</p>";
    }
}