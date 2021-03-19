let computerHand;
function computerPlay() {
    let decision = Math.random();
    if (decision <= 0.3333) {
        computerHand = 'Rock';
    } else if (decision > 0.3333 && decision <= 0.6666) {
        computerHand = 'Paper';
    } else {
        computerHand = 'Scissors';
    }
}

computerPlay();

let playerHand;
let win = false;
let lose = false;
function playRound() {
    while(playerHand !== 'rock' && playerHand !== 'paper' && playerHand !== 'scissors') {
        playerHand = prompt("Rock, Paper, or Scissors?").toLowerCase();
    }
    if (playerHand == 'rock' && computerHand == 'Scissors' || playerHand == 'paper' && computerHand == 'Rock' || playerHand == 'scissors' && computerHand == 'Paper') {
        win = true;
    } else if (playerHand == 'rock' && computerHand == 'Paper' || playerHand == 'paper' && computerHand == 'Scissors' || playerHand == 'scissors' && computerHand == 'Rock') {
        lose = true;
    }
}

let upperPH;


let playerScore = 0;
let computerScore = 0;
while(playerScore < 5 && computerScore < 5) {
    playRound();
    upperPH = playerHand[0].toUpperCase() + playerHand.substring(1);
    if (win == true) {
        playerScore++;
        console.log(upperPH + ' beats ' + computerHand + '. You win!');
        console.log('Player: ' + playerScore);
        console.log('Computer: ' + computerScore);
        console.log(' ');
    } else if (lose == true) {
        computerScore++;
        console.log(computerHand + ' beats ' + upperPH + '. You lose.');
        console.log('Player: ' + playerScore);
        console.log('Computer: ' + computerScore);
        console.log(' ');
    } else {
        console.log('Opponent chose ' + computerHand + '. Play again: ');
        console.log(' ');
    }
    if (playerScore == 5) {
        console.log('You\'ve won 5 rounds. You win the game!')
    } else if (computerScore == 5) {
        console.log('The computer won 5 rounds. You are a loser!')
    }
    playerHand = null;
    computerHand = null;
    win = false;
    lose = false;
    computerPlay();
}