"use strict";

// OPGAVEBESKRIVELSE
// Todo-task'en skal være kompleks og objektet skal indeholde mindst disse properties:
// Task-string - hvad er det der skal gøres
// done -  er tasken done
// ID
// Date picker / datovælger
// Tasken skal kunne markeres som Outdoor
// Tasken skal vise hvordan vejret er på den dag tasken skal udføres
// Der skal vedligeholdes en liste over de tasks der er done.

// Inspiration: Kik på påmindelser/reminders på macOS, download todo-apps og prøv dem

// Opgavebeskrivelse

// Din opgave er at skabe en interaktiv ToDo-app ved hjælp af HTML, CSS og JavaScript. Du skal således bruge de ting, du har lært i løbet af de første 3 uger.

// Minimumskrav
// Din ToDo-app skal være i stand til at:

// Oprette en ny opgave med et unikt ID og en beskrivelse.
// Tillade brugerne at markere opgaver som "færdige", hvorefter de flyttes til en "Færdig"-liste.
// Tillade brugerne at fortryde færdiggørelsen af en opgave, så den ryger tilbage til "ToDo"-listen.
// Tillade brugerne at slette opgaver.
// Markere en task som “udendørs” og hente aktuelt vejr via et gratis vejr-API (fx Open-Meteo, som ikke kræver oprettelse eller API-nøgle) og bruge det til at markere, hvilke opgaver der kan udføres når de er markeret som “udendørs”. I sin simpleste form: hvis det regner og en opgave er markeret som udendørs  skal den vises som utilgængelige med relevant feedback til brugeren.

// Evt. ekstra funktioner
// Brug localStorage til at gemme opgaverne. Når en bruger opretter en ny opgave, sletter en opgave, eller ændrer status for en opgave, skal disse ændringer gemmes i localStorage. Når brugeren besøger appen igen, skal opgaverne hentes fra localStorage, så de stadig kan se deres opgaveliste, selv efter at de har lukket og genåbnet browseren.
// Lad brugeren selv vælge en lokation for vejrdata i stedet for en fast, hardkodet by.

// Variabler til HTML-elementer.
const addTaskBtn = document.querySelector(".add-task");
const taskForm = document.querySelector(".tasks-form");
const taskInput = document.querySelector(".task-text");
const dateInput = document.querySelector(".task-date");
const outdoorInput = document.querySelector(".task-outdoor");
const createTaskBtn = document.querySelector(".create-task");
const tasksToDo = document.querySelector(".tasks");
const tasksAreDone = document.querySelector(".tasks-are-done");

// Dette er et objekt (som indeholder de forskellige vejrfænomener), der er gemt i en variabel.
const wwCodes = {
  0: "clearsky_day.png",
  1: "fair_day.png",
  2: "partlycloudy_day.png",
  3: "cloudy.png",
  45: "fog.png",
  48: "fog.png",
  // it's raining again👇🏼
  51: "lightrain.png",
  53: "lightrain.png",
  55: "lightrain.png",
  56: "lightsleet.png",
  57: "lightsleet.png",
  61: "lightrain.png",
  63: "rain.png",
  65: "heavyrain.png",
  66: "lightsleet.png",
  67: "lightsleet.png",
  71: "lightsnow.png",
  73: "snow.png",
  75: "heavysnow.png",
  77: "lightsnow.png",
  80: "lightrainshowers_day.png",
  81: "rainshowers_day.png",
  82: "heavyrainshowers_day.png",
  85: "lightsnowshowers_day.png",
  86: "heavysnowshowers_day.png",
  95: "rainandthunder.png",
};

// Variabel til at hente den gemte to-do-liste fra localStorage.
const storedTasks = localStorage.getItem("tasks");

// Tomt array til listen, hvor tasks bliver gemt.
const taskArr = [];

// Hvis der findes gemte tasks i localStorage, hentes de ind i taskArr.
if (storedTasks !== null) {
  // Laver de gemte tasks fra JSON-tekst tilbage til et array.
  const parsedTasks = JSON.parse(storedTasks);

  // Går gennem de gemte tasks med forEach, og tilføjer dem til taskArr.
  parsedTasks.forEach((task) => {
    taskArr.push(task);
  });
}

