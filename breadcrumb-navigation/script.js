const bc = [
  { name: "Hvidevarer", link: "/hvidevarer" },
  { name: "Vaskemaskiner", link: "/hvidevarer/vaskemaskiner" },
  { name: "Bosch", link: "/hvidevarer/vaskemaskiner/bosch/" },
];

document.querySelector("button").addEventListener("click", addBreadCrumbsToPage);

function addBreadCrumbsToPage() {
  console.log("Tilføj brødkrummer");
  document.querySelector("ul").innerHTML = generateBreadCrumbPath();
}

function generateBreadCrumbPath() {
  let returnStr = "";

  console.log("Længden af bc-array'et:", bc.length);
  bc.forEach((breadCrumbs, i) => {
    console.log("i", i);

    if (i !== bc.length - 1) {
      console.log("Det er ikke sidste element");
      returnStr += `<a href="">${breadCrumbs.name}</a>`;
    } else {
      console.log("Det er sidste element");
      // returnStr = returnStr+breadCrumbs.name - dette er det samme som nedenstående.
      returnStr += `${breadCrumbs.name}`;
    }

    bc.join(" / ");
  });
  return returnStr;
}
