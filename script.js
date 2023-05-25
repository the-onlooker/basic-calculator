const display = document.querySelector("#display");
const buttons = document.querySelectorAll("button");

// Function to evaluate an arithmetic expression
function evaluateExpression(expression) {
  try {
    const result = new Function(`return ${expression}`)();
    return result;
  } catch (error) {
    console.error(error);
    return "Error: " + error.message;
  }
}

// Function to handle button click events
function addButtonClickListeners() {
  buttons.forEach((item) => {
    item.onclick = () => {
      const buttonText = item.innerText;

      switch (buttonText) {
        case "C":
          display.innerText = "";
          break;
        case "<":
          display.innerText = display.innerText.slice(0, -1);
          break;
        case "=":
          const result = evaluateExpression(display.innerText);
          display.innerText = result;
          break;
        default:
          display.innerText += buttonText;
          break;
      }
    };
  });
}

// Theme toggle functionality
const themeToggleBtn = document.querySelector(".theme-toggler");
const calculator = document.querySelector(".calculator");
const toggleIcon = document.querySelector(".toggler-icon");
let isDark = true;

themeToggleBtn.onclick = () => {
  calculator.classList.toggle("dark");
  calculator.classList.toggle("light");
  themeToggleBtn.classList.toggle("active");
  isDark = !isDark;

  if (isDark) {
    document.body.style.backgroundImage = "url('darkbg.png')";
  } else {
    document.body.style.backgroundImage = "url('lightbg.png')";
  }

  // Call the function to reassign the button click event listeners
  addButtonClickListeners();
};

// Call the function initially to assign the button click event listeners
addButtonClickListeners();