// eventList. til addTaskBtn, så taskForm vises, når der klikkes på +.
addTaskBtn.addEventListener("click", addTask);
function addTask() {
  taskForm.style.display = "block";
}

console.log(createTaskBtn);
// eventList. der reagerer, når man trykker på knappen (createTaskBtn), og får funktionen createTask til at køre.
createTaskBtn.addEventListener("click", createTask);

// Funktion, der opretter en task. Den funktion der kører, når der klikkes på knappen som beskrevet ovenfor.
function createTask() {
  // Objekt gemt i en variabel, der indeholder det data/de værdier, der skal køres igennem/vises, når der klikkes på knappen/oprettes en task.
  const taskObj = {
    // Beskrivelse af task (string).
    taskTxt: taskInput.value,
    // Dato for task (string).
    taskDate: dateInput.value,
    // Om task'en er markeret/checked som udendørs (boolean).
    taskOutdoor: outdoorInput.checked,
    // Vejrdata. Er null fordi det ikke er hentet endnu. Det hentes først, når fetch har kørt, og hentet vejret for den valgte dato.
    taskWeather: null,
    // Boolean til at vurdere vejret, og i den forbindelse om en task er mulig. Som udgangspunkt er en task altid mulig (true), men vil senere blive sat til false, hvis en task er markeret som udendørs OG der er nedbør.
    taskPossible: true,
    // Boolean til at markere en task som færdig eller ikke færdig. Task er som udgangspunkt sat til false, da ingen tasks starter som færdiggjorte.
    taskDone: false,
    // Unikt ID til hver task.
    id: self.crypto.randomUUID(),
  };
  // Her bruges push til at tilføje task'en til array'et.
  taskArr.push(taskObj);

  // Gemmer det opdaterede taskArr i localStorage.
  localStorage.setItem("tasks", JSON.stringify(taskArr));
  console.log(localStorage);

  // For at værdierne fra den sidste task ikke bliver stående/huskes efter oprettelse, tømmes tekst, dato og outdoor, så de er reset til næste task.
  taskInput.value = "";
  dateInput.value = "";
  outdoorInput.checked = false;

  // Inputfelter mm. skjules igen, når task'en er oprettet.
  taskForm.style.display = "none";

  // Vejrkode
  // Betingelsen for if er, at task'en skal være markeret som udendørs OG den skal have en valgt dato.
  if (taskObj.taskOutdoor === true && taskObj.taskDate !== "") {
    // Både dato og hele task-objektet er sendt med som argumenter. Datoen skal bruges til API-kaldet, og task-objektet bruges senere til at gemme vejret på den rigtige task.
    // Hvis man brugte taskObj.taskWeather i stedet for hele taskObj, ville det blive null (for det er null som udgangspunkt), og API'en sender først vejret med senere.
    getWeather(taskObj.taskDate, taskObj);
  }

  // Kalder funktionen renderList, så task'en vises i browseren.
  renderList();
}

