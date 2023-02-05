const hands = ["rock", "paper", "scissors"]

function game(playerChoice, computerChoice){
        if(playerChoice === computerChoice){
            return "its a tie"
        }
        if(playerChoice === "rock"){
            if(computerChoice === "paper"){
                return "computer wins"   
            } else {
                return "player wins"
            }
        }
        if(playerChoice === "paper"){
            if(computerChoice === "scissors"){
                return "computer wins"   
            } else {
                return "player wins"
            }
        }
        if(playerChoice === "scissors"){
            if(computerChoice === "rock"){
                return "computer wins"   
            } else {
                return "player wins"
            }
        }
     }



function startGame(){
    let playerChoice = prompt('rock, paper, scissors');
    let computerChoice = hands[Math.floor(Math.random) * hands.length]
    console.log(game(playerChoice, computerChoice));

}
startGame();