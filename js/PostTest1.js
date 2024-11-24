function calculateTriangle() {
    const base = parseFloat(document.getElementById("base").value);
    const height = parseFloat(document.getElementById("height1").value);
    const result = isNaN(base) || isNaN(height) ? "Invalid input" : (0.5 * base * height).toFixed(2);
    document.getElementById("totalTrinagle").textContent = `Area: ${result}`;
}

function calculateRectangle() {
    const length = parseFloat(document.getElementById("length").value);
    const width = parseFloat(document.getElementById("width").value);
    const result = isNaN(length) || isNaN(width) ? "Invalid input" : (length * width).toFixed(2);
    document.getElementById("totalRectangle").textContent = `Area: ${result}`;
}

function calculateCircleArea() {
    const radius = parseFloat(document.getElementById("radius1").value);
    const result = isNaN(radius) ? "Invalid input" : (Math.PI * radius ** 2).toFixed(2);
    document.getElementById("totalCricle").textContent = `Area: ${result}`;
}

function calculateCircumference() {
    const radius = parseFloat(document.getElementById("radius2").value);
    const result = isNaN(radius) ? "Invalid input" : (2 * Math.PI * radius).toFixed(2);
    document.getElementById("totalcircumference").textContent = `Circumference: ${result}`;
}

function calculateTrapezoid() {
    const a = parseFloat(document.getElementById("a").value);
    const b = parseFloat(document.getElementById("b").value);
    const height = parseFloat(document.getElementById("height2").value);
    const result = isNaN(a) || isNaN(b) || isNaN(height) ? "Invalid input" : (0.5 * (a + b) * height).toFixed(2);
    document.getElementById("totalTrapezoid").textContent = `Area: ${result}`;
}