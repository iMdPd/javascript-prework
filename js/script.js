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
