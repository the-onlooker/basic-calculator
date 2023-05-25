const display = document.querySelector("#display");
const buttons = document.querySelectorAll("button");

buttons.forEach((item) => {
  item.onclick = () => {
    if (item.id === "clear") {
      display.innerText = "";
    } else if (item.id === "backspace") {
      let string = display.innerText.toString();
      display.innerText = string.substr(0, string.length - 1);
    } else if (item.id === "equal") {
      if (display.innerText !== "") {
        display.innerText = eval(display.innerText);
      } else {
        display.innerText = "Empty!";
        setTimeout(() => (display.innerText = ""), 2000);
      }
    } else {
      display.innerText += item.id;
    }
  };
});

// Keyboard event listener
document.addEventListener("keydown", (event) => {
  const key = event.key;

  if (/^[0-9]$/.test(key)) {
    // Number keys
    display.innerText += key;
  } else if (key === "+" || key === "-" || key === "*") {
    // Operator keys (+, -, *)
    display.innerText += key;
  } else if (key === "/" || key === "x") {
    // Division (/) or Multiplication (x)
    display.innerText += key === "x" ? "*" : "/";
  } else if ((event.shiftKey && key === "9") || (event.shiftKey && key === "(")) {
    // Shift+( or Shift+9
    display.innerText += "(";
  } else if ((event.shiftKey && key === "0") || (event.shiftKey && key === ")")) {
    // Shift+) or Shift+0
    display.innerText += ")";
  } else if (key === "Enter") {
    // Equal key
    event.preventDefault();
    if (display.innerText !== "") {
      display.innerText = eval(display.innerText);
    } else {
      display.innerText = "Empty!";
      setTimeout(() => (display.innerText = ""), 2000);
    }
  } else if (key === "Backspace") {
    // Backspace key
    let string = display.innerText.toString();
    display.innerText = string.substr(0, string.length - 1);
  } else if (key === "c" || key === "C") {
    // Clear key
    display.innerText = "";
  }
});

const themeToggleBtn = document.querySelector(".theme-toggler");
const calculator = document.querySelector(".calculator");
const toggleIcon = document.querySelector(".toggler-icon");
let isDark = true;
themeToggleBtn.onclick = () => {
  calculator.classList.toggle("dark");
  themeToggleBtn.classList.toggle("active");
  isDark = !isDark;
};
