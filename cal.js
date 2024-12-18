// script.js
const display = document.getElementById('display');
const buttons = document.querySelectorAll('.btn');
let currentInput = '';
let previousInput = '';
let operator = '';

buttons.forEach(button => {
  button.addEventListener('click', () => {
    const value = button.getAttribute('data-value');

    if (button.classList.contains('clear')) {
      currentInput = '';
      previousInput = '';
      operator = '';
      display.textContent = '0';
    } else if (button.classList.contains('operator')) {
      if (currentInput === '') return;
      operator = value;
      previousInput = currentInput;
      currentInput = '';
    } else if (button.id === 'equals') {
      if (currentInput === '' || previousInput === '' || operator === '') return;
      currentInput = calculate(previousInput, currentInput, operator);
      display.textContent = currentInput;
      previousInput = '';
      operator = '';
    } else {
      currentInput += value;
      display.textContent = currentInput;
    }
  });
});

function calculate(a, b, operator) {
  a = parseFloat(a);
  b = parseFloat(b);
  switch (operator) {
    case '+': return a + b;
    case '-': return a - b;
    case '*': return a * b;
    case '/': return b !== 0 ? a / b : 'Error';
    default: return '0';
  }
}
