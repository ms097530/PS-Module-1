console.log('-------- LOOPS INDEX --------')

console.log('%c---- with let ----', 'color: limegreen')
let i = 0;

for (let i = 0; i < 5; i++)
{
    console.log('inner i is equal to: ', i)
}

console.log(`%couter i is equal to: ${i}`, 'color: yellow')

console.log('%c---- with var ----', 'color: limegreen')

var j = 0;

for (var j = 5; j < 10; j++)
{
    console.log('inner j is equal to: ', j)
}

console.log(`%couter j is equal to: ${j}`, 'color: yellow')

console.log('%c---- while example ----', 'color: limegreen')
let k = 0
while (k < 10)
{
    console.log('k equals: ', k)
    ++k
}

/**
* * GREEN TEXT
* ! DO NOT
* ? What's going on? 
* TODO: ADD WHILE LOOP
* @param first word is formatted to stand out (define param or something?)
*/
