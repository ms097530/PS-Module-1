console.log('-------- LAB 3 --------')

// Sum
let num1 = 9029, num2 = 26
let sum = num1 + num2
console.log('sum: ', sum)

// Other operations
let num3 = 13, num4 = 30
sum = num4 - num3
console.log('sum: ', sum)
sum = num4 % num3
console.log('sum: ', sum)
sum = num4 / num3
console.log('sum: ', sum)
sum = num3 * num4
console.log('sum: ', sum)


// Averages
let arr = []
for (let i = 0; i < 10; ++i)
{
    arr[i] = i + 1
}
let avgFirstFive = 0
for (let i = 0; i < 5; ++i)
    avgFirstFive += arr[i]
avgFirstFive /= 5
console.log('First five average: ', avgFirstFive)

let avgSecondFive = 0
for (let i = 5; i < arr.length; ++i)
    avgSecondFive += arr[i]
avgSecondFive /= 5
console.log('Second five average: ', avgSecondFive)

let avgOfAvgs = (avgFirstFive + avgSecondFive) / 2
console.log('Average of averages: ', avgOfAvgs)