let rock1 = document.getElementById("rock1");
let paper1 = document.getElementById("paper1");
let scissors1 = document.getElementById("scissors1");
let rock2 = document.getElementById("rock2");
let paper2 = document.getElementById("paper2");
let scissors2 = document.getElementById("scissors2");
let choosed1 = document.getElementById("selected1");
let choosed2 = document.getElementById("selected2");
let winner = document.getElementById("winner");

rock1.onclick = function() {
    choosed1.textContent = `You have choosed ROCK!`;
}

paper1.onclick = function() {
    choosed1.textContent = `You have choosed PAPER!`;
}

scissors1.onclick = function() {
    choosed1.textContent = `You have choosed SCISSORS!`;
}

rock2.onclick = function() {
    choosed2.textContent = `You have choosed ROCK!`;
    compareChoices();
}

scissors2.onclick = function() {
    choosed2.textContent = `You have choosed SCISSORS!`;
    compareChoices();
}

paper2.onclick = function() {
    choosed2.textContent = `You have choosed PAPER!`;
    compareChoices();
}

function compareChoices() {
    let choice1 = choosed1.textContent;
    let choice2 = choosed2.textContent;

    if (choice1 === choice2) {
        winner.textContent = `IT'S A TIE`;
    } else if (
        (choice1 === "You have choosed ROCK!" && choice2 === "You have choosed SCISSORS!") ||
        (choice1 === "You have choosed SCISSORS!" && choice2 === "You have choosed PAPER!") ||
        (choice1 === "You have choosed PAPER!" && choice2 === "You have choosed ROCK!")
    ) {
        winner.textContent = `PLAYER1 WINS`;
    } else {
        winner.textContent = `PLAYER2 WINS`;
    }
}





