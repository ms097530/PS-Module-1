console.log('-------- WHILE EXERCISES --------')

console.log('%c---- Exercise 1 ----', 'color: yellow')
let i = 3
while (i < 35)
{
    console.log(`i: ${i}`)
    i += 3
}

console.log('%c---- Exercise 2 ----', 'color: yellow')
i = 5
while (i < 100)
{
    console.log(`i: ${i}`)
    i += 5
}

console.log('%c---- Exercise 3 ----', 'color: yellow')
i = 0
while (i <= 20)
{
    if (i > 0 && i % 2 === 0)
    {
        console.log(`i = ${i}, %ci * 3: ${i * 3}`, 'color: orange')
    }
    ++i
}

console.log('%c---- Exercise 4 ----', 'color: yellow')
i = 2
let primeNums = []
while (i <= 20)
{
    let bound = Math.floor(i / 2)
    let isPrime = true

    for (let j = 2; j <= bound; ++j)
    {
        if (i % j === 0)
        {
            isPrime = false
            break
        }
    }

    if (isPrime)
    {
        primeNums.push(i)
    }
    ++i
}
console.log(`Prime numbers from 0-20: ${primeNums}`)

// i = 1
// while (i <= 35 / 3)
// {
//     console.log(i * 3)
//     ++i
// }

console.log('%c---- Exercise 5 - Bonus ----', 'color: yellow')
let change = 10 - 4
let numQuarters = 0
while (numQuarters < change * 4)
{
    numQuarters += 1
}
console.log(numQuarters)