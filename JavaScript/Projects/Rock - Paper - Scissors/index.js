const choice = ["rock", "paper","scissor"];
const player = document.getElementById("player");
const computer  = document.getElementById("computer");
const resultt = document.getElementById("result");

function playgame(playerchoice){

    const computerchoice = choice[Math.floor(Math.random() * 3)];
    let result ="";

    if (playerchoice === computerchoice){
        result = "tie";
    }
    else{
        switch(playerchoice){
            case "rock":
                result = (computerchoice === "scissor") ? "you win" : "you lose";
                break;
               
            case "paper":
                result = (computerchoice === "rock") ? "you win" : "you lose";
                 break;
                
            case "scissor":
                 result = (computerchoice === "paper") ? "you win" : "you lose";
                break;    

        }
    }

    player.textContent = `Player : ${playerchoice}`;
    computer.textContent = `Player : ${computerchoice}`;
    resultt.textContent = result;

}

