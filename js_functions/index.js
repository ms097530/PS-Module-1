// sayHello() - works!
// sayBye() - error!

// function definition - gets hoisted
function sayHello()
{
    console.log('Hello!')
}

// function expression - does NOT get hoisted
const sayBye = function ()
{
    console.log('Bye!')
}

// arrow function
const sayGreeting = (greeting) =>
{
    console.log(greeting)
}

function areBothEven(num1, num2)
{
    // first log shows n1 and n2 as assigned (order doesn't matter if explicitly assigned)
    // 'arguments' lists values in same order as passed in

    // console.log('n1: ', n1, ' n2: ', n2)
    // console.log(arguments)

    if (typeof num1 !== "number" || typeof num2 !== "number")
    {
        console.log('Arguments must be numbers')
        return
    }

    // return num1 % 2 === 0 && num2 % 2 === 0
    return !(num1 % 2) && !(num2 % 2)
}

// expect:
/*
    true
    false
    false
    false
    true
    undefined (logs error message)
*/
// console.log(areBothEven(2, 4))
// console.log(areBothEven(3, 5))
// console.log(areBothEven(3, 4))
// console.log(areBothEven(4, 3))
// console.log(areBothEven(4, 2))
// console.log(areBothEven('Hello', 69))

// specifying values for arguments explicitly
// arguments: 4, 20, 3, "hello"
// n1: "hello", n2: 3
// areBothEven(4, 20, n2 = 3, n1 = "hello")

function getDevObject(name)
{
    const skills = []

    for (let i = 1; i < arguments.length; ++i)
    {
        skills.push(arguments[i])
    }
    return {
        name,
        skills
    }
}

console.log(getDevObject('Mike', 'boxing', 'gaming', 'being sexy', 'being modest', 'everything else'))