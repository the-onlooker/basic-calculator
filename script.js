const display = document.getElementById('display');
const buttons = document.querySelectorAll('button');
let expression = '';

buttons.forEach(button => {
    button.addEventListener('click', () => {
        const buttonText = button.innerText;

        if (buttonText === 'C') {
            expression = '';
        } else if (buttonText === '=') {
            try {
                const result = eval(expression);
                expression = result.toString();
            } catch (error) {
                expression = 'Error';
            }
        } else if (buttonText === '<') {
            expression = expression.slice(0, -1);
        } else {
            expression += buttonText;
        }

        display.innerText = expression;
    });
});

const themeToggler = document.querySelector('.theme-toggler');

themeToggler.addEventListener('click', () => {
    const calculator = document.querySelector('.calculator');
    calculator.classList.toggle('dark');
    themeToggler.classList.toggle('active');
});
