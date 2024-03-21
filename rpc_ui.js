const body = document.querySelector("body");
body.setAttribute("style", "display:flex; flex-direction:column; align-items: center; justify-content: center; font-family: Arial, Helvetica, sans-serif");
const selection = document.querySelector(".selection");
selection.setAttribute("style", "padding:40px; background: #0066ff; border: 8px solid orange; border-radius: 10px; width: 400px; display: flex; justify-content:center; gap: 30px;");
const btn = document.querySelectorAll(".btn");
btn.forEach(elem => elem.setAttribute("style", "padding:5px; border-radius: 5px; width: 80px; border: 4px solid white; background: orange; color: #ffffff; font-weight: bold;"));
const result = document.querySelector("#results");
result.setAttribute("style", "width: 400px; background: #0066ff; border:8px solid orange; border-radius: 10px; padding-left:40px; padding-right:40px; margin-top: 20px; list-style-type: none;");
var player_marks = 0;
var computer_marks = 0;
var round = 0;

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
    round++;
    console.log("player: " + playerSelectin);
    const com_choice = getComputerChoice();
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
    const li0 = document.createElement("li");
    li0.textContent = "Round: " + round;
    li0.setAttribute("style", "font-weight: bold; color: #ffcccc;");
    const li1 = document.createElement("li");
    li1.textContent = "Your choice: " + playerSelectin;
    const li2 = document.createElement("li");
    li2.textContent = "Computers choice: " + com_choice;
    const li3 = document.createElement("li");
    li3.textContent = msg;
    li3.setAttribute("style", "color: #ffcccc;");

    const container_li = document.createElement("li");
    container_li.setAttribute("class", "cont_li");
    // container_li.setAttribute("style","width");
    const ul = document.createElement("ul");
    ul.setAttribute("class", "list");
    ul.setAttribute("style", "background: #0066ff; color: Lime; border-radius: 5px; padding-top:20px; padding-bottom:20px; display:flex; flex-direction: column; gap: 5px;")

    ul.appendChild(li0);
    ul.appendChild(li1);
    ul.appendChild(li2);
    ul.appendChild(li3);

    var li4 = document.createElement("li");
    var series_winner = "";

    if (player_marks === 5 || computer_marks === 5) {
        series_winner = (player_marks > computer_marks ? "You win the series!" : "Computer wins the series!");
        li4.textContent = series_winner;
        li4.setAttribute("style", "font-weight: bold; color: #ffcccc;");
        ul.appendChild(li4);
    }
    container_li.appendChild(ul);
    result.insertBefore(container_li, result.children[0]);

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
        round = 0;
        result.innerHTML = "";
        console.log("removePreviousSeries 2");
    }
    console.log("removePreviousSeries 3");
    return;
}