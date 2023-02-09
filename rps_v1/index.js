const choices = ['rock', 'paper', 'scissors']

const randomNum = Math.floor(Math.random() * choices.length)
const computerChoice = choices[randomNum]

// console.log(computerChoice)

let userChoice = prompt("Rock, paper, or scissors?")
let parsedUserChoice = userChoice.toLowerCase().trim()
while (parsedUserChoice !== 'rock' &&
    parsedUserChoice !== 'paper' &&
    parsedUserChoice !== 'scissors')
{
    userChoice = prompt('I didn\'t get that. Rock, paper, or scissors?')
    parsedUserChoice = userChoice.toLowerCase().trim()
}

// console.log(parsedUserChoice)

let result = getRPSWinner(parsedUserChoice, computerChoice)
console.log(`You chose: ${parsedUserChoice}. Your opponent chose: ${computerChoice}.`)

// console.log(result)

switch (result)
{
    case -1: console.log('%cYou lose...', 'color: rgb(255, 40, 40); font-size: 1.25rem;'); break;
    case 0: console.log('%cIt\'s a tie!', 'font-size: 1.25rem;'); break;
    case 1: console.log('%cYou win!', 'color: limegreen; font-size: 2rem;'); break;
}

function getRPSWinner(p1_Choice, pc_Choice)
{
    // player wins
    if (p1_Choice === 'rock' && pc_Choice === 'scissors' ||
        p1_Choice === 'paper' && pc_Choice === 'rock' ||
        p1_Choice === 'scissors' && pc_Choice === 'paper')
    {
        return 1
    }
    // pc wins
    else if (pc_Choice === 'rock' && p1_Choice === 'scissors' ||
        pc_Choice === 'paper' && p1_Choice === 'rock' ||
        pc_Choice === 'scissors' && p1_Choice === 'paper')
    {
        return -1
    }
    // tie
    else
    {
        return 0
    }
}















/* const options = ["rock", "paper", "scissors"];
const select = () =>
{
    return options[Math.floor(Math.random() * options.length)];
};
const play = (a, b) =>
{
    if (a === b)
    {
        console.log("It's a draw! Play again");
    } else if (
        (a === "rock" && b === "paper") ||
        (a === "scissors" && b === "rock") ||
        (a === "paper" && b === "scissors")
    )
    {
        console.log("The Computer won!");
    } else
    {
        console.log("The Player won!");
    }
};
const playerSelection = select();
const computerSelection = select();
// console.log(`Player : ${playerSelection}`);
// console.log(`Computer : ${computerSelection}`);
play(playerSelection, computerSelection); */