// Eksempel på funtkion til HTML-element.
export function $(elementName) {
  return document.querySelector(elementName);
}

// Funktion til udregning af tal mellem 0 og max.
export function randomNumberBetween0AndMax(max) {
  return Math.floor(Math.random() * max);
}

// Funktion - fetch
export function loadJSON(url, callback) {
  fetch(url)
    .then((response) => response.json())
    .then((jsonData) => callback(jsonData));
}
