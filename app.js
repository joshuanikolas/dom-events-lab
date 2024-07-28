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


function handleNumber(number) {
  if (!operator) {
    firstOperand += number;
  } else {
    secondOperand += number;
  }
  display.textContent = firstOperand || '' + operator + secondOperand || '';
}

function handleOperator(op) {
  operator = op;
  display.textContent = firstOperand + operator;
}

function calculate() {
  let result;
  switch (operator) {
    case '+':
      result = parseFloat(firstOperand) + parseFloat(secondOperand);
      break;
    case '-':
      result = parseFloat(firstOperand) - parseFloat(secondOperand);
      break;
    case '*':
      result = parseFloat(firstOperand) * parseFloat(secondOperand);
      break;
    case '/':
      result = parseFloat(firstOperand) / parseFloat(secondOperand);
      break;
    default:
      return;
  } //the 'break' statement in this function is used to terminate the switch statement after matches are found. If there's no break in the function the codes will continue through to the next case. Almost similar to an if else statement.
  // 'parseFloat' is used to change the variables to numbers which is used in this function for the first operand and the second operand.
  display.textContent = result;
  firstOperand = result;
  secondOperand = '';
  operator = '';
}

function clearDisplay() {
  firstOperand = '';
  secondOperand = '';
  operator = '';
  display.textContent = '';
}