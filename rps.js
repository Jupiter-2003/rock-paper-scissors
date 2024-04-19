
let playerScore=0, compScore=0, ctr=0;
const buttons = document.querySelectorAll("button");
const playSc = document.querySelector("#comp");
const compSc = document.querySelector("#user");

while(playerScore<5 || compScore<5){
    buttons.forEach((button) => {
        button.addEventListener("click",() => {
            ctr = singleRound(getComputerChoice(), button.id);
        });
    });
    if(ctr==1){
        playerScore++;
    }
    else if(ctr==-1){
        compScore++;
    }
    playSc.textContent = playerScore;
    compSc.textContent = compScore;
}
if(playerScore==5){
    playSc.textContent = "WON the Game!";
    compSc.textContent = "LOST!";
}
else{
    compSc.textContent = "WON the Game!";
    playSc.textContent = "LOST!";
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
        if(playerSelection=='R'){
            return 0;
        }
        else if(playerSelection=='P'){
            return 1;
        }
        else{
            return -1;
        }
    }
    else if(computerSelection=='P'){
        if(playerSelection=='P'){
            return 0;
        }
        else if(playerSelection=='S'){
            return 1;
        }
        else{
            return -1;
        }
    }
    else if(computerSelection=='S'){
        if(playerSelection=='S'){
            return 0;
        }
        else if(playerSelection=='R'){
            return 1;
        }
        else{
            return -1;
        }
    }

}