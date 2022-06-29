const listofChoices = ['rock','paper','scissors'];

const choices = document.querySelectorAll('.p-btns');

let displayOutput = document.querySelector('.player-output');
let displayCPUOutput = document.querySelector('.computer-output');
let displayPlayerScoreInfo = document.querySelector('.player-score-information');
let displayComputerScoreInfo = document.querySelector('.computer-score-information');

let scoreboard = document.querySelector('.scoreboard-container');
let winOrLose = document.querySelector('.wlt-text');
let playerTotalScore = document.querySelector('.player-overall-score');
let computerTotalScore = document.querySelector('.computer-overall-score');

let playAgainButton = document.querySelector('.play-again-btn');

let playerScore = 0;
let computerScore = 0;

choices.forEach(choice => choice.addEventListener('click', play));
function getComputerChoice(){
    let result = "";
    result = listofChoices[Math.floor(Math.random()*listofChoices.length)];
    return result;
}

function play(e){
    const playerChoice = e.target.id; 
    displayPlayerOutput(playerChoice);
    const computerChoice = getComputerChoice(); 
    displayComputerOutput(computerChoice);
    let decision = playRound(playerChoice,computerChoice);
    showWinner(decision);
}

function showWinner(winner){
    if(winner === "player"){
        playerScore++;
        winOrLose.textContent = 'You Win';
        playerTotalScore.textContent = playerScore;
    }
    else if(winner === "computer"){
        computerScore++;
        winOrLose.textContent = 'You Lose';
        computerTotalScore.textContent = computerScore;
    }
    else if(winner === "tie"){
        winOrLose.textContent = 'Draw';
    }
}

function displayPlayerOutput(player){
    if(player == listofChoices[0]){
        displayOutput.textContent = "🤜";
    }
    else if(player == listofChoices[1]){ 
        displayOutput.textContent = "🖐️";
    }
    else if(player == listofChoices[2]){
        displayOutput.textContent = "✌";
    }
}
function displayComputerOutput(computer){
    if(computer == listofChoices[0]){
        displayCPUOutput.textContent = "🤛";
    }
    else if(computer == listofChoices[1]){ 
        displayCPUOutput.textContent = "🖐️";
    }
    else if(computer == listofChoices[2]){
        displayCPUOutput.textContent = "✌";
    }
}
function playRound(player, computer){
    let result = "";
    if(player == "rock"){
        if (computer == "rock"){
            result = "tie";
        } 
        else if(computer == "paper"){
            result = "computer";
        }
        else if(computer == "scissors"){
            result = "player";
        }
    }
    if(player == "paper"){
        if (computer == "rock"){
            result = "player";
        } 
        else if(computer == "paper"){
            result = "tie";
        }
        else if(computer == "scissors"){
            result = "computer";
        }
    }
    if(player == "scissors"){
        if (computer == "rock"){
            result = "computer";
        } 
        else if(computer == "paper"){
            result = "player";
        }
        else if(computer == "scissors"){
            result = "tie"
        }
    }
    return result;
}

playAgainButton.addEventListener('click', restartButton);

function restartButton(e){
    playerScore = 0;
    computerScore = 0;
    playerTotalScore.textContent = '0';
    computerTotalScore.textContent = '0';
    winOrLose.textContent = '';
    displayOutput.textContent = '???';
    displayCPUOutput.textContent = '???';

}

