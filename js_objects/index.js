// reference types like arrays and objects copy by reference by default
// slice, here, makes sure the copy is unique

const colors = ['red', 'white', 'blue']

const colorsCopy = colors.slice()

colorsCopy.push('purple')

console.log('colors: ', colors)
console.log('copy: ', colorsCopy)


// Objects

const car = {
    color: 'green',
    make: 'Cavalier',
    hp: 4000,
    year: 1995
}

console.log(car)

const pet = {
    name: 'Roxxie',
    colors: ['black', 'gold'],
    type: {
        species: 'dog',
        breed: 'lab mix'
    },
    age: 13,
    personalityTraits: ['timid', 'fast eater', 'likes walks'],
    hobbies: ['pretending to not hear things']
}

console.log(pet)

// Week 3 / day 3

const adventurer = {
    name: 'Kiryu',
    title: 'Dragon of Dojima',
    hitPoints: 999,
    styles: ['brawler', 'beast', 'rush', 'dragon'],
    weapons: ['fists', 'marlin cannon', 'taser', 'sakura storm', 'kali sticks'],
    majima: {
        foundKiryu: true,
        versions: ['cop', 'construction worker', 'breakdancer', 'thug']
    }
}

for (let prop in adventurer)
{
    console.log(prop)
}

for (const [key, val] of Object.entries(adventurer))
{
    console.log(`key: ${key}   val: ${val}`)
}

adventurer.sayHi = () => { console.log('Yo.') }
adventurer.sayHi()

adventurer.companion = 'Rikiya'
console.log('Kiryu\'s buddy: ' + adventurer.companion)
// ... dies
delete adventurer.companion
console.log(adventurer.companion)

// Array of objects

const anime = [
    { title: 'Mob Psycho', numSeasons: 3 },
    { title: 'Clannad', numSeasons: 2 },
    { title: 'Gurren Lagann', numSeasons: 1 },
    { title: 'Attack on Titan', numSeasons: 5 },
    { title: 'Bocchi the Rock', numSeasons: 1 },
    { title: 'Spy x Family', numSeasons: 2 }
]


const player = {
    name: 'Dart',
    stats: {
        hp: 879,
        atk: 142,
        mp: 40
    },
    catchphrase: 'Lavitz is my bro',
    sayCatchphrase: function ()
    {
        console.log(`${this.name}: ${this.catchphrase}`)
    }
}

player.sayCatchphrase()