let randomNumber = Math.floor(Math.random() * 3 + 1);

console.log("Wylosowana liczba to: " + randomNumber);

let argComputerMove = getMoveName(randomNumber);

function getMoveName(argMoveId) {
  if (argMoveId == 1) {
    return "Kamień";
  } else if (argMoveId == 2) {
    return "Papier";
  } else if (argMoveId == 3) {
    return "Nożyce";
  }

  printMessage("Nie znam ruchu o id " + argMoveId + ".");
  return "nieznany ruch";
}

printMessage("Mój ruch to: " + argComputerMove);

/* Kolej gracza */

let playerInput = prompt("Wybierz swój ruch! 1: Kamień, 2: Papier, 3: Nożyce.");

console.log("Wybrana przez gracza liczba to: " + playerInput);

let argPlayerMove = getMoveName(playerInput);

printMessage("Gracz wybrał: " + argPlayerMove);

function displayResult(argComputerMove, argPlayerMove) {
  printMessage("Zagrałem " + argComputerMove + " a Ty " + argPlayerMove);

  if (argPlayerMove == "nieznany ruch") {
    printMessage("Powtórz wybór!");
  } else if (argComputerMove == argPlayerMove) {
    printMessage("Remis!");
  } else if (
    (argComputerMove == "Kamień" && argPlayerMove == "Papier") ||
    (argComputerMove == "Papier" && argPlayerMove == "Nożyce") ||
    (argComputerMove == "Nożyce" && argPlayerMove == "Kamień")
  ) {
    printMessage("Wygrywasz!");
  } else {
    printMessage("Przegrywasz!");
  }
}

displayResult(argComputerMove, argPlayerMove);
