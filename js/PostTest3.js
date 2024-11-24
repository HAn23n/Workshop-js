function reverseTxt() {
    const input = document.getElementById('inputText').value;
    const reversed = input.split('').reverse().join('');
    document.getElementById('outputText').value = reversed;
}