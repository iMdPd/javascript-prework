let randomNumber = Math.floor(Math.random() * 3 + 1);

console.log("Wylosowana liczba to: " + randomNumber);

let computerMove = "nieznany ruch";

if (randomNumber == 1) {
  computerMove = "Kamień";
} else if (randomNumber == 2) {
  computerMove = "Papier";
} else if (randomNumber == 3) {
  computerMove = "Nożyce";
}

printMessage("Mój ruch to: " + computerMove);

let playerInput = prompt("Wybierz swój ruch! 1: Kamień, 2: Papier, 3: Nożyce.");

console.log("Wybrana przez gracza liczba to: " + playerInput);

let playerMove = "nieznany ruch";

if (playerInput == 1) {
  playerMove = "Kamień";
} else if (playerInput == 2) {
  playerMove = "Papier";
} else if (playerInput == 3) {
  playerMove = "Nożyce";
}

printMessage("Gracz wybrał: " + playerMove);
