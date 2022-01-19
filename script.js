const addBtn = document.querySelector("#add");
const subtractBtn = document.querySelector("#subtract");
const counterNum = document.querySelector('#counter');
const resetBtn = document.querySelector('#reset');
const ulElement = document.querySelector("#list-items")
const removeBtn = document.querySelector('#remove')

let counter = 0;
let randomNumber = Math.floor(Math.random() * 10)

function add() {
    counter++
    counterNum.innerText = counter

        // create an element
        const li = document.createElement('li')
        li.setAttribute('data-counter', counter)

        if(counter % 2 === 0) {
            li.setAttribute('class','red')
        } else {
            li.setAttribute('class','yellow')
        }

        // CSS STYLE
        // li.setAttribute('class', 'red')

        // innerHTML to add the <b> and stuff, idk if it works with innerText
        li.innerHTML = '<b>Sentence</b> ' + counter

        // Font Size
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

    const li = ulElement.querySelector('[data-counter="'+counter+'"]')

    // parseInt to make the li into a number
    const number = parseInt(li.getAttribute('data-counter'), 10)

    // // Makes it so, it only removes the even numbers 
    // // if(number % 2 === 0) {
    // //     return
    // // }
    
    li.remove()

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

// function remove() {

//     const li = ulElement.querySelector('[data-counter="'+counter+'"]')

//     // parseInt to make the li into a number
//     const number = parseInt(li.getAttribute('data-counter'), 10)
//     // counter--
//     li.remove()
// }
// removeBtn.addEventListener('click', remove)