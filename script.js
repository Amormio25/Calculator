let screen = document.querySelector("screen");
let expression = document.querySelector("expression");
let answer = document.querySelector("answer");
let col1 = document.querySelector("#c1");
let col2 = document.querySelector("#c2");
let col3 = document.querySelector("#c3");
let col4 = document.querySelector("#c4");
let colWidth = parseFloat(getComputedStyle(col1).width);
let colHeight = parseFloat(getComputedStyle(col1).height);
let smallBtnHeight = colHeight / 8;
let bigBtnHeight = 2.15 * smallBtnHeight;

// plan for plus other way
// dont make any columns, just append fragment as a child
// add class list for each btn but dif for plus, to make plus stretch down
const buttonLabels = [
    "CLEAR", "7", "4", "1", "0",
    "DELETE", "8", "5", "2", ".",
    "+/-", "9", "6", "3", "=",
    "÷", "×", "-", "+"
];

for (let i = 0; i < buttonLabels.length; i++) {
    let currentBtn = document.createElement("div");
    currentBtn.textContent = buttonLabels[i];
    currentBtn.style.width = `${colWidth / 1.1}px`;
    currentBtn.classList.add("btns");

    if (buttonLabels[i] != "+") {
        currentBtn.style.height = `${smallBtnHeight}px`;
    } else {
        currentBtn.style.height = `${bigBtnHeight}px`;
    }

    if (i < 5) 
        col1.appendChild(currentBtn);
    else if (i < 10) 
        col2.appendChild(currentBtn);

    else if (i < 15) 
        col3.appendChild(currentBtn);
    else if (i < 19) 
        col4.appendChild(currentBtn);
}
