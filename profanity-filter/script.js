const curseWords = [
  { bad: "var", good: "const" },
  { bad: "float", good: "grid" },
  { bad: "marquee", good: "just don't" },
];

let wordsFiltered = false;

const pText = document.querySelector("#text");
const button = document.querySelector("#sfwBtn");
const filteredDialog = document.querySelector("#dialog");
const closeDialogBtn = document.querySelector("#closeDialog");

button.addEventListener("click", filterWords);
console.log(button);

function filterWords() {
  console.log("filterWords kører");

  // curseWords.forEach(function (curseWord) {
  //   pText.textContent = pText.textContent.replace(curseWord.bad, curseWord.good);
  // });

  if (wordsFiltered === true) {
    filteredDialog.showModal();
  } else {
    curseWords.forEach(function (curseWord) {
      pText.innerHTML = pText.innerHTML.replace(curseWord.bad, `<span class="highlight">${curseWord.good}</span>`);
    });
    wordsFiltered = true;
  }
}

closeDialogBtn.addEventListener("click", closeBtn);

function closeBtn() {
  filteredDialog.close();
}

// brug span til at vise highlight farve fra CSS
