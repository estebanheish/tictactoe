
boardNames = [ "uno", "dos", "tres", "cuatro", "cinco", "seis", "siete", "ocho", "nueve" ];
player = "X";

function getBoard() {
    var board = [];
    for (n=0; n<9; n++) {
        board[n] = document.getElementById(boardNames[n]).textContent;
    }
    return board;
}

function win() {
    var board = getBoard()
    var rows = [
        [board[0], board[1], board[2]],
        [board[3], board[4], board[5]],
        [board[6], board[7], board[8]]
    ]
    var cols = [
        [board[0], board[3], board[6]],
        [board[1], board[4], board[7]],
        [board[2], board[5], board[8]]
    ]
    var diags = [[board[0], board[4], board[8]], [board[2], board[4], board[6]]]
    
    for (x of rows.concat(cols, diags)) {
        if (x[0] != "" && x[0] == x[1] && x[1] == x[2]) {
            alert("Jugador " + player + " gana.");
            window.location.reload();
            return;
        }
    }

    if (board.every(x => x != "")) {
        window.location.reload();
        alert("Empate");
    }
}

function move(celda) {
    var c = document.getElementById(celda);
    if (c.textContent == "") {
        c.textContent = player
        win()
        if (player == "X") {
            player = "O";
        } else {
            player = "X";
        }
    } else {
        alert("Ahi noooooooooooooooooooo")
    }
}

document.getElementById("uno").addEventListener("click", function(){move("uno")}, false);
document.getElementById("dos").addEventListener("click", function(){move("dos")}, false);
document.getElementById("tres").addEventListener("click", function(){move("tres")}, false);
document.getElementById("cuatro").addEventListener("click", function(){move("cuatro")}, false);
document.getElementById("cinco").addEventListener("click", function(){move("cinco")}, false);
document.getElementById("seis").addEventListener("click", function(){move("seis")}, false);
document.getElementById("siete").addEventListener("click", function(){move("siete")}, false);
document.getElementById("ocho").addEventListener("click", function(){move("ocho")}, false);
document.getElementById("nueve").addEventListener("click", function(){move("nueve")}, false);