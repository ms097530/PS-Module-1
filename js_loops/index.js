console.log('-------- LOOPS INDEX --------')

console.log('---- with let ----')
let i = 0;

for (let i = 0; i < 5; i++)
{
    console.log('inner i is equal to: ', i)
}

console.log(`%couter i is equal to: ${i}`, 'color: yellow')

console.log('---- with var ----')

var j = 0;

for (var j = 5; j < 10; j++)
{
    console.log('inner j is equal to: ', j)
}

console.log(`%couter j is equal to: ${j}`, 'color: yellow')