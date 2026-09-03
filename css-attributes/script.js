// const switchTheme = document.querySelector("button");
// const foxTheme = document.querySelector(".fox")
// const batTheme = document.querySelector(".bat")

// switchTheme.addEventListener("click", function){
//     if (foxTheme){

//     }
// }

document.querySelector("h1").addEventListener("click", h1clicked);

function h1clicked(evt) {
  console.log("evt.target", evt.target);
  const currentFilter = evt.target.dataset.filter;

  console.log(currentFilter);
  evt.target.dataset.filter = currentFilter === "fox" ? "bat" : "fox";

  //   Man kunne også bruge if/else:
  //   if (evt.target.dataset.filter === "fox") {
  //     evt.target.dataset.filter = "bat";
  //   } else {
  //     evt.target.dataset.filter = "fox";
  //   }
}
