console.log("Test 123");

let progress = [1, 1, 1, 1, 1, 1, 1, 1, 1];
const winningCombos = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6]
];

const play = (clickedID) => {
    let playerSpan = document.getElementById("player");
    let clickedElement = document.getElementById(clickedID)
    if (progress[clickedID] === 1) {
        if (playerSpan.innerText === 'X') {
            playerSpan.innerText = 'O';
            clickedElement.innerText = 'X';
            progress[clickedID] = 'X';
            console.log(progress);

        } else {
            playerSpan.innerText = 'X';
            clickedElement.innerText = 'O';
            progress[clickedID] = 'O'
            console.log(progress);
        };
        for (let i = 0; i < winningCombos.length; i++) {
            let countX = 0;
            let countO = 0;
            for (a = 0; a < winningCombos[i].length; a++) {
                if (progress[winningCombos[i][a]] === "X") {
                    countX += 1;
                } else if (progress[winningCombos[i][a]] === "O") {
                    countO += 1;
                };
            };
            if (countX === 3) {
                window.alert("Player X is the Winner!")
                return reset()
            } else if (countO === 3) {
                window.alert("Player O is the Winner!");
                return reset()
            } else if (progress.includes(1) === false && countX != 3 && countO != 3) {
                window.alert("CAT's Game!");
                return reset();
            }
        };
    };
};

const reset = () => {
    progress = [1, 1, 1, 1, 1, 1, 1, 1, 1];
    document.getElementById("player").innerText = "X";
    for (i = 0; i < 10; i++) {
        document.getElementById("" + i).innerText = "";
    };
}