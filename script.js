const screen = document.querySelector("#screen");
const expression = document.querySelector("#expression");
const answer = document.querySelector("#answer");
const col1 = document.querySelector("#c1");
const col2 = document.querySelector("#c2");
const col3 = document.querySelector("#c3");
const col4 = document.querySelector("#c4");

let firstNum = '0';
let secondNum = '0';
let operator = '';
let editingFirst = true;
let validOperators = ['+', '-', '×', '÷', '='];


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
    currentBtn.addEventListener("click", selectOperator);
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

function deleteButtons(event) {
    if (event.target.textContent == "AC") {
        answer.textContent = '0';
        expression.textContent = '';
        firstNum = '0';
        secondNum = '0';
        operator = '';
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
    if (editingFirst) {
        if (event.target.textContent === '.') {
            if (!firstNum.includes('.')) {
                if (firstNum === '0') {
                    firstNum = firstNum.concat('.');
                } else {
                    firstNum = ''.concat(firstNum.concat('.'));
                }
                answer.textContent = firstNum;
            }
        } else {
            //console.log("here")
            let number = parseInt(event.target.textContent);
            //console.log(firstNum)
            //console.log("first num length: " + firstNum.length)
            //console.log("edit2: " + editingFirst)
            if (firstNum.length < 17 && Number.isInteger(number)) {
                //console.log("over here")
                if (answer.textContent == '0') {
                    //console.log("wrong")
                    answer.textContent = ''.concat(number);
                    firstNum = answer.textContent;
                } else {
                    //console.log("here now")
                    answer.textContent = answer.textContent.concat(number);
                    firstNum = answer.textContent;
                }
            }
        }
    } else {
        if (event.target.textContent === '.') {
            if (!secondNum.includes('.')) {
                if (secondNum === '0') {
                    secondNum = secondNum.concat('.');
                } else {
                    secondNum = ''.concat(secondNum.concat('.'));
                }
                answer.textContent = secondNum;
            }
        } else {
            let number = parseInt(event.target.textContent);
            if (secondNum.length < 17 && Number.isInteger(number)) {
                if (answer.textContent === '0') {
                    answer.textContent = ''.concat(number);
                    secondNum = answer.textContent;
                } else {
                    answer.textContent = answer.textContent.concat(number);
                    secondNum = answer.textContent;
                }
            }
        }
    }
}

function selectOperator(event) {// if event is an operator
    //      if current operator is not empty string
    //          if second num is 0 (default), change the operator
    //          if second num is not 0 (user edited), operate on first two 
    //              numbers and make the value as firstNum, then make event the new operator
    //      if current operator is an empty string
    //          simply do the stuff in the else block (switch to second)
    if (validOperators.includes(event.target.textContent)) {
        if (operator != '') {
            //console.log(3)
            if (secondNum == '0') {
                operator = event.target.textContent;
                expression.textContent = `${firstNum} ${operator} `;
            } else {
                solve(event);
                if (editingFirst) {
                    // display answer on text and expressions above
                    //console.log(5)
                    //console.log(" edit" + editingFirst)
                } else {
                    // put chained answer on expression and make textcontent 
                    operator = event.target.textContent;
                    expression.textContent = `${firstNum} ${operator} `;
                    answer.textContent = 0;
                    //console.log(6)
                }                
            }
        } else {
            //console.log(4)
            operator = event.target.textContent;
            editingFirst = false;
            expression.textContent = `${firstNum} ${operator} `;
            answer.textContent = 0;
        }
    } 
}

function solve(event) {  
    if (operator == '+') {
        firstNum = add(parseFloat(firstNum), parseFloat(secondNum)).toString();
    } else if (operator == '-') {
        firstNum = subtract(parseFloat(firstNum), parseFloat(secondNum)).toString();
    } else if (operator == '×') {
        firstNum = multiply(parseFloat(firstNum), parseFloat(secondNum)).toString();
    } else if (operator == '÷') {
        firstNum = divide(parseFloat(firstNum), parseFloat(secondNum)).toString();
    }

    expression.textContent = expression.textContent.concat(secondNum);
    answer.textContent = firstNum.toString().substring(0,17);
    //console.log(1)
    //console.log(operator)
    secondNum = '0';
    editingFirst = (event.target.textContent == '=') ? true : false;
    operator = '';
    //console.log(2)
    //console.log(operator)
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