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