//Computer choice
function getComputerChoice(){
//random choice generator
    let rng = Math.floor(Math.random()*3);
    let choice = ""
    console.log(rng);
//return choice
    if (rng = 0) {
        choice =  "rock";
    }
    else if (rng=1){
        choice ="paper";
    }
    else if (rng=2){
        choice = "scissors";
    }
    console.log(choice);
    return choice;
}

//get player choice
function getPlayerChoice(){
//get player input
    let choice = prompt("Rock, Paper or Scissors?");
//return player input
    return choice.toLowerCase();
}

//game function
function rps_game(user, computer){
//compare if else statement
    console.log(computer);
    while(user ==="rock"){
        if(computer === "rock"){
            console.log("It's a tie.")
            return "It's a tie.";
        }
        else if (computer === "paper"){
            console.log("You Lose! Paper beats rock")
            return "You Lose! Paper beats rock";
        }
        else{
            console.log("You Win! Rock beats scissors")
            return "You Win! Rock beats scissors";
        }
    }
    while(user === "paper"){
        if(computer === "rock"){
            return "You Win! Paper beats rock."
        }
        else if(computer === "paper"){
            return "It's a tie.";
        }
        else{
            return "You Lose! Scissors beat paper.";
        }
    }
    while(user === "scissors"){
        if (computer === "rock"){
            return "You Lose. Rock beats scissors.";
        }
        else if (computer === "paper"){
            return "You Win! Scissors beats paper";
        }
        else{
            return "It's a tie.";
        }
    }
}

rps_game(user = getPlayerChoice(), computer = getComputerChoice());