class Ship
{
    constructor(hull, firepower, accuracy)
    {
        this.hull = hull
        this.firepower = firepower
        this.accuracy = accuracy
    }

    attack()
    {

    }

    retreat()
    {

    }
}

isGameOver = false
isWin = false

let yourShip = new Ship(20, 5, 0.7)

const ENEMY_VALUES = {
    hull: { min: 3, max: 6, round: true },
    firepower: { min: 2, max: 4, round: true },
    accuracy: { min: 0.6, max: 0.8, round: false }
}
console.log(ENEMY_VALUES)
let enemyHull = Math.random()
let enemyShip = new Ship()

generateShip(ENEMY_VALUES)
function generateShip(valuesObj)
{
    let parameters = []
    for (let [key, val] of Object.entries(valuesObj))
    {
        console.log('key: ', key)
        console.log('val: ', val)
    }
    let hull = Math.round(Math.random() * (valuesObj.hull.max - valuesObj.hull.min) + valuesObj.hull.min)
    console.log(hull)
    let firepower = Math.round(Math.random() * (valuesObj.firepower.max - valuesObj.firepower.min) + valuesObj.firepower.min)
    console.log(firepower)
    let accuracy = Math.random() * (valuesObj.accuracy.max - valuesObj.accuracy.min) + valuesObj.accuracy.min
    console.log(accuracy)
    // let newShip = new Ship(hull, firepower, accuracy)
    // return newShip
}

// while (!isGameOver)
// {

// }