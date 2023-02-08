function sayHello(n)
{
    if (n <= 0)
        return

    let oArr = Array(n)
    oArr = oArr.fill('o')
    let oStr = oArr.join('')
    console.log('Hell' + oStr)

    sayHello(n - 1)
}

sayHello(5)

function sumR(num, n)
{
    if (n <= 0)
        return num

    return sumR(num + 2, n - 1)
}