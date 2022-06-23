const display = document.querySelector('#display');
const btn = document.querySelectorAll('.btn');
let a = 0
let b = 0
let operator
let result

function calculator() {
  btn.forEach(button => {
    button.addEventListener('click', () => {
      if (button.className === 'btn equals') {
        b = Number(display.textContent);
        result = operate(operator, a, b);
        if (decimalCount(result) > 4) {
          display.textContent = result.toFixed(4);
        }
        else {
          display.textContent = result;
        }
      }
      else if (button.className === 'btn digit') {
        display.textContent += button.textContent;
      }
      else if (button.className === 'btn operator') {
        a = Number(display.textContent);
        operator = button.textContent;
        display.textContent = '';
      }
      else if (button.className === 'btn clear') {
        display.textContent = '';
        a = 0
        b = 0
        operator = ''
      }
    })
  });
}

//to count numbers after decimal point
function decimalCount(number) {
  let numStr = String(number);
  if (numStr.includes('.')) {
    return numStr.split('.')[1].length;
  }
  else {
    return 0;
  }
}

function add(a, b) {
    return a + b;
}

function multiply(a, b) {
    return a * b;
}

function substract(a, b) {
    return a - b;
}

function divide(a, b) {
    return a / b;
}

function operate(operator, a, b) {
    if (operator === '+') {
        return add(a, b);
    }
    else if (operator === '*') {
        return multiply(a, b);
    }
    else if (operator === '-') {
        return substract(a, b);
    }
    else if (operator === '/') {
        return divide(a, b);
    }
}

calculator()
