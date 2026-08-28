// Funktion til udregning af tal mellem 0 og max.
export function randomNumberBetween0AndMax(max) {
  return Math.floor(Math.random() * max);
}

// Funktion til HTML-element (bare et eksempel).
export function $(elementName) {
  return document.querySelector(elementName);
}
