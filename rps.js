//document.addEventListener("DOMContentLoaded", (event)=>{
let playerScore=0, compScore=0, ctr=0, rounds=0;
const buttons = document.querySelectorAll("button");

buttons.forEach((button) => {
    button.addEventListener('click',()=> {
        playGame(button.id);
    });
});

function playGame(playerChoice){
    ctr = singleRound(getComputerChoice(), playerChoice)
    rounds++;
    document.querySelector("#rounds").textContent = rounds.toString();
    if(ctr==1){
        playerScore++;
    }
    else if(ctr==-1){
        compScore++;
    }
    document.querySelector("#user").textContent = playerScore.toString();
    document.querySelector("#comp").textContent = compScore.toString();

    if(playerScore==5){
        document.querySelector("#result").textContent = "You WON the Game!";
        disableButtons();
    }
    else if(compScore==5){
        document.querySelector("#result").textContent = "You LOST! Better Luck next Time.";
        disableButtons();
    }
}

function disableButtons() {
    buttons.forEach(elem => {
        elem.disabled = true
    })
}

function getComputerChoice(){
    switch(Math.floor(Math.random()*3)+1)
    {
        case 1: return "R";
        case 2: return "S";
        case 3: return "P";
    }
}

function singleRound(computerSelection, playerSelection){
    if(computerSelection=='R'){
        if(playerSelection=='P'){
            document.querySelector("#result").textContent = "Player wins the round."
            return 1;
        }
        else if(playerSelection=='S'){
            document.querySelector("#result").textContent = "Computer wins the round."
            return -1;
        }
        else {
            document.querySelector("#result").textContent = "Tie."
            return 0;
        }
    }
    else if(computerSelection=='P'){
        if(playerSelection=='S'){
            document.querySelector("#result").textContent = "Player wins the round."
            return 1;
        }
        else if(playerSelection=='R'){
            document.querySelector("#result").textContent = "Computer wins the round."
            return -1;
        }
        else {
            document.querySelector("#result").textContent = "Tie."
            return 0;
        }
    }
    else if(computerSelection=='S'){
        if(playerSelection=='R'){
            document.querySelector("#result").textContent = "Player wins the round."
            return 1;
        }
        else if(playerSelection=='P'){
            document.querySelector("#result").textContent = "Computer wins the round."
            return -1;
        }
        else {
            document.querySelector("#result").textContent = "Tie."
            return 0;
        }
    }
    return 0;
}
//});