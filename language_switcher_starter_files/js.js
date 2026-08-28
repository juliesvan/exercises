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
const locale = "da";
console.log(texts.da.texts[0].text);

console.log(document.querySelector(".header"));
