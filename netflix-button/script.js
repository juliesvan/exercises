const netflixBtn = document.getElementById("netflixBtn");
const progress = document.querySelector(".progress");

// Som udgangspunkt har musen ikke bevæget sig, og derfor er denne boolean, cursorMoved, false som default.
let cursorMoved = false;
// Variabel til hvis brugeren klikker på knappen.
// let userClick = false;

progress.addEventListener("animationend", animationDone);

// Tjekker om musen IKKE er blevet bevæget.
function animationDone(progressEnd) {
  console.log("progressEnd");
  if (cursorMoved === false) {
    continueActivated();
  }
}

// eventList. der lytter på, om musen har bevæget sig/bevæger sig under animation.
window.addEventListener("mousemove", userMovedCursor);

// Når brugeren bevæger musen, vil boolean cursorMoved blive lig med true (husker at musen er blevet bevæget).
function userMovedCursor() {
  cursorMoved = true;
  //   animation skal være none, for at man kan gøre efterfølgende step. Animation skal "nulstilles", da den (width) ellers stadig styres af CSS-animationen.
  progress.style.animation = "none";
  //   Animationen kører med det samme til 100%, når musen bevæges.
  progress.style.width = "100%";
}

// eventList. der lytter på, om knappen er blevet klikket på.
netflixBtn.addEventListener("click", btnClicked);
// netflixBtn.addEventListener("click", animationDone);

// Når brugeren klikker på knappen, vil boolean cursorMoved blive lig med true (ikke længere i brug).
// Reagerer på klik, og baggrunden bliver sort.
function btnClicked() {
  //   userClick = true;

  continueActivated();
}

// Ny funktion, der samler animationDone og btnClicked og udfører selve handlingen (ændre side/baggrundsfarve).
function continueActivated() {
  document.querySelector("body").style.backgroundColor = "#000";
  netflixBtn.style.display = "none";
}
