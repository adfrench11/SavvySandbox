var roundCount = 1;
var outputTarget;
var outputHTML;
var userScore = 0;
var computerScore = 0;
var gameOutcome = "";
var userInput;
var userChoice;
var promptMsg = "Choose Rock, Paper, or Scissors by typing 'R', 'P', or 'S'";


var checkUserInput = function() {
  if (!userInput) {
    userInput = prompt("Let's try this again! " + promptMsg);
    checkUserInput();
  }
}

var getUserInput = function(){
  userInput = prompt(promptMsg);
  checkUserInput();
}

var getUserChoice = function(){
  userChoice = userInput.toLowerCase();
  if (userChoice !== "r" && userChoice !== "p" && userChoice !== "s"){
    alert("Whoops, that didn't work. Here we go again!");
    getUserInput();
    getUserChoice();
  }
}

var expandUserChoice = function(){
  if (userChoice === "r"){
    userChoice = "Rock";
  }
  else if (userChoice === "p"){
    userChoice = "Paper";
  }
  else {
    userChoice = "Scissors";
  }
}

var playRound = function(){

  getUserInput();

  getUserChoice();

  expandUserChoice();

  var compRand = Math.random();
  var computerChoice = "Rock";
  if (compRand >= 0.67) {
    computerChoice = "Scissors";
  }
  else if (compRand > 0.33){
    computerChoice = "Paper";
  }

  outputHTML = "";
  outputHTML += "<th>Round " + roundCount + "</th>";
  console.log("Your choice: " + userChoice);
  outputHTML += "<td>" + userChoice + "</td>";
  console.log("The computer's choice:  " + computerChoice);
  outputHTML += "<td>" + computerChoice + "</td>";


  var userWins = "You win!";
  var computerWins = "The computer wins!";
  var tie = "It's a tie!";
  var outcome;

  if (userChoice !== computerChoice) {
    if (userChoice === "Rock") {
      if (computerChoice === "Paper") {
        outcome = computerWins;
        computerScore++;
        alert(computerWins);
        console.log(computerWins);
      }
      else {
        outcome = userWins;
        userScore++;
        alert(userWins);
        console.log(userWins);
      }
    }
    else if (userChoice === "Paper") {
      if (computerChoice === "Rock") {
        outcome = userWins;
        userScore++;
        alert(userWins);
        console.log(userWins);
      }
      else {
        outcome = computerWins;
        computerScore++;
        alert(computerWins);
        console.log(computerWins);
      }
    }
    else if (userChoice === "Scissors") {
      if (computerChoice === "Rock") {
        outcome = computerWins;
        computerScore++;
        alert(computerWins);
        console.log(computerWins);
      }
      else {
        outcome = userWins;
        userScore++;
        alert(userWins);
        console.log(userWins);
      }
    }
  }
  else {
    outcome = tie;
    userScore++;
    computerScore++;
    alert(tie);
    console.log(tie);
  }

  outputHTML += "<td>" + userScore + "</td><td>" + computerScore + "</td>";
}

// console.log("Round " + roundCount + ": " + outcome);
while (roundCount <= 5) {
  var roundClass = ".round-" + roundCount.toString();
  outputTarget = document.querySelector(roundClass);
  playRound();
  outputTarget.innerHTML = outputHTML;
  roundCount++;
}

if (userScore > computerScore){
  gameOutcome = "YOU WON THE GAME!";
}
else if (userScore < computerScore){
  gameOutcome = "YOU LOST THE GAME!";
}
else {
  gameOutcome = "TIE GAME!";
}
console.log("gameOutcome: " + gameOutcome);

outputTarget = document.querySelector(".winner");
outputHTML = gameOutcome;
outputTarget.innerHTML = outputHTML;
