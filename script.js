const screen = document.querySelector("#screen");
const expression = document.querySelector("#expression");
const answer = document.querySelector("#answer");
const col1 = document.querySelector("#c1");
const col2 = document.querySelector("#c2");
const col3 = document.querySelector("#c3");
const col4 = document.querySelector("#c4");
let firstNum = '';
let secondNum = '';
let editingFirst = true;
let hasDecimal = false;

answer.textContent = '0';
const buttonLabels = [
    "AC", "7", "4", "1", "0",
    "DEL", "8", "5", "2", ".",
    "+/-", "9", "6", "3", "=",
    "÷", "×", "-", "+"
];

buttonLabels.forEach((label, index) => {
    let currentBtn = document.createElement("div");
    currentBtn.addEventListener("click", selectNumber);
    currentBtn.textContent = label;
    
    if (label == "+") currentBtn.classList.add("bigBtn");
    else currentBtn.classList.add("smallBtn");
    colorButtons(label, currentBtn);

    if (index < 5) col1.appendChild(currentBtn);
    else if (index < 10) col2.appendChild(currentBtn);
    else if (index < 15) col3.appendChild(currentBtn);
    else if (index < 19) col4.appendChild(currentBtn);
})

function colorButtons(label, btn) {
    if (label == "AC" || label == "DEL") {
        btn.classList.add("deleteButtons");
        btn.addEventListener("click", deleteButtons);
    }
    else if (label == "=")
        btn.classList.add("equals");
    else if (label == "÷" || label == "×" || label == "-" || label == "+")
        btn.classList.add("operations");
}

// have a function for calculations
// edge cases:
//      update stored number on clear
//      update stored number on delete
//      don't allow any number inputs after taking a symbol
//      disable all symbols after taking a symbol

//  equals and answer
//      after equals pressed, store answer into first number slot
//          for example
//          5 + 2 store 5 in slot 1, + in symbol storage, 2 in slot 2
//          after pressing equals, store answer = 7 into slot 1
//          this is so that if they do
//          5 + 2 - 3 (or any other operation)
//          it will automatically do 7 - 3
//      in other words
//      if two symbols are clicked (5 + 2 - 3)
//      it should calculate by order entered (order of ops wouldn't matter)

// answer.textContent stores string object, so must parse through

// my method for this seems a little inefficient, just create
// selectButton function which has selectNum and selectOperator built in it








function deleteButtons(event) {
    if (event.target.textContent == "AC") {
        answer.textContent = '0';
        firstNum = '';
        secondNum = '';
    } else if (event.target.textContent == "DEL") {
        if (editingFirst) {
            firstNum = firstNum.substring(0, firstNum.length - 1);
            answer.textContent = firstNum || '0';
        } else {
            secondNum = secondNum.substring(0, secondNum.length - 1);
            answer.textContent = secondNum || '0';
        }
    }
}

function selectNumber(event) {
    let number = parseInt(event.target.textContent);
    if (firstNum.length < 17 && Number.isInteger(number)) {
        if (answer.textContent == '0') {
            answer.textContent = '';
            answer.textContent = answer.textContent.concat(number);
            firstNum = firstNum.concat(number);
        } else {
            answer.textContent = answer.textContent.concat(number);
            firstNum = firstNum.concat(number);
        }
    }
}

function selectOperator(event) {
    if (event.target.textContent == "+" || 
                            event.target.textContent == "-" || 
                            event.target.textContent == "×" || 
                            event.target.textContent == "÷") {
        let operator = event.target.textContent;
        
    }
}

function add(x, y) {
    return x + y;
}

function subtract(x, y) {
    return x - y;
}

function multiply(x, y) {
    return x * y;
}

function divide(x, y) {
    return x / y;
}