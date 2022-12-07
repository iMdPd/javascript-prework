{
  const playGame = function (playerInput) {
    clearMessages();

    const getMoveName = function (argMoveId) {
      if (argMoveId == 1) {
        return "Kamień";
      } else if (argMoveId == 2) {
        return "Papier";
      } else if (argMoveId == 3) {
        return "Nożyce";
      }

      printMessage("Nie znam ruchu o id " + argMoveId + ".");
      return "nieznany ruch";
    };

    const randomNumber = Math.floor(Math.random() * 3 + 1),
      argComputerMove = getMoveName(randomNumber);

    console.log("Wylosowana liczba to: " + randomNumber);

    printMessage("Mój ruch to: " + argComputerMove);

    /* Kolej gracza */

    const displayResult = function (argComputerMove, argPlayerMove) {
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
    };

    console.log("Wybrana przez gracza liczba to: " + playerInput);

    const argPlayerMove = getMoveName(playerInput);

    printMessage("Gracz wybrał: " + argPlayerMove);

    displayResult(argComputerMove, argPlayerMove);
  };

  document.getElementById("play-rock").addEventListener("click", function () {
    playGame(1);
  });

  document.getElementById("play-paper").addEventListener("click", function () {
    playGame(2);
  });

  document
    .getElementById("play-scissors")
    .addEventListener("click", function () {
      playGame(3);
    });
}
