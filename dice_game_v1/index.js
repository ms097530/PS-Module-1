// Create a function (rollDice)
// Roll Two "dice" one for the player and one for the computer
// Use one variables for the (player) and one for the (computer)
// (use a random number from 1-6 to represent a dice)

function rollDice(p1_Points = 0, computer_Points = 0, turnNumber = 1)
{
    if (p1_Points >= 5)
    {
        console.log('YOU WIN')
        return
    }
    if (computer_Points >= 5)
    {
        console.log('You lose...')
        return
    }

    let playerRoll = Math.ceil(Math.random() * 6)
    let computerRoll = Math.ceil(Math.random() * 6)

    let isTie = playerRoll === computerRoll
    let isPlayerWin = playerRoll > computerRoll

    console.log(`%c------ TURN ${turnNumber} ------`, 'color: yellow;')
    console.log(`You rolled ${playerRoll}`)
    console.log(`Your opponent rolled ${computerRoll}`)




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
    // if (playerRoll > computerRoll)
    // {
    //     return rollDice(p1_Points + 1, computer_Points, turnNumber + 1)
    // }
    // else if (computerRoll > playerRoll)
    // {
    //     return rollDice(p1_Points, computer_Points + 1, turnNumber + 1)
    // }
    // else
    // {
    //     return rollDice(p1_Points, computer_Points, turnNumber + 1)
    // }
}

rollDice()