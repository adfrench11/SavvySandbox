var playCount = 1;

while (playCount <= 5) {

  var userInput = prompt("Choose Rock, Paper, or Scissors by typing 'R', 'P', or 'S'");
  var userChoice = userInput.toUpperCase();

  var compRand = Math.random();
  var computerChoice = "R";
  if (compRand >= 0.67) {
    computerChoice = "S";
  }
  else if (compRand > 0.33){
    computerChoice = "P";
  }

  console.log("userChoice: " + userChoice);
  console.log("computerChoice: " + computerChoice);

  var userWins = "You win!";
  var computerWins = "The computer wins!";
  var tie = "It's a tie!";
  var outcome = ""

  if (userChoice !== computerChoice) {
    if (userChoice === "R") {
      if (computerChoice === "P") {
        alert(computerWins);
        console.log(computerWins);
      }
      else {
        alert(userWins);
        console.log(userWins);
      }
    }
    else if (userChoice === "P") {
      if (computerChoice === "R") {
        alert(userWins);
        console.log(userWins);
      }
      else {
        alert(computerWins);
        console.log(computerWins);
      }
    }
    else if (userChoice === "S") {
      if (computerChoice === "R") {
        alert(computerWins);
        console.log(computerWins);
      }
      else if (computerChoice === "P") {
        alert(userWins);
        console.log(userWins);
      }
    }
  }
  else {
    alert(tie);
    console.log(tie);
  }

// console.log("Round " + playCount + ": " + outcome);

playCount++;
}
