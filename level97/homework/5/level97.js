const display = document.getElementById('display');
    const numButtons = document.querySelectorAll('.num');
    const opButtons = document.querySelectorAll('.op');
    const equalsButton = document.getElementById('equals');
    const clearButton = document.getElementById('clear');

    let currentInput = '';
    let operation = '';
    let previousInput = '';

    numButtons.forEach(button => {
      button.addEventListener('click', (e) => {
        currentInput += e.target.value;
        display.value = currentInput;
      });
    });

    opButtons.forEach(button => {
      button.addEventListener('click', (e) => {
        if (currentInput !== '') {
          previousInput = currentInput;
          currentInput = '';
          operation = e.target.value;
        }
      });
    });

    equalsButton.addEventListener('click', () => {
      if (previousInput !== '' && currentInput !== '') {
        switch (operation) {
          case '+':
            display.value = parseFloat(previousInput) + parseFloat(currentInput);
            break;
          case '-':
            display.value = parseFloat(previousInput) - parseFloat(currentInput);
            break;
          case '*':
            display.value = parseFloat(previousInput) * parseFloat(currentInput);
            break;
          case '/':
            if (currentInput !== '0') {
              display.value = parseFloat(previousInput) / parseFloat(currentInput);
            } else {
              display.value = 'Error';
            }
            break;
        }
        previousInput = '';
        currentInput = display.value;
      }
    });

    clearButton.addEventListener('click', () => {
      currentInput = '';
      previousInput = '';
      display.value = '';
    });