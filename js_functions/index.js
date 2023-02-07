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