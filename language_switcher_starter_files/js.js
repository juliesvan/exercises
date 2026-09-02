const texts = {
  en: {
    texts: [
      { text: "Puppy Gallery", location: ".header" },
      { text: "Puppy Gallery", location: ".footer" },
      { text: "Language", location: ".lang" },
      { text: "View full gallery →", location: "#galleryBtn" },
      { text: "Home", location: "#nav-home" },
      { text: "Dog Gallery", location: "#nav-gallery" },
      { text: "For Sale", location: "#nav-sale" },
      { text: "Home", location: "#footer-home" },
      { text: "Dog Gallery", location: "#footer-gallery" },
      { text: "For Sale", location: "#footer-sale" },
      { text: "Welcome to the Puppy Gallery", location: ".article-title" },
      {
        text: "Whether you're looking for your new best friend or just want to share a picture of your dog, you're in the right place.",
        location: ".article-text",
      },
    ],
  },
  da: {
    texts: [
      { text: "Hundegalleriet", location: ".header" },
      { text: "Hundegalleriet", location: ".footer" },
      { text: "Sprog", location: ".lang" },
      { text: "Se hele galleriet →", location: "#galleryBtn" },
      { text: "Hjem", location: "#nav-home" },
      { text: "Hundegalleri", location: "#nav-gallery" },
      { text: "Til Salg", location: "#nav-sale" },
      { text: "Hjem", location: "#footer-home" },
      { text: "Hundegalleri", location: "#footer-gallery" },
      { text: "Til Salg", location: "#footer-sale" },
      { text: "Velkommen til Hundegalleriet", location: ".article-title" },
      {
        text: "Uanset om du er på udkig efter din nye bedste ven, eller bare gerne vil dele et billede af din hund, er du havnet det rigtige sted.",
        location: ".article-text",
      },
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
