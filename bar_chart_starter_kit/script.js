// Der refereres til liste/"ul" fra HTML'en, som gemmes i variablen "list".
// "ul" holder styr på columns/søjler.
const list = document.querySelector("ul");
// Der oprettes et array.
// Array'et holder styr på tal.
const valueArr = [];

// Der er brugt setInterval til columns/søjler, så de opstår hvert sekund.
// setInterval kalder altså funktionen hvert sekund (hvert 1000 millisekund).
setInterval(generateColumns, 1000);

// Der oprettes en funktion til at generere columns/søjler.
function generateColumns() {
  // Der laves en const/variabel, der genererer et tilfældigt tal mellem 1 og 100.
  const randomNum = Math.ceil(Math.random() * 100);
  //   Push bruges til at tilføje et tilfældigt tal til sidst i array'et.
  valueArr.push(randomNum);

  //   Længden på arrayet skal kun være 20, så derfor laves der et "if"-statement til at styre dette.
  if (valueArr.length > 20) {
    // console.log("Nu er arrayet længere end 20");
    // Der bruges "shift" til at fjerne det ældste element (i dette tilfælde tal) fra array'et, når array'et overstiger 20 (altså 21).
    // Først ved 21 vil "shift" træde i kraft, og fjerne det ældste element/tal i array'et.
    valueArr.shift();
    // For at der ikke er mere end 20 søjler, bruges nedenstående for at fjerne den ældste søjle, når længden af array'et overstiger 20.
    // Der refereres til "ul"/list fra HTML'en, og det første "li"-element (søjle) vil fjernes, når længden af array'et overstiger 20.
    list.firstElementChild.remove();
  }

  //   Med createElement opretter vi et nyt "li"-element gennem JavaScript, som gemmes i variablen "li".
  const li = document.createElement("li");
  // Her refereres der til vores CSS/style af "li".
  // Der bruges setProperty til at sætte en værdi, i dette tilfælde for højden af søjlerne, som skal være tilfældig.
  li.style.setProperty("--height", randomNum);
  //   Med appendChild indsætter man et eksisterende HTML-element som child af et andet element.
  //   Der bruges appendChild for at indsætte det nye element der er oprettet i vores "ul", der allerede er etableret i HTML'en.
  list.appendChild(li);

  console.log("Value Array", valueArr);
}