// Funktion, der styrer task-systemet, altså viser listen med tasks (og deres data).
function renderList() {
  // Først tømmes ul-listerne (tomt string). Ellers ville de samme tasks blive tilføjet igen og igen.
  tasksToDo.innerHTML = "";
  tasksAreDone.innerHTML = "";
  // forEach bruges til at loope gennem array'et med tasks.
  taskArr.forEach((task) => {
    // Der oprettes et li-element.
    const li = document.createElement("li");
    // Herunder bruges innerHTML til at tilføje følgende til li-elementer aka tasks:
    // chechbox-status (ternary)
    // beskrivelse af task
    // dato for task
    // checkbox til at markere en task som udendørs (ternary)
    // png til vejr
    // besked/advarsel om task (ikke) er mulig ift. vejret (ternary)
    // knap til at slette task
    li.innerHTML = `<div class="info-primary">
    <div class="check-desc">
    <input type="checkbox" ${task.taskDone ? "checked" : ""}/>
    <p class="task-desc">${task.taskTxt}</p>
    </div>
    <div class="date-delete">
    <p>${task.taskDate}</p>
    <button class="deleteBtn">Slet</button>
    </div>
    </div>
    <div class="info-secondary">
    <div class="outdoor-img">
    <p>${task.taskOutdoor ? "Udendørs" : ""}</p>
    <p>${task.taskWeather ? `<img src="outdoor pakke/png/${task.taskWeather}" />` : ""}</p>
    </div>
    <div class="possible">
    <p>${task.taskPossible ? "" : "Dato uegnet pga. nedbør."}</p>
    </div>
   </div>`;
    // querySelector til checkbox (status).
    const checkBox = li.querySelector("[type = checkbox]");
    // eventList. på checkbox.
    checkBox.addEventListener("click", () => {
      // Dette sætter tasken til det modsatte af, hvad den er. Hvis den er true bliver den false og omvendt.
      // ! betyder det modsatte af.
      // Så den kan rykke mellem de to lister.
      task.taskDone = !task.taskDone;

      // Gemmer den ændrede status, så tasks markeret som færdige forbliver på tasksAreDone-listen efter reload.
      localStorage.setItem("tasks", JSON.stringify(taskArr));

      // renderList kaldes igen med de nye data.
      renderList();
    });

    // Variabel til slet-knappen (der findes i hvert li-element).
    const deleteBtn = li.querySelector("button");
    // eventList. til slet-knappen, der reagerer på klik.
    deleteBtn.addEventListener("click", taskDeleted);
    // Funktion til at slette tasks. Den er skrevet i forEach, så den kan ramme den bestemt task, man vil slette.
    function taskDeleted() {
      // Her bruges indexOf til at finde den specifikke task, der skal slettes. Her er det gemt i en variabel.
      const taskIndex = taskArr.indexOf(task);
      // splice bruges for at kunne slette task'en.
      // splice skal starte ved taskIndex og slette 1 element - dermed slettes kun den ene task.
      taskArr.splice(taskIndex, 1);

      // Gemmer det opdaterede taskArr, så tasks der er blevet slettet forbliver slettet efter reload.
      localStorage.setItem("tasks", JSON.stringify(taskArr));

      // renderList kaldes igen for at opdatere listen.
      renderList();
    }

    // Hvis task'en er done, skal den rykkes til listen tasksAreDone, ellers skal den blive/tilbage til tasksToDo.
    // Fordi listerne tømmes hver gang renderList kører, bliver de egentlig ikke flyttet, men bliver derimod vist på ny i en evt. ny liste.
    if (task.taskDone === true) {
      tasksAreDone.appendChild(li);
    } else {
      tasksToDo.appendChild(li);
    }
  });
}

// Funktion til at hente vejrdata med fetch.
function getWeather(date, task) {
  // I url'en er der ændret fra en fast dato til en dynamisk dato, der ændrer sig afhængigt af, hvad brugeren har valgt af dato til en task.
  fetch(
    `https://api.open-meteo.com/v1/forecast?latitude=55.68&longitude=12.57&daily=weathercode,temperature_2m_max,temperature_2m_min&timezone=auto&start_date=${date}&end_date=${date}`,
  )
    // Nedenstående gør at indholdet (der er fetched) læses som en JSON-fil, og laver det så om til JS-data.
    .then((response) => response.json())
    // De omdannede data modtages så her (jeg har kaldt dem weatherDate).
    .then((weatherDate) => {
      // Her hentes vejrkoden fra weatherDate, som gemmes i variablen weatherCode.
      // Index 0 fordi array'et kun indeholder 1 dag.
      const weatherCode = weatherDate.daily.weathercode[0];
      // Her bliver vejrkoden slået op i wwCodes, og resultatet bliver gemt på den konkrete task.
      task.taskWeather = wwCodes[weatherCode];
      console.log(task);

      // Boolean til nedbør. Hvis weatherCode er >= 51, skal taskPossible ændres fra sit udgangspunkt som true til false, og der vil blive vist en advarsel (som er skrevet oppe i innerHTML i funktionen renderList).
      if (weatherCode >= 51) {
        task.taskPossible = false;
      }
      // Gemmer taskArr igen med vejrdata, så vejrikon samt advarsel stadig vises efter siden er reloadet.
      localStorage.setItem("tasks", JSON.stringify(taskArr));

      // renderList kaldes igen for udendørsopgaver.
      renderList();
    });
}

renderList();
