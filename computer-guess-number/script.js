let min = 0;
let max = 100;
let guess = 50;
let numberOfGuesses = 0;

// Variabel til computerens gæt/tal.
const computerGuess = document.getElementById("computerGuess");

// Variabler til knapper.
const lowBtn = document.getElementById("lowBtn");
const highBtn = document.getElementById("highBtn");
const correctBtn = document.getElementById("correctBtn");
const restartBtn = document.getElementById("restartBtn");

// Start forfra-knappen skal kun kunne trykkes på, når tallet er gættet, og derfor skal den være deaktiveret fra start.
restartBtn.disabled = true;

// De resterende knapper skal til gengæld være aktive fra start og indtil tallet er gættet, hvor kun start forfra-knappen skal være aktiv.
lowBtn.disabled = false;
highBtn.disabled = false;
correctBtn.disabled = false;

// Viser computerens gæt i browseren.
computerGuess.textContent = guess;

// Funktion til for lavt gæt.
function guessTooLow() {
  min = guess + 1;
  newGuess();
}
lowBtn.addEventListener("click", guessTooLow);

// Funktion til for højt gæt.
function guessTooHigh() {
  max = guess - 1;
  newGuess();
}
highBtn.addEventListener("click", guessTooHigh);

// Funktion til --- der gælder for både for lavt og for højt gæt - derfor er denne funktion kaldt i guessTooLow og guessTooHigh.
function newGuess() {
  guess = Math.floor((min + max) / 2);
  computerGuess.textContent = guess;
  numberOfGuesses = numberOfGuesses + 1;
}

function guessCorrect() {
  computerGuess.textContent = `Jeg brugte ${numberOfGuesses} forsøg på at gætte tallet!`;

  //   Når tallet er gættet rigtigt er start forfra-knappen aktiv.
  restartBtn.disabled = false;

  //   De andre knapper kan nu ikke trykkes på, da spillet er færdigt, og der skal startes forfra.
  lowBtn.disabled = true;
  highBtn.disabled = true;
  correctBtn.disabled = true;
}
correctBtn.addEventListener("click", guessCorrect);

// Når der klikkes på "Start forfra"-knappen, skal værdierne nulstilles/tilbage til udgangspunktet.
function restartGame() {
  min = 0;
  max = 100;
  // Behøver ikke guess = 50, da dette allerede er defineret i funktionen newGuess.
  // Her står der at guess = 0 + 100 / 2 = 50.
  numberOfGuesses = 0;

  //   Kalder newGuess-funktionen.
  newGuess();

  //   Start forfra-knappen skal nu deaktiveres, indtil tallet er gættet korrekt igen.
  restartBtn.disabled = true;

  //   De andre knapper skal igen være aktive, så der kan spilles igen.
  lowBtn.disabled = false;
  highBtn.disabled = false;
  correctBtn.disabled = false;
}
restartBtn.addEventListener("click", restartGame);
