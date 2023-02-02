console.log('-------- CONDITIONALS --------')

/*
"condition" will be evaluated to see if it is truthy until it finds a block where the value is truthy (NOTE: condition should differ between checks)

when checking if a value is truthy, the expression inside will resolve; if the resolved value is not a boolean, it will be coerced based on the "truthiness" or "falsiness" of the resolved value, and this coerced value will be used to determine whether or not to enter the given conditional block

    if (condition)
    {
        write code here
    }
    else if (condition)
    {
        write code here
    }
    else
    {
        write code here
    }
*/


{
    // LOCAL SCOPE - to this block
    let faveColor = 'green'

    if (faveColor === 'red')
    {
        alert('I love red too!')
    }
    else
    {
        alert('Sorry, I don\'t know that color.')
    }
}
// looks for faveColor at GLOBAL SCOPE -- does not exist -> error
// this throws exception -> code below will not run
console.log(faveColor)

console.log('I NEVER RUN')