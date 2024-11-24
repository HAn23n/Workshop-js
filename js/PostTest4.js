function sortChar() {
    const input = document.getElementById("inputText").value.toLowerCase();
    // if (!/^[a-z]+$/.test(input)) {
    //     alert("Please enter only lowercase letters without spaces.");
    //     return;
    // }

    const charCount = {};
    for (const char of input) {
        charCount[char] = (charCount[char] || 0) + 1;
    }
    
    const sortedKeys = Object.keys(charCount).sort(); // เรียงลำดับ a-z
    const result = sortedKeys.map(key => `${charCount[key]}${key}`).join(",");
    document.getElementById("outputText").value = result;
}