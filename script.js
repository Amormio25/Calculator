let screen = document.querySelector("screen");
let expression = document.querySelector("expression");
let answer = document.querySelector("answer");
let col1 = document.querySelector("#c1");
let col2 = document.querySelector("#c2");
let col3 = document.querySelector("#c3");
let col4 = document.querySelector("#c4");

const buttonLabels = [
    "AC", "7", "4", "1", "0",
    "DEL", "8", "5", "2", ".",
    "+/-", "9", "6", "3", "=",
    "÷", "×", "-", "+"
];

buttonLabels.forEach((label, index) => {
    let currentBtn = document.createElement("div");
    currentBtn.textContent = label;
    
    if (currentBtn.textContent == "+") currentBtn.classList.add("bigBtn");
    else currentBtn.classList.add("smallBtn");
    colorButtons(currentBtn.textContent, currentBtn);

    if (index < 5) 
        col1.appendChild(currentBtn);
    else if (index < 10) 
        col2.appendChild(currentBtn);
    else if (index < 15) 
        col3.appendChild(currentBtn);
    else if (index < 19) 
        col4.appendChild(currentBtn);
})

// button colors
// make ac and del red, same hover effect as current
// for plus minus, make hover red if current num is positive, green if negative
// hover blue for others, hover green for equal

function colorButtons(text, btn) {
    if (text == "AC" || text == "DEL") 
        btn.classList.add("deleteButtons");
    else if (text == "=")
        btn.classList.add("equals");
    else if (text == "÷" || text == "×" || text == "-" || text == "+")
        btn.classList.add("operations");
}