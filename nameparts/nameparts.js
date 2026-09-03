const name = "Julie Julle Svan";

// Variabel til mellemrum, så man kan finde slutningen af et navn.
const firstSpace = name.indexOf(" ");
const secondSpace = name.indexOf(" ", firstSpace + 1);

const firstName = name.substring(0, firstSpace);
console.log("Firstname:", firstName);

const middleName = name.substring(firstSpace + 1, secondSpace);
console.log("Middlename:", middleName);

const lastName = name.substring(secondSpace + 1);
console.log("Lastname:", lastName);

// indexOf() - finder positionen
// substring() - tager en del af teksten ud

const newName = "Albus Percival Wulfric Brian Dumbledore";

// Variabel til sidste mellemrum i strengen.
const lastSpace = newName.lastIndexOf(" ");

const newFirstName = newName.substring(0, firstSpace);
console.log("New firstname:", newFirstName);

const newMiddleName = newName.substring(firstSpace + 1, lastSpace);
console.log("New middlename:", newMiddleName);

const newLastName = newName.substring(lastSpace + 1);
console.log("New lastname:", newLastName);
