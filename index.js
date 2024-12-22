const display = document.getElementById("expression");

function appendToExpression(input) {
    display.textContent += input;
}

function clearScreen() {
    display.textContent = "";
}

function equal() {
    const final = eval(display.textContent);
    document.getElementById("expression").textContent = final;
}