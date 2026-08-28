// Øvelse: Lav en funktion, der genererer et tilfældigt nummer mellem 0 og 100.

// Navn på funktion
function randomNumberBetween0And100() {
  // Returnerer funktionen, så der kommer et resultat
  return Math.ceil(Math.random() * 100);
}
// Kalder funktionen
randomNumberBetween0And100();

// Skriver funktionen/resultatet i browseren - connecter til HTML'en (i stedet for at skrive direkte i HTML).
document.querySelector(".myHeader").textContent = randomNumberBetween0And100();
