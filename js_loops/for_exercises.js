console.log('-------- EXERCISES --------')

// console.log('%c---- Exercise 1 ----', 'color: yellow')
// for (let i = 1; i <= 10; i += 2)
// {
//     console.log(i)
//     if (i === 9)
//         i = 0
// }

// console.log('%c---- Exercise 2 ----', 'color: yellow')

// console.log('LONG SOLUTION')
// for (let i = 6; i <= 60; i++)
// {
//     if (i % 3 === 0)
//     {
//         console.log(i)
//     }
// }
// console.log('SHORT SOLUTION')
// for (let i = 6; i <= 60; i += 3)
// {
//     console.log(i)
// }

// console.log('%c---- Exercise 3 ----', 'color: yellow')

// let str = ""
// for (let i = 0; i < 7; ++i)
// {
//     str += '#'
//     console.log(str)
// }

// console.log('%c---- Exercise 4 ----', 'color: yellow')

// for (let i = 0; i < 10; ++i)
// {
//     if (i % 2 === 0)
//         console.log(i)
// }

console.log('%c---- Exercise 5 ----', 'color: yellow')

// example run of i = 12:
// set primeString to 'prime' 
// set bound to Math.floor(12 / 2) => 6
// set factors to []
// start inner loop, j = 6, run loop until j is no longer >= 2, decrement j at the end of each block
//      check 12 % 6 === 0 => true
//      set primeString to 'not prime'
//      factors = [6]
//      decrement j => j = 5
//      check 12 % 5 === 0 => false
//      decrement j => j = 4
//      check 12 % 4 === 0 => true
//      set primeString to 'not prime'
//      factors = [6,4]
//      decrement j => j = 3
//      check 12 % 3 === 0 => true
//      set primeString to 'not prime'
//      factors = [6,4,3]
//      decrement j => j = 2
//      check 12 % 2 === 0 => true
//      set primeString to 'not prime'
//      factors = [6,4,3,2]
//      decrement j => j = 1
//      exit loop
// adjust factors to include 1 x i
// output
// increment i

for (let i = 1; i <= 20; i++)
{
    // default primeString
    let primeString = 'prime'
    // exception since 1 is not prime for some reason
    if (i === 1)
        primeString = 'not prime'
    // starting value for inner loop (used as divisor) - dividing i by any values over half of i is pointless, they will not divide evenly
    let bound = Math.floor(i / 2)

    // IGNORE - array for storing factors for output
    let factors = []

    // loop stops once j hits 2, no need to check lower because all values are divisible by 1
    for (let j = bound; j >= 2; j--)
    {
        // check if i is divided evenly by current value of j
        if (i % j === 0)
        {
            // current value of i is evenly divided by j, so it is not prime
            primeString = 'not prime'

            // IGNORE - put current factor into array 
            factors.push(j)
        }
    }
    // IRRELEVANT TO LOOPS - just for output clarity
    // add 1 and number itself to factors array
    factors.push(1)
    if (i !== 1)
        factors.unshift(i)
    // END IRRELEVANT PART

    // style output depending on primeString
    let style = 'color: pink'
    if (primeString === 'prime')
        style = 'color: limegreen'

    // determine if i is odd or even
    let isEven = i % 2 === 0
    let evenOddStr = 'odd'
    if (isEven)
    {
        evenOddStr = 'even'
    }

    console.log(`%c${i} is ${primeString} and is ${evenOddStr}. Factors: ${factors.reverse()}`, style)
}

