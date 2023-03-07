function getComputerChoice(){
    choices = ['rock', 'paper', 'scissors'];
    return choices[Math.floor(Math.random() * 3)];
}

function playGame(playerSelection, computerSelection){
    if(playerSelection === computerSelection){
        return 'Tie';
    }
    else if(playerSelection.toLowerCase()==='rock'){
        if(computerSelection.toLowerCase === 'paper'){
            return 'You Lose! Paper beats Rock';
        }
        else{
            return 'You Win! Rock beats Scissors';
        }
    }
    else if(playerSelection.toLowerCase === 'paper'){
        if(computerSelection.toLowerCase === 'scissors'){
            return 'You Lose! Scissors beats Paper';
        }
        else{
            return 'You Win! Paper beats Rock';
        }
    }
    else if(playerSelection.toLowerCase === 'scissors'){
        if(computerSelection.toLowerCase === 'rock'){
            return 'You Lose! Rock beats Scissors';
        }
        else{
            return 'You Win! Scissors beats Paper';
        }
    }
}

function game(){
    for(let i = 0; i < 5; i++){
        var playerSelection = prompt('Enter your choice: ');
        var computerSelection = getComputerChoice();
        console.log(playGame(playerSelection, computerSelection));
    }
}

game();