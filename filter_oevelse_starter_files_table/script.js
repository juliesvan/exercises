const vehicles = [
  { type: "Bus", fuel: "Diesel", passengers: 45, stops: ["Nørrebrogade", "Elmegade"] },
  { type: "Bil", fuel: "Benzin", passengers: 4, ownedBy: "Klaus" },
  { type: "Cykel", fuel: "Rugbrød", passengers: 0, ownedBy: "Jonas", isElectric: true },
  { type: "Bil", passengers: 5, ownedBy: "Elon", isElectric: true },
  { type: "MC", fuel: "Benzin", passengers: 2, ownedBy: "Fonda" },
  { type: "Cykel", fuel: "Rugbrød", passengers: 2, ownedBy: "Vingegård", isTandem: true },
  { type: "MC", fuel: "Benzin", passengers: 2, ownedBy: "Yolanda" },
  { type: "Knallert", fuel: "Benzin", passengers: 1, ownedBy: "Børge" },
  { type: "Knallert", fuel: "Benzin", passengers: 1, ownedBy: "Jonas" },
  { type: "Løbehjul", passengers: 1, isElectric: true },
];
const tbodyPointer = document.querySelector("tbody");
// Alle el-drevne køretøjer
const electricVehicles = vehicles.filter((vehicle) => vehicle.isElectric);
// Alle køretøjer med mere end 2 sæder
const moreThan2Seats = vehicles.filter((seats) => seats.passengers > 2);
// Alle køretøjer ejet af Jonas
const ownedByJonas = vehicles.filter((vehicleOfJonas) => vehicleOfJonas.ownedBy === "Jonas");
// Alle el-drevne køretøjer ejet af Jonas
const electricOwnedByJonas = vehicles.filter((electricOfJonas) => electricOfJonas.ownedBy === "Jonas" && electricOfJonas.isElectric);
// Alle rugbrøds-drevne køretøjer med plads til mere end 1
const rugbroed = vehicles.filter((rugbroedMoreThan1) => rugbroedMoreThan1.fuel === "Rugbrød" && rugbroedMoreThan1.passengers > 1);

showTheseVehicles(vehicles);

document.querySelector("#filterBtn").dataset.filter;

function showTheseVehicles(arr) {
  arr.forEach((each) => {
    tbodyPointer.innerHTML += `<tr>
  <td>${each.type}</td>
  <td>${each.fuel}</td>
  <td>${each.passengers}</td> 
  <td>${each.stops}</td>
  <td>${each.ownedBy}</td>
  <td>${each.isElectric}</td>
  <td>${each.isTandem ? "X" : ""}</td>
</tr>`;
  });
}
