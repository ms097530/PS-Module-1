const isPrime = (num) =>
{
    if (num <= 1)
    {
        return false;
    }
    for (let i = 2; i < num; i++)
    {
        if (num % i === 0)
        {
            return false;
        }
    }
    return true;
}

for (let i = 1; i <= 20; i++)
{
    let resultStr = ""
    if (isPrime(i))
    {
        resultStr += i + ' is prime. '
    }
    if (i % 2 === 0)
    {
        resultStr += i + ' is even.'
    } else
    {
        resultStr += i + ' is odd.'
    }
    console.log(resultStr)
}