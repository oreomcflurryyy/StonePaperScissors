let userScore = 0;
let compScore = 0;

const choices = document.querySelectorAll(".choice");
const msg = document.querySelector(".text");

const userPoint = document.querySelector("#you-score");
const compPoint = document.querySelector("#cs-score");

const genCompChoice = () => {
    const options = ["rock", "paper", "scissors"];
    return options[Math.floor(Math.random() * options.length)];
}

const drawGame = () => {
    msg.innerText = "Game was Draw. Play again.";
    msg.style.backgroundColor = "#081b31";
}

const winGame = (userWin, userChoice, compChoice) => {
    if (userWin){
        userScore++;
        userPoint.innerText = userScore;
        msg.innerText = `You win! ${userChoice} beats ${compChoice}`;
        msg.style.backgroundColor = "green";
    }
    else {
        compScore++;
        compPoint.innerText = compScore;
        msg.innerText = `You lose. ${compChoice} beats ${userChoice}`;
        msg.style.backgroundColor = "red";
    }
}


const playGame = (userChoice) => {
    const compChoice = genCompChoice();
    if (compChoice === userChoice){
        console.log("draw");
        drawGame();
    }
    else {
        let userWin = true;
        if (compChoice === "rock"){
            // paper, scissors
            userWin = userChoice === "paper"
        }
        else if (compChoice === "scissors"){
            // rock, paper
            userWin = userChoice === "rock"
        }
        else {
            // scissors, rock
            userWin = userChoice === "scissors"
        }
        console.log(`comp ${compChoice} user ${userChoice} ${userWin}`)
        winGame(userWin, userChoice, compChoice);
    }
}

choices.forEach((choice) => {
    choice.addEventListener("click", () => {
        const userChoice = choice.getAttribute("id");
        playGame(userChoice);
    })
})