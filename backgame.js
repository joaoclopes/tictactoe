const playerOne = "X";
const playerTwo = "Y";
var currentPlayer = playerOne;
var endGame = false;

initSpace();

function initSpace() {
    var spaces = document.getElementsByClassName("space");
    for (var i = 0; i < spaces.length; i++) {
        spaces[i].addEventListener("click", function() {
            if (endGame) {
                return;
            }

            if (this.getElementsByClassName("<a>").length == 0) {
                if (currentPlayer == playerOne) {
                    this.innerHTML = "<a>X</A>";
                    this.setAttribute("player", playerOne);
                    currentPlayer = playerTwo;
                } else {
                    this.innerHTML = "<a>Y</a>";
                    this.setAttribute("player", playerTwo)
                    currentPlayer = playerOne;
                }
                
            }
            checkWinner();
        });
    }
}

function checkWinner() {
    var a1 = document.getElementById("a1").getAttribute("player");
    var a2 = document.getElementById("a2").getAttribute("player");
    var a3 = document.getElementById("a3").getAttribute("player");

    var b1 = document.getElementById("b1").getAttribute("player");
    var b2 = document.getElementById("b2").getAttribute("player");
    var b3 = document.getElementById("b3").getAttribute("player");

    var c1 = document.getElementById("c1").getAttribute("player");
    var c2 = document.getElementById("c2").getAttribute("player");
    var c3 = document.getElementById("c3").getAttribute("player");

    var winner = "";

    if (a1 == a2 && a1 == a3 && a1 != "") {
        winner = a1;
    }

    if (b1 == b2 && b1 == b3 && b1 != "") {
        winner = b1;
    }

    if (c1 == c2 && c1 == c3 && c1 != "") {
        winner = c1;
    }

    if (a1 == b1 && a1 == c1 && a1 != "") {
        winner = a1;
    }

    if (a2 == b2 && a2 == c2 && a2 != "") {
        winner = a2;
    }

    if (a3 == b3 && a3 == c3 && a3 != "") {
        winner = a3;
    }

    if (a1 == b2 && a1 == c3 && a1 != "") {
        winner = a1;
    }

    if (a3 == b2 && a3 == c1 && a3 != "") {
        winner = a3;
    }

    if (winner != "") {
        endGame = true;
        alert("The winner is: " + winner);
    }
}