//fai funzionare la calcolatrice
const display = document.getElementById('display');
const buttons = document.querySelectorAll('.button');
let currentInput = '';

function appendToDisplay(value) {
    currentInput += value;
    display.value = currentInput;
}
