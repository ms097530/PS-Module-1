console.log('-------- SWITCH DEMO --------')

const color = prompt('What is your favorite color?').toLowerCase()

switch (color)
{
    case 'red': console.log('RED'); break;
    case 'blue': console.log('ew, BLUE'); break;
    case 'green': console.log('GREEN IS THE COOLEST'); break;
    default: console.log('UHH WHAT'); break;
}