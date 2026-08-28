// Øvelse: Gæt et tal

// 'ceil' gør at tallet bliver rundet op.
// const computerGuess = Math.ceil(Math.random() * 100);
// console.log("computerGuess", computerGuess);

// Funktion er importeret fra utilities_lib (HUSK at skrive .js i mappestrukturen, ellers kan filen ikke findes).
import { randomNumberBetween0AndMax } from "../utilities_lib/utilities_lib.js";
import { $ } from "../utilities_lib/utilities_lib.js";

const computerGuess = randomNumberBetween0AndMax(100);
console.log("number", computerGuess);

document.querySelector("#numberGuess").addEventListener("click", userClick);
function userClick() {
  const value = document.getElementById("guess").value;

  const input = Number(value);
  console.log("input", typeof input);

  const result = document.querySelector(".result");

  if (input < computerGuess) {
    console.log("Dit gæt er for lavt");
    result.textContent = "Dit gæt er for lavt. Prøv igen!";
  } else if (input > computerGuess) {
    console.log("Dit gæt er for højt");
    result.textContent = "Dit gæt er for højt. Prøv igen!";
  } else {
    console.log("Dit gæt er korrekt");
    result.textContent = "Godt gået! Dit gæt er korrekt!";
  }
}

function guessRandomNumber() {
  const guess = input.value;
}
