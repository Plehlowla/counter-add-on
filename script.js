const addBtn = document.querySelector("#add");
const subtractBtn = document.querySelector("#subtract");
const counterNum = document.querySelector('#counter');
const resetBtn = document.querySelector('#reset');

let counter = 0;

function add() {
    counter++
    counterNum.innerText = counter
}

addBtn.addEventListener('click', add)

function subtract() {
    counter--
    counterNum.innerText = counter
}
subtractBtn.addEventListener('click', subtract)

function reset() {
    counter = 0;
    counterNum.innerText = counter
}
resetBtn.addEventListener('click', reset)