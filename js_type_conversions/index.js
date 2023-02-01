let value
let result
let obj = { greeting: 'Hello', name: 'Mike' }

value = '33'

console.log('value: ', value, ' type: ', typeof value)

// values to numbers
// 33
result = parseInt(value)
printResult()
// 1
result = Number(true)
printResult()
// 0
result = Number(false)
printResult()
// 33
result = parseInt('33.5')
printResult()
// 33.5
result = parseFloat('33.5')
printResult()
// 33.5145698
result = Number(33.5145698)
printResult()
// NaN
result = Number('Hello World')
printResult()
// Object { ... }
result = obj
printResult()
// NaN
result = Number(obj)
printResult()

// values to strings
// '33'
result = String(33)
printResult()
// 'true'
result = String(true)
printResult()
// 'false'
result = String(false)
printResult()
// '[object Object]'
result = String(obj)
printResult()
// '3.14'
result = 3.14.toString()
printResult()

// values to big ints
// RangeError: can't be converted
// result = BigInt(33.5)
// printResult()

// 49n type: bigint
result = BigInt(49)
printResult()



function printResult()
{
    console.log('result: ', result, ' type: ', typeof result)
}

// class Test
// {
//     constructor(greeting)
//     {
//         this.greeting = greeting
//     }
//     sayHello()
//     {
//         console.log(this.greeting)
//     }
// }

// let test = new Test('Hello World')
// test.sayHello()