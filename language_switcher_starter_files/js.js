const texts = {
  de: {
    texts: [
      { text: "Das Bot", location: ".header" },
      { text: "Das Ro-Bot", location: ".footer" },
    ],
  },
  da: {
    texts: [
      { text: "Båden", location: ".header" },
      { text: "Robotten", location: ".footer" },
    ],
  },
};
// locale gør at default-sprog er dansk.
let locale = "da";
console.log(texts.da.texts[0].text);
console.log(texts[locale].texts[0].text);
console.log(document.querySelector(".header"));

// Tekst i header
const wordHeader = document.querySelector(texts[locale].texts[0].location);
// wordHeader.innerHTML = texts[locale].texts[0].text;

// Tekst i footer
const wordFooter = document.querySelector(texts[locale].texts[1].location);
// wordFooter.innerHTML = texts[locale].texts[1].text;

const selectLang = document.getElementById("language");

selectLang.addEventListener("change", function () {
  locale = selectLang.value;
  console.log(selectLang.value);

  changeLang();
});

function changeLang() {
  // wordHeader.innerHTML = texts[locale].texts[0].text;
  // wordFooter.innerHTML = texts[locale].texts[1].text;

  // Hvis man i stedet bruger forEach
  texts[locale].texts.forEach((element) => {
    document.querySelector(element.location).innerHTML = element.text;
  });
}

changeLang();
