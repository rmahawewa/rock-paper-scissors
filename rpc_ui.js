const body = document.querySelector("body");
body.setAttribute("style", "display:flex; flex-direction:column; align-items: center; justify-content: center; font-family: Arial");
const result = document.querySelector("#results");
var player_marks = 0;
var computer_marks = 0;

// valu.addEventListener("click", (e) => {
//     console.log(e.target.textContent);
//     return e.target.textContent;
// });

body.addEventListener("click", handler, false);

function handler(e) {
    if (e.target.nodeName = 'button') {
        const valu = e.target.textContent;
        console.log(valu);
        removePreviousSeries();
        playTheRound(valu);
    }
}

function playTheRound(playerSelectin) {
    console.log("player: " + playerSelectin);
    const com_choice = getComputerChoice();
    const lbl = document.createElement("label");
    lbl.textContent = "Your choice: " + playerSelectin + "   -   Computers choice: " + com_choice;
    const winner = playRound(playerSelectin, com_choice);
    let msg = "";
    if (winner.localeCompare("You") === 0) {
        msg = "You win!";
        player_marks++;
    } else if (winner.localeCompare("Computer") === 0) {
        msg = "You lose! " + com_choice + " beats " + playerSelectin;
        computer_marks++;
    } else {
        msg = "Round tied";
    }
    const lb = document.createElement("br");
    const lb1 = document.createElement("br");
    const lbl2 = document.createElement("label");
    lbl2.textContent = msg;

    result.appendChild(lbl);
    result.appendChild(lb);
    result.appendChild(lbl2);
    result.appendChild(lb1);

    var lbl3 = document.createElement("label");
    var series_winner = "";

    if (player_marks === 5 || computer_marks === 5) {
        series_winner = (player_marks > computer_marks ? "You win the series!" : "Computer wins the series!");
        lbl3.textContent = series_winner;
        result.appendChild(lbl3);
    }

}

function getComputerChoice() {
    let rand = Math.random();
    const difference = 3 - 1;
    const random = Math.round(rand * difference);
    const number_in_range = random + 1;

    const valu = number_in_range === 1 ? "Rock" : (number_in_range === 2 ? "Scissor" : "Paper");
    //console.log(valu);
    return valu;
}

function playRound(prm1, prm2) { //prm1-user input,   prm2-computer input
    const valus = prm1 + "," + prm2;
    let winner_msg = "";
    switch (valus) {
        case "Rock,Scissor":
            winner_msg = "You";
            break;

        case "Scissor,Paper":
            winner_msg = "You";
            break;

        case "Paper,Rock":
            winner_msg = "You";
            break;

        case "Scissor,Rock":
            winner_msg = "Computer";
            break;

        case "Paper,Scissor":
            winner_msg = "Computer";
            break;

        case "Rock,Paper":
            winner_msg = "Computer";
            break;

        default:
            winner_msg = "Both";
            break;
    }
    return winner_msg;
}

function removePreviousSeries() {
    console.log("removePreviousSeries 1");
    if (player_marks === 5 || computer_marks === 5) {
        player_marks = 0;
        computer_marks = 0;
        result.innerHTML = "";
        console.log("removePreviousSeries 2");
    }
    console.log("removePreviousSeries 3");
    return;
}