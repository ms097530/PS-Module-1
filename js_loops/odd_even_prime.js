for (let i = 1; i <= 20; ++i)
{

    let primeString = 'prime'
    if (i === 1)
        primeString = 'not prime'

    let bound = Math.floor(i / 2)

    let factors = []

    for (let j = bound; j >= 2; --j)
    {
        if (i % j === 0)
        {

            primeString = 'not prime'

            factors.push((j))
        }
    }

    factors.push(1)
    if (i !== 1)
        factors.unshift(i)

    let style = 'color: pink'
    if (primeString === 'prime')
        style = 'color: limegreen'

    let isEven = i % 2 === 0
    let evenOddStr = 'odd'
    if (isEven)
    {
        evenOddStr = 'even'
    }

    console.log(`%c${i} is ${primeString} and is ${evenOddStr}. Factors: ${factors.reverse()}`, style)
}