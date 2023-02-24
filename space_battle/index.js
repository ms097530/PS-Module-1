class Ship
{
    constructor(hull, firepower, accuracy)
    {
        this.hull = hull
        this.firepower = firepower
        this.accuracy = accuracy
    }

    attack(enemyShip)
    {
        let randomNum = Math.random()
        if (randomNum <= this.accuracy)
        {
            enemyShip.hull -= this.firepower
            return true
        }
        return false
    }

    retreat()
    {
        this.hull = 0
        console.log('... ran away')
    }
}

const PLAYER_COLOR = 'color: limegreen;'
const NEUTRAL_COLOR = 'color: orange;'
const ENEMY_COLOR = 'color: #F44;'

const NUM_ENEMIES = 6
const ENEMY_VALUES = {
    hull: { min: 3, max: 6, round: true },
    firepower: { min: 2, max: 4, round: true },
    accuracy: { min: 0.6, max: 0.8, round: false }
}

// isGameOver = false
// isWin = false

let yourShip = new Ship(20, 5, 0.7)

const enemyShips = []

for (let i = 0; i < NUM_ENEMIES; ++i)
{
    enemyShips.push(generateShip(ENEMY_VALUES))
}

console.log(enemyShips)



for (let i = 0; i < enemyShips.length; ++i)
{
    while (yourShip.hull > 0 && enemyShips[i].hull > 0)
    {
        startShipBattle(yourShip, enemyShips[i])
    }

}
console.log('battle ended')
if (yourShip.hull > 0)
{
    console.log('YOU WIN!')
}
else
{
    console.log('You lose...')
}

function startShipBattle(shipOne, shipTwo)
{

    // shipOne goes first
    let command
    while (command !== '1' && command !== '2')
    {
        command = window.prompt(`Current HP: ${shipOne.hull}  Enemy HP: ${shipTwo.hull}\n1: Attack  2: Retreat`)
        console.log(command)
        // console.log(typeof command)
    }

    if (command === '1')
    {
        console.log('%cAttack the alien ship!', PLAYER_COLOR)
        let didHit = shipOne.attack(shipTwo)
        if (didHit)
        {
            console.log(`%cYou hit the mark! ${shipOne.firepower} damage!`, PLAYER_COLOR)
        }
        else
        {
            console.log(`%cMiss!`, NEUTRAL_COLOR)
        }
    }
    else
    {
        console.log('%cRetreat... Game over...', ENEMY_COLOR)
        return shipOne.retreat()
    }

    if (shipTwo.hull > 0)
    {
        console.log('%cEnemy attacks you!', ENEMY_COLOR)
        let didHit = shipTwo.attack(shipOne)
        if (didHit)
        {
            console.log(`%cEnemy hit you! ${shipTwo.firepower} damage!`, ENEMY_COLOR)
        }
        else
        {
            console.log('%cMiss!', NEUTRAL_COLOR)
        }
    }

    console.log(`Player HP: ${shipOne.hull}  Enemy HP: ${shipTwo.hull}`)
}


function generateShip(valuesObj)
{
    // valuesObj = {
    //     hull: { min: 3, max: 6, round: true },
    //     firepower: { min: 2, max: 4, round: true },
    //     accuracy: { min: 0.6, max: 0.8, round: false }
    // }
    // loop through any number of desired parameters and generate values
    let parameters = []
    for (let val of Object.values(valuesObj))
    {
        // console.log('val: ', val)
        let param
        if (val.round)
        {
            // * EQUATION
            // value between min and max = randomNum (from 0 to 1) * (max - min) + min
            // * Explanation
            // randomNum * (max - min) = number between 0 and (max - min ) -> 0 to difference in range of numbers
            // add min to bring make sure number is at least min
            // * DEMO
            // randomNum = 0.5
            // min = 3, max = 6
            // value = 0.5 * (6 - 3)
            // value = 1.5
            // value + min = 1.5 + 3 = 4.5
            // then use round to get an integer if desired
            // let rand = Math.random()
            // let difference = val.max - val.min
            // let valInRange = (rand * difference) + val.min
            // round if need be...
            param = Math.round(Math.random() * (val.max - val.min) + val.min)
        }
        else
        {
            param = Math.random() * (val.max - val.min) + val.min
        }
        parameters.push(param)
    }
    // console.log(parameters)

    // one-by-one with specific names - have to add new parameters here each time a new parameter is desired
    // let hull = Math.round(Math.random() * (valuesObj.hull.max - valuesObj.hull.min) + valuesObj.hull.min)
    // console.log(hull)
    // let firepower = Math.round(Math.random() * (valuesObj.firepower.max - valuesObj.firepower.min) + valuesObj.firepower.min)
    // console.log(firepower)
    // let accuracy = Math.random() * (valuesObj.accuracy.max - valuesObj.accuracy.min) + valuesObj.accuracy.min
    // console.log(accuracy)
    // let newShip = new Ship(hull, firepower, accuracy)
    // return newShip

    // produce new ship with generated parameters
    let newShip = new Ship(...parameters)
    // console.log(newShip)
    return newShip
}

// while (!isGameOver)
// {

// }