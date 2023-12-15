//Computer choice
function getComputerChoice(){
//random choice generator
    let rng = Math.floor(Math.random()*3);
    let choice = "";
//return choice
    if (rng == 0) {
        choice =  "rock";
    }
    else if (rng==1){
        choice ="paper";
    }
    else if (rng==2){
        choice = "scissors";
    }
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
function rps_round(user, computer){
//compare if else statement
    console.log(user);
    while(user ==="rock"){
        if(computer === "rock"){
            console.log("It's a tie.")
            return "tie";
        }
        else if (computer === "paper"){
            console.log("You Lose! Paper beats rock")
            return "lose";
        }
        else{
            console.log("You Win! Rock beats scissors")
            return "win";
        }
    }
    while(user === "paper"){
        if(computer === "rock"){
            console.log("You Win! Paper beats rock");
            return "win."
        }
        else if(computer === "paper"){
            console.log("It's a tie.");
            return "tie";
        }
        else{
            console.log("You Lose! Scissors beat paper.");
            return "lose";
        }
    }
    while(user === "scissors"){
        if (computer === "rock"){
            console.log("You Lose. Rock beats scissors.");
            return "lose";
        }
        else if (computer === "paper"){
            console.log("You Win! Scissors beats paper");
            return "win";
        }
        else{
            console.log("It's a tie.");
            return "tie";
        }
    }
}


function game(){
    //Best of 5
    //Game 1
    //Check if round win
    //Update score
    //Check if game win
    //loop
    let win = 0;
    let comp_score = 0;
    let user_score = 0;

    while (user_score < 3 && comp_score < 3){        
        let result ="";
        result = rps_round(user=getPlayerChoice(), getComputerChoice());
        if (result === "win"){
            user_score++;
            win++;
            console.log(`The score is ${user_score} to ${comp_score}`);
        }
        else if (result === "lose"){
            comp_score++;
            win++;
            console.log(`The score is ${user_score} to ${comp_score}`);
        }
        else if (result === "tie"){
            console.log(`Tie, the score is ${user_score} to ${comp_score}`);
        }
    }
    while (user_score == 3 || comp_score == 3){
        if (user_score > comp_score){
            console.log(`Congratulation User, you won with a score of ${user_score} to ${comp_score}`);
            return
        }
        else if (comp_score > user_score){
            console.log(`Better luck next time. You lost ${comp_score} to ${user_score}`);
            return
        }
    }
}

game();