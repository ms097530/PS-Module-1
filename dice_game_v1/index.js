// Create a function (rollDice)
// Roll Two "dice" one for the player and one for the computer
// Use one variables for the (player) and one for the (computer)
// (use a random number from 1-6 to represent a dice)

function rollDice(p1_Points = 0, computer_Points = 0, turnNumber = 1)
{
    // base conditions - winner is decided
    if (p1_Points >= 5)
    {
        console.log('%cYOU WIN!', 'color: limegreen; font-size: 2rem;')
        return
    }
    if (computer_Points >= 5)
    {
        console.log('%cYou lose...', 'color: rgb(255, 70, 30); font-size: 1.5rem;')
        return
    }

    // roll 6-sided dies
    let playerRoll = Math.ceil(Math.random() * 6)
    let computerRoll = Math.ceil(Math.random() * 6)
    // get round results
    let isTie = playerRoll === computerRoll
    let isPlayerWin = playerRoll > computerRoll

    console.log(`%c------ TURN ${turnNumber} ------`, 'color: yellow; font-size: 1.2rem;')
    console.log(`You rolled ${playerRoll}`)
    console.log(`Your opponent rolled ${computerRoll}`)

    // advance to next round
    if (isTie)
    {
        printScores(isTie, isPlayerWin)
        return rollDice(p1_Points, computer_Points, turnNumber + 1)
    }
    else if (isPlayerWin)
    {
        printScores(isTie, isPlayerWin)
        return rollDice(p1_Points + 1, computer_Points, turnNumber + 1)
    }
    else
    {
        printScores(isTie, isPlayerWin)
        return rollDice(p1_Points, computer_Points + 1, turnNumber + 1)
    }

    // helper function for printing round results
    function printScores(isTie, isPlayerWinner)
    {
        if (isTie)
        {
            console.log(`%cYour score: ${p1_Points}`, 'color: orange;')
            console.log(`%cComputer score: ${computer_Points}`, 'color: pink')
        }
        else if (isPlayerWinner)
        {
            console.log(`%cYour score: ${p1_Points + 1}`, 'color: orange;')
            console.log(`%cComputer score: ${computer_Points}`, 'color: pink')
        }
        else
        {
            console.log(`%cYour score: ${p1_Points}`, 'color: orange;')
            console.log(`%cComputer score: ${computer_Points + 1}`, 'color: pink')
        }
    }
}

rollDice()