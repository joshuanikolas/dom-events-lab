/*-------------------------------- Constants --------------------------------*/
const calculator = document.getElementById('calculator');
const display = calculator.querySelector('.display');
const buttons = calculator.querySelectorAll('.button');

/*-------------------------------- Variables --------------------------------*/
let firstOperand = '';
let secondOperand = '';
let operator = '';
/*------------------------ Cached Element References ------------------------*/

/*----------------------------- Event Listeners -----------------------------*/
buttons.forEach(button => {
  button.addEventListener('click', () => {
    const value = button.textContent;

    if (value === 'C') {
      clearDisplay();
    } else if (value === '=') {
      calculate();
    } else if (value === '+' || value === '-' || value === '*' || value === '/') {
      handleOperator(value);
    } else {
      handleNumber(value);
    }
  });
});



/*-------------------------------- Functions --------------------------------*/

