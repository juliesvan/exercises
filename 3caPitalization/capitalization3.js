const name = "HErkuLes";

// Her får vi "pe".
const first = name.substring(0, 2).toLowerCase();
console.log("First", first);

// Her får vi "T" (i princippet er toUpperCase overflødigt her, fordi ved ved, at det er uppercase i forvejen, men hvis man nu ikke vidste det, ville man bruge det for at være sikker på, at det blev uppercase).
const capital = name.substring(2, 3).toUpperCase();
console.log("Middle", capital);

const last = name.substring(3).toLowerCase();
console.log("Last", last);

const completeName = first + capital + last;
console.log("Complete name", completeName);
