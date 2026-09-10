"use strict";

const storedTheme = localStorage.getItem("tsTheme");
console.log("storedTheme", storedTheme);

// Dette gør, at temaet bliver husket, selvom siden bliver refresh'et. Uden dette går temaet tilbage til 'light', når der bliver refresh'et.
if (storedTheme !== null) {
  setTheme(storedTheme);
  document.querySelector("#theme").value = storedTheme;
}

document.querySelector("#theme").addEventListener("change", themeChange);

function themeChange(evt) {
  const themeChosen = evt.target.value;
  console.log("themeChosen", themeChosen);
  localStorage.setItem("tsTheme", themeChosen);
  setTheme(themeChosen);
}

function setTheme(theTheme) {
  document.querySelector("body").dataset.theme = theTheme;
}
