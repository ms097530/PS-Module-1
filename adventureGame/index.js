// declare a new class
class Player
{
    legs = 2
    arms = 2
    eyes = 2
    #hatIcon
    health = 500
    damage = 100

    constructor(name, age, hair = 'bald', hatIcon = '')
    {
        this.name = name
        this.age = age
        this.hair = hair
        this.#hatIcon = hatIcon
    }

    // instance method
    greet()
    {
        console.log('Hello!')
    }

    // JS does not support function overloading
    // greet(otherCharacter)
    // {
    //     console.log(`Hello ${otherCharacter}`)
    // }

    greetOther(otherCharacter = "friend")
    {
        console.log(`Hello ${otherCharacter}`)
    }

    getHatIcon()
    {
        return this.#hatIcon
    }

    attack()
    {
        console.log(`${this.name} is attacking`)
    }

    takeDamage(damage)
    {
        this.health -= damage
        console.log(`${this.name} now has a health level of ${this.health}`)
    }
}

console.log('-------- Base class stuff --------')

const mario = new Player('Mario', 30, 'black', 'M')
const luigi = new Player('Luigi', 30, 'black', 'L')

console.log(typeof mario)
console.log(typeof luigi)

console.log(mario instanceof Player)
console.log(luigi instanceof Player)

mario.greet()
luigi.greet = () => { console.log('WAAAAH') }
luigi.greet()

luigi.greetOther('Mario')

console.log(mario.getHatIcon())

mario.takeDamage(100)

// child class
class Friend extends Player
{
    #skills

    constructor(name, age, hair = 'bald', hatIcon = '', ...skills)
    {
        super(name, age, hair, hatIcon)
        this.#skills = [...skills]
    }

    getSkills()
    {
        return this.#skills
    }

    fly()
    {
        console.log(`${this.name} is flying!`)
    }

    attack()
    {
        console.log('Fireball!!')
    }

    doubleAttack() 
    {
        // access parent's attack method
        super.attack()
        // use Friend's own attack method
        this.attack()
    }
}

console.log('%c-------- Child Class stuff --------', 'color: yellow;')

// pass two undefined values to make sure default values are applied when passed to constructor
let toad = new Friend('Toad', 100, undefined, undefined, 'sucking up', 'being smol')

toad.fly()

console.log('---- double attack ----')
toad.doubleAttack()

console.log(toad.getSkills())

console.dir(toad)

// properties assigned like this do not show in Node console output, they do show in Firefox though
// Node also doesn't show private properties by default
toad.hat = 'mushroom'