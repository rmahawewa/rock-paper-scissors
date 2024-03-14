function getComputerChoice() {

    let rand = Math.random();
    const difference = 3 - 1;
    const random = Math.round(rand * difference);
    const number_in_range = random + 1;

    const valu = number_in_range === 1 ? "rock" : (number_in_range === 2 ? "scissor" : "paper");
    return valu;
}

const text_elem = document.getElementById("usr_input");
var count = 0;
var count_player = 0;
var count_comp = 0;

text_elem.addEventListener("keyup", () => {
    document.getElementById("round_winner").innerHTML = "";
    document.getElementById("seriese_winner").innerHTML = "";
    document.getElementById("round").innerHTML = "";
    document.getElementById("computer_choice").innerHTML = "";

    let text = (text_elem.value).toLowerCase();
    if (text.localeCompare("rock") === 0 || text.localeCompare("scissor") === 0 || text.localeCompare("paper") === 0) {
        count++;
        document.getElementById("round").innerHTML = "Round: " + count;
        const comp_valu = getComputerChoice();
        console.log("your choice: " + text);
        console.log("computers choice: " + comp_valu);
        document.getElementById("computer_choice").innerHTML = comp_valu;
        let winner = playRound(text, comp_valu);
        if (winner.localeCompare("You") === 0) {
            count_player++;
            console.log("player: " + count_player);
        } else if (winner.localeCompare("Computer") === 0) {
            count_comp++;
            console.log("computer: " + count_comp);
        }
        document.getElementById("round_winner").innerHTML = winner + " won!";
        console.log(winner + " won!");
        if (count === 5) {
            const seriese_winner = count_player > count_comp ? "You" : (count_comp > count_player ? "Computer" : "Both");
            document.getElementById("seriese_winner").innerHTML = "Seriese winner: " + seriese_winner;
            count = 0;
            count_player = 0;
            count_comp = 0;
        }
    }
});

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