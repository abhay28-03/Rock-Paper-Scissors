const score = {
    wins: 0,
    losses: 0
};

function renderScore() {
    document.querySelector('.user').innerHTML = `User: ${score.wins}, Computer: ${score.losses}`;
}

renderScore();

const options = document.querySelectorAll(".option");

const msg = document.querySelector("#msg");

options.forEach((option) => {
    console.log(option);
    option.addEventListener("click", () => {
        const choiceOfUser = option.getAttribute("id");
        console.log("option was chosen", choiceOfUser);
        khelkhelo(choiceOfUser);
    })
})

const showVijeta = (userWin, choiceOfUser, compChoice) => {
    if(userWin) {
        console.log("User wins.");
        msg.innerHTML = `User wins.User's ${choiceOfUser} beats ${compChoice}`;
        score.wins++;
        renderScore();
    } else {
        console.log("User loses.");
        msg.innerHTML = `User loses.${compChoice} beats ${choiceOfUser}`;
        score.losses++;
        renderScore();
    }
}

const khelkhelo = (choiceOfUser) => {
    console.log("user choice= ", choiceOfUser);

    const compChoice = genCompChoice();
    console.log("Computer choice= ", compChoice)

    if(choiceOfUser === compChoice) {
        //draw game
        draw();
    }
    else {
        let userWin = true;
        if(choiceOfUser === "rock") {
            userWin = compChoice ==="paper"? false : true;  //paper,scissors
        }else if(choiceOfUser === "paper") {
            userWin = compChoice === "scissors"? false : true; //rock,scissors
        }else {
            userWin = compChoice === "rock"? false: true; //rock,paper
        }
        showVijeta(userWin, choiceOfUser, compChoice);
    }
}

const genCompChoice = () => {
    const options = ["rock", "paper", "scissors"];
    const randomId = Math.floor(Math.random()*3);
    return options[randomId];
}

const draw = () => {
    console.log("Game was draw");
    msg.innerText = "Game was draw.Play again.";
}
