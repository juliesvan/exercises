const selectBox = document.querySelector("#theme").addEventListener("change", selelectBoxChange);

function selelectBoxChange(evt) {
  const themeChosen = evt.target.value;
  console.log("themeChosen", themeChosen);
  document.querySelector("body").dataset.theme = themeChosen;
}
