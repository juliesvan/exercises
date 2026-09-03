const name = "HErkuLES";

const firstCapital = name.substring(0, 1).toUpperCase();
console.log("First letter", firstCapital);

const lastLowerCase = name.substring(1).toLowerCase();
console.log("Rest of the name", lastLowerCase);

const completeName = firstCapital + lastLowerCase;
console.log("Complete name", completeName);
