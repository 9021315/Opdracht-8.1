
function multiply() {
    let num1 = parseFloat(document.getElementById('num1').value);
    let num2 = parseFloat(document.getElementById('num2').value);
    document.getElementById('result').innerText = 'Result: ' + (num1 * num2);
}

function devide() {
    let num1 = parseFloat(document.getElementById('num1').value);
    let num2 = parseFloat(document.getElementById('num2').value);
    document.getElementById('result').innerText = 'Result: ' + (num1 / num2);
}

function add() {
    let num1 = parseFloat(document.getElementById('num1').value);
    let num2 = parseFloat(document.getElementById('num2').value);
    document.getElementById('result').innerText = 'Result: ' + (num1 + num2);
}

function minus() {
    let num1 = parseFloat(document.getElementById('num1').value);
    let num2 = parseFloat(document.getElementById('num2').value);
    document.getElementById('result').innerText = 'Result: ' + (num1 - num2);
}
