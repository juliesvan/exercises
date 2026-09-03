"use strict";

window.addEventListener("DOMContentLoaded", start);

let allAnimals = [];

// The prototype for all animals:
const Animal = {
  name: "",
  desc: "-unknown animal-",
  type: "",
  age: 0,
};

function start() {
  console.log("ready");

  // TODO: Add event-listeners to filter and sort buttons

  //   Variabel der rammer alle knapper.
  const filterButtons = document.querySelectorAll(".filter");

  //   forEach går igennem hver knap.
  filterButtons.forEach(function (button) {
    // eventlist. på knap der lytter på klik.
    button.addEventListener("click", filterClick);
  });

  //   Funktion der registrerer klik.
  function filterClick(evt) {
    const button = evt.currentTarget;
    const buttonFilter = button.dataset.filter;

    console.log(buttonFilter);

    setFilter(buttonFilter);
  }

  //   Funktion der filtrerer ud fra klik.
  function setFilter(buttonFilter) {
    // Hvis der trykkes på knappen "All" vises alle dyr i tabellen.
    if (buttonFilter === "*") {
      displayList(allAnimals);
    } else {
      // Hvis der klikkes på "Only Cats" eller "Only Dogs" vises kun henholdsvis katte eller hunde.
      const animalsFiltered = allAnimals.filter(function (animal) {
        return animal.type === buttonFilter;
      });
      //   displayList sørger for, at værdierne vises i tabellen.
      displayList(animalsFiltered);
    }
  }

  loadJSON();
}

async function loadJSON() {
  const response = await fetch("animals.json");
  const jsonData = await response.json();

  // when loaded, prepare data objects
  prepareObjects(jsonData);
}

function prepareObjects(jsonData) {
  allAnimals = jsonData.map(preapareObject);

  // TODO: This might not be the function we want to call first
  displayList(allAnimals);
}

function preapareObject(jsonObject) {
  const animal = Object.create(Animal);

  const texts = jsonObject.fullname.split(" ");
  animal.name = texts[0];
  animal.desc = texts[2];
  animal.type = texts[3];
  animal.age = jsonObject.age;

  return animal;
}

function displayList(animals) {
  // clear the list
  document.querySelector("#list tbody").innerHTML = "";

  // build a new list
  animals.forEach(displayAnimal);
}

function displayAnimal(animal) {
  // create clone
  const clone = document.querySelector("template#animal").content.cloneNode(true);

  // set clone data
  clone.querySelector("[data-field=name]").textContent = animal.name;
  clone.querySelector("[data-field=desc]").textContent = animal.desc;
  clone.querySelector("[data-field=type]").textContent = animal.type;
  clone.querySelector("[data-field=age]").textContent = animal.age;

  // append clone to list
  document.querySelector("#list tbody").appendChild(clone);
}
