let i = 0

document.addEventListener('click', addGreeting)
document.querySelector('h1').addEventListener('mouseover', colorShift)

function addGreeting()
{
    let h2 = document.createElement('h2')
    h2.innerText = 'Hello World'
    document.querySelector('body').appendChild(h2)
}

function colorShift(e)
{
    const COLORS = ['red', 'orange', 'yellow', 'green', 'blue', 'indigo', 'violet']
    // console.log(e.target)
    e.target.style = `color: ${COLORS[i]};`
    ++i
    // to make sure iterator doesn't move past end of COLORS
    if (i >= COLORS.length)
        i = 0
}

// --- PRIMITIVE TYPES ---
let num = 13 // number
let greeting = 'Hello World' // string
let isGreen = false // boolean
let test // undefined
let blah = null // null

// --- REFERENCE TYPES ---

// Array
let users = ['John', 'Amber', 'Dave', 'Louise']

// Object
let userDetails = {

    firstName: 'John',
    lastName: 'Wright',
    age: 22
}