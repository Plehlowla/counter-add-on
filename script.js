const addBtn = document.querySelector("#add");
const subtractBtn = document.querySelector("#subtract");
const counterNum = document.querySelector('#counter');
const resetBtn = document.querySelector('#reset');
const ulElement = document.querySelector("#list-items")

let counter = 0;

function add() {
    counter++
    counterNum.innerText = counter

        // create an element
        const li = document.createElement('li')
        li.innerHTML = '<b>Sentence</b> ' + counter
        li.style = "font-size:30px;"


        // const b = document.createElement('b')


        // const textNode = document.createTextNode('Sentence ')
        // b.appendChild(textNode)

        // const textNode2 = document.createTextNode(counter)
        // li.appendChild(b)
        // li.appendChild(textNode2)

        // append that element
        ulElement.appendChild(li)
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
    location.reload();
}
resetBtn.addEventListener('click', reset)