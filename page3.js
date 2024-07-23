const rock = document.getElementById("rock");
const paper = document.getElementById("paper");
const scissors = document.getElementById("scissors");
const palyerchoice = document.getElementById("palyerchoice");
const computerchoice = document.getElementById("computerchoice");
const result = document.getElementById("result");
let player;

const choices = ["ROCK" , "PAPER" , "SCISSORS"];
const computer = choices[Math.floor(Math.random()*3)];
    computerchoice.textContent =  computer;

rock.onclick = function(){
    palyerchoice.textContent = `ROCK`;
    result.textContent = (computer === "PAPER") ? `YOU LOSE` : (computer=== "ROCK") ? `IT'S A TIE!` : `YOU WIN`;
}
paper.onclick = function(){
    palyerchoice.textContent = `PAPER`;
    result.textContent = (computer === "SCISSORS") ? `YOU LOSE` : (computer=== "PAPER") ? `IT'S A TIE!` : `YOU WIN`;
}
scissors.onclick = function(){
    palyerchoice.textContent = `SCISSORS`;
    result.textContent = (computer === "ROCK") ? `YOU LOSE` : (computer=== "SCISSORS") ? `IT'S A TIE!` : `YOU WIN`;
}





