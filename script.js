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
        case "rock,scissor":
            winner_msg = "You";
            break;

        case "scissor,paper":
            winner_msg = "You";
            break;

        case "paper,rock":
            winner_msg = "You";
            break;

        case "scissor,rock":
            winner_msg = "Computer";
            break;

        case "paper,scissor":
            winner_msg = "Computer";
            break;

        case "rock,paper":
            winner_msg = "Computer";
            break;

        default:
            winner_msg = "Both";
            break;
    }
    return winner_msg;
}

function playSeriese() {

    var i;
    var count_player = 0;
    var count_comp = 0;

    for (i = 0; i < 5; i++) {
        let input = prompt("Choose Rock, Paper or Scissor");
        let usr_input = "";
        if (input !== null) {
            usr_input = input.toLowerCase();
        } else {
            console.log("Game over!");
            return;
        }
        let elemnts = ["rock", "paper", "scissor"];
        while (!elemnts.includes(usr_input)) {
            input = prompt("Choose Rock, Paper or Scissor");
            if (input !== null) {
                usr_input = input.toLowerCase();
            } else {
                console.log("Game over!");
                return;
            }
        }
        let com_choice = getComputerChoice();
        console.log("Your choice: " + usr_input);
        console.log("Computer's choice: " + com_choice)
        let winner = playRound(usr_input, com_choice);
        if (winner.localeCompare("You") === 0) {
            console.log("Round " + Number(i + 1) + ": You win!")
            count_player++;
            //console.log("player: " + count_player);
        } else if (winner.localeCompare("Computer") === 0) {
            console.log("Round " + Number(i + 1) + ": You lose! " + com_choice + " beats " + usr_input);
            count_comp++;
            //console.log("computer: " + count_comp);
        } else {
            console.log("Round " + Number(i + 1) + ": Round tied");
        }
    }
    const seriese_winner = count_player > count_comp ? "You win!" : (count_comp > count_player ? "Computer wins!" : "Both win!");
    console.log("Seriese winner: " + seriese_winner);
}

const start = document.getElementById("start");

start.addEventListener("click", () => {
    playSeriese();
});