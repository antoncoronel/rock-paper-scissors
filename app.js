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

//game function
function rps_round(user, computer){
    const div = document.querySelector('#result');
//compare if else statement
    console.log('running');
    console.log(user);
    while(user ==="rock"){
        if(computer === "rock"){
            div.textContent = "It's a tie.";
            return "tie";
        }
        else if (computer === "paper"){
            div.textContent = "You Lose! Paper beats rock.";
            return "lose", computerScore++;
        }
        else{
            div.textContent = "You Win! Rock beats scissors.";
            return "win", userScore++;
        }
    }
    while(user === "paper"){
        if(computer === "rock"){
            div.textContent = "You Win! Paper beats rock.";
            return "win.", userScore++;
        }
        else if(computer === "paper"){
            div.textContent = "It's a tie.";
            return "tie";
        }
        else{
            div.textContent = "You Lose! Scissors beats paper.";
            return "lose", computerScore++;
        }
    }
    while(user === "scissors"){
        if (computer === "rock"){
            div.textContent = "You Lose! Rock beats scissors.";
            return "lose", computerScore++;
        }
        else if (computer === "paper"){
            div.textContent = "You Win! Scissors beats paper.";
            return "win", userScore++;
        }
        else{
            div.textContent = "It's a tie.";
            return "tie";
        }
    }
}

let computerScore = 0;
let userScore = 0;
let btn = document.querySelectorAll('button');

btn.forEach((e)=> {
    e.addEventListener('click', (e) => {
        let div = document.querySelector('#score');
        rps_round(e.target.textContent.toLowerCase(), getComputerChoice());
        div.textContent = 'User: ' + userScore + ' Computer: ' + computerScore;
        if(userScore < 5 || computerScore < 5){
            let div = document.querySelector('#result');
            if (userScore == 5){
                div.textContent = "You win the game!";
                userScore = 0;
                computerScore = 0; 
            }
            else if (computerScore == 5){
                div.textContent = "You lose the game!";
                userScore = 0;
                computerScore = 0;
            }
        }
    }); 
});