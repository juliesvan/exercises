// Øvelse: Gæt et tal

const computerGuess = Math.ceil(Math.random() * 100);
console.log("computerGuess", computerGuess);

document.querySelector("#numberGuess").addEventListener("click", userClick);
function userClick() {
  const value = document.getElementById("guess").value;

  const input = Number(value);
  console.log("input", typeof input);

  const result = document.querySelector(".result");

  if (input < computerGuess) {
    console.log("Dit gæt er for lavt");
    result.textContent = "Dit gæt er for lavt...";
  } else if (input > computerGuess) {
    console.log("Dit gæt er for højt");
    result.textContent = "Dit gæt er for højt...";
  } else {
    console.log("Dit gæt er korrekt");
    result.textContent = "Dit gæt er korrekt!";
  }
}

function guessRandomNumber() {
  const guess = input.value;
}
