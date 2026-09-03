import { loadJSON } from "../utilities_lib/utilities_lib.js";

loadTheData();
function loadTheData() {
  loadJSON("https://kea-alt-del.dk/kata-distortion/", JSONloaded);
}

setInterval(loadTheData, 10000);
function JSONloaded(data) {
  console.log(data.inQueue);

  document.querySelector("h1").innerHTML = data.inQueue;
  document.querySelector(".viser").style.transform = `rotate(${data.inQueue * 18}deg)`;
}
