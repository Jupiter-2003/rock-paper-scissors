playGame();

function getComputerChoice(){
    switch(Math.floor(Math.random()*3)+1)
    {
        case 1: return "R";
        break;
        case 2: return "S";
        break;
        case 3: return "P";
    }
}

function singleRound(computerSelection){
    let playerSelectionWord = prompt("Enter rock/R, paper/P or scissors/S. Any other selection will result in loss");
    let playerSelection = (playerSelectionWord.toUpperCase()).charAt(0);
    if(computerSelection=='R'){
        if(playerSelection=='R'){
            alert("Draw");
            return 0;
        }
        else if(playerSelection=='P'){
            alert("You win this round!");
            return 1;
        }
        else{
            alert("You lose this round!");
            return -1;
        }
    }
    else if(computerSelection=='P'){
        if(playerSelection=='P'){
            alert("Draw");
            return 0;
        }
        else if(playerSelection=='S'){
            alert("You win this round!");
            return 1;
        }
        else{
            alert("You lose this round!");
            return -1;
        }
    }
    else if(computerSelection=='S'){
        if(playerSelection=='S'){
            alert("Draw");
            return 0;
        }
        else if(playerSelection=='R'){
            alert("You win this round!");
            return 1;
        }
        else{
            alert("You lose this round!");
            return -1;
        }
    }

}

function playGame()
{
    
}
