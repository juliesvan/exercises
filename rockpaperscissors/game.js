"use strict";

let computerensValg;
let brugerensValg;

// Spillere
const player1 = document.getElementById("player1");
const player2 = document.getElementById("player2");

// Lytter på man klikker på rock.
const rockBtn = document.querySelector(".rock");

rockBtn.addEventListener("click", rockClicked);
function rockClicked() {
  console.log("Rock clicked");
  brugerensValg = "rock";

  //   Kalder funktionen "træffer valg".
  traefferValg();
}

// Lytter på man klikker på paper.
const paperBtn = document.querySelector(".paper");

paperBtn.addEventListener("click", paperClicked);
function paperClicked() {
  console.log("Paper clicked");
  brugerensValg = "paper";

  //   Kalder funktionen "træffer valg".
  traefferValg();
}

// Lytter på man klikker på scissors.
const scissorsBtn = document.querySelector(".scissors");

scissorsBtn.addEventListener("click", scissorsClicked);
function scissorsClicked() {
  console.log("Scissors clicked");
  brugerensValg = "scissors";

  //   Kalder funktionen "træffer valg".
  traefferValg();
}

// Array der indeholder computerens mulige valg af hænder.
const computerensMuligheder = ["rock", "paper", "scissors"];

// Udregning der gør, at computeren vælger en hånd tilfældigt - enten 0 (rock), 1 (paper) eller 2 (scissors).
// 'floor' bruges til at runde tallet ned.
const tilfaeldigtValg = Math.floor(Math.random() * computerensMuligheder.length);

function traefferValg() {
  console.log("Brugerens valg:", brugerensValg);

  computerensValg = computerensMuligheder[tilfaeldigtValg];
  console.log("Computerens valg:", computerensValg);

  nedtealling();
}

function nedtealling() {
  player1.classList.add("shake");
  player2.classList.add("shake");
  player1.addEventListener("animationend", visValg);
}

// Lige nu vælger computeren samme hånd hver gang, man spiller. Det kræver, at man refresher siden, før at computeren vælger en ny hånd.
function visValg() {
  player1.classList.remove("shake", "rock", "paper", "scissors");
  player2.classList.remove("shake", "rock", "paper", "scissors");

  player1.classList.add(brugerensValg);
  player2.classList.add(computerensValg);

  afgoerResultat();
}

function afgoerResultat() {
  console.log("Brugerens valg", brugerensValg);
  console.log("Computerens valg", computerensValg);

  // Dette gør, at resultatet bliver overwritten hver gang, der spilles et nyt spil og der dermed kommer et nyt resultat.
  // Det ville være bedre, hvis beskeden forsvandt igen, så snart man starter et nyt spil. Lige nu bliver resultatet/beskeden bare stående, indtil et nyt spil er spillet og der kommer et nyt resultat.
  draw.classList.add("hidden");
  win.classList.add("hidden");
  lose.classList.add("hidden");

  // Hvis brugeren og computeren har samme hånd, bliver det uafgjort/draw, og denne div skal synliggøres ved at fjerne ('remove') 'hidden'.
  if (brugerensValg === computerensValg) {
    draw.classList.remove("hidden");
    // Hvis brugeren vælger en hånd, der slår computerens hånd, vil 'win' blive synlig ved at fjerne 'hidden'.
  } else if (
    (brugerensValg === "rock" && computerensValg === "scissors") ||
    (brugerensValg === "paper" && computerensValg === "rock") ||
    (brugerensValg === "scissors" && computerensValg === "paper")
  ) {
    win.classList.remove("hidden");
    // Hvis ingen af disse to scenarier sker, vil brugeren tabe til computeren, og 'lose' vil blive vist ved at fjerne 'hidden'.
  } else {
    lose.classList.remove("hidden");
  }
}
