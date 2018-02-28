/*eslint-env browser*/



function rockPaperScissor() {
    "use strict";
    var yesNo = "y", canContinue = true, playersChoice, compsChoice;

    do {
        do {
            playersChoice = window.prompt("Choose Rock, Paper, Or Scissors").toUpperCase();

            window.console.log("Player: " + playersChoice);
            if (playersChoice === "ROCK" || playersChoice === "PAPER" || playersChoice === "SCISSORS") {
                compsChoice = Math.floor(Math.random() * 3);
                window.console.log("Player: " + playersChoice);
                canContinue = false;
                window.console.log(canContinue);
            } else {
                canContinue = true;
                window.alert("You didn't enter rock, paper, or scissors. Please try again.");
            }
        } while (canContinue === true);
        window.console.log("Computer: " + compsChoice);
        if ((playersChoice === "ROCK" && compsChoice === 1) || (playersChoice === "SCISSORS" && compsChoice === 2) || (playersChoice === "PAPER" && compsChoice === 0)) {
            window.alert("You won and the computer lost!");
            yesNo = window.prompt("Would you like to play again?");
        } else if ((compsChoice === 0 && playersChoice === "SCISSORS") || (compsChoice === 1 && playersChoice) === "PAPER" || (compsChoice === 2 && playersChoice === "ROCK")) {
            window.alert("You lose and the computer wins!");
            yesNo = window.prompt("Would you like to play again?");
        } else {
            window.alert("It's a tie.");
            yesNo = window.prompt("Would you like to play again? (y/n)");
        }

        

    } while (yesNo === "y");

}

rockPaperScissor();
