function getComputerChoice(){
    let random = Math.floor(Math.random() * 3);
    switch(random){
        case 0:
            return('paper');
            break;

        case 1:
            return('rock');
            break;

        case 2:
            return('scissors');
            break;    
    }
}

function getPlayerChoice() {
    let playerChoise = prompt("Escribe con que quieres jugar (paper, rock or scissors): ",'scissors').toLowerCase();
    return playerChoise;
}

function PlayRound() {
    let playerSelection = getPlayerChoice();
    let computerSelection = getComputerChoice();

    console.log("Jugador: "+playerSelection, "maquina: "+computerSelection);

    if(playerSelection === 'rock'){
        if(computerSelection === 'rock'){
            return 'empate';
        }else if(computerSelection === 'paper'){
            return 'computer';
        } else {
            return 'player';
        }
    }else if (playerSelection === 'paper'){
        if(computerSelection === 'paper'){
            return 'empate';
        } else if (computerSelection === 'scissors'){
            return 'computer';
        } else {
            return 'player';
        }
    }else {
        if(computerSelection === 'scissors'){
            return 'empate';
        }else if (computerSelection === 'rock'){
            return 'computer';
        }else {
            return 'player';
        }
    }
}

function game(){
    for(let i = 0; i < 5 ; i++){
        
    }
}