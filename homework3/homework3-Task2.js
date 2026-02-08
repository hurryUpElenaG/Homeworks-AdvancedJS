let fetchDataBtn = document.getElementById("getPlanetsBtn");
let prevBtn = document.getElementById("prevBtn");
let nextBtn = document.getElementById("nextBtn");

let url1 = "https://swapi.py4e.com/api/planets/?page=1";
let url2 = "https://swapi.py4e.com/api/planets/?page=2";

//1st way -  using simple statement for toggling buttons
//using arrow functions
//fetch data- 1st function that makes the call to the API (the URL should be passed as a parameter)
let makeCallToApi = (url) => {
     fetch(url)
    .then((response) => {
      response
        .json()
        .then((data) => {
            printPlanetsIntoTable(data)
        })
        .catch((errorJson) => {
          console.log(errorJson);
        });
    })
    .catch((error) => {
      console.log(error);
    });
};

//2nd function that prints planets into the table.
let printPlanetsIntoTable = (data) => {

    let planetsTableContainer =document.getElementById("planetsContainer");
          planetsTableContainer.innerHTML = ""; // clear old table

          let table = document.createElement("table");

          let headerRow = document.createElement("tr");
          headerRowTitles = ["Planet Name", "Population", "Climate", "Gravity"];

          for (let headerRowTitle of headerRowTitles) {
            let th = document.createElement("th");
            th.textContent = headerRowTitle;
            headerRow.appendChild(th);
          }
          table.appendChild(headerRow);

          let planets  = data.results;

          for (let planet of planets) {
            let row = document.createElement("tr");

            let nameCell = document.createElement("td");
            nameCell.textContent = (planet.name ? planet.name : "unknown");

            let populationCell = document.createElement("td");
            populationCell.textContent = (planet.population ? planet.population : "unknown");

            let climateCell = document.createElement("td");
            climateCell.textContent = (planet.climate ? planet.climate : "unknown");

            let gravityCell = document.createElement("td");
            gravityCell.textContent = (planet.gravity ? planet.gravity : "unknown");

            row.appendChild(nameCell);
            row.appendChild(populationCell);
            row.appendChild(climateCell);
            row.appendChild(gravityCell);

            table.appendChild(row);
          }
          planetsTableContainer.appendChild(table);       
}

fetchDataBtn.addEventListener("click",()=> {
    makeCallToApi(url1);

    //toggle buttons
    nextBtn.style.display = "inline";
    prevBtn.style.display = "none";
});

nextBtn.addEventListener("click",()=>{
    makeCallToApi(url2);

    //toggle buttons
    nextBtn.style.display = "none";
    prevBtn.style.display = "inline";
});

prevBtn.addEventListener("click",()=>{
    makeCallToApi(url1);

    //toggle buttons
    nextBtn.style.display = "inline";
    prevBtn.style.display = "none";
});


//2nd way using Pagination function for listing all data in the API

/*let fetchDataBtn = document.getElementById("getPlanetsBtn");
let prevBtn = document.getElementById("prevBtn");
let nextBtn = document.getElementById("nextBtn");

let currentUrl = "https://swapi.py4e.com/api/planets/?page=1";
let nextUrl = null;
let prevUrl = null;

//using arrow functions
//fetch data- 1st function that makes the call to the API (the URL should be passed as a parameter)
let makeCallToApi = (url) => {
     fetch(url)
    .then((response) => {
      response
        .json()
        .then((data) => {
            printPlanetsIntoTable(data);

            // Save pagination URLs
            nextUrl = data.next;
            prevUrl = data.previous;

            updateButtons();
        })
        .catch((errorJson) => {
          console.log(errorJson);
        });
    })
    .catch((error) => {
      console.log(error);
    });
};

//2nd function that prints planets into the table.
let printPlanetsIntoTable = (data) => {

    let planetsTableContainer =document.getElementById("planetsContainer");
          planetsTableContainer.innerHTML = ""; // clear old table

          let table = document.createElement("table");

          let headerRow = document.createElement("tr");
          headerRowTitles = ["Planet Name", "Population", "Climate", "Gravity"];

          for (let headerRowTitle of headerRowTitles) {
            let th = document.createElement("th");
            th.textContent = headerRowTitle;
            headerRow.appendChild(th);
          }
          table.appendChild(headerRow);

          let planets  = data.results;

          for (let planet of planets) {
            let row = document.createElement("tr");

            let nameCell = document.createElement("td");
            nameCell.textContent = (planet.name ? planet.name : "unknown");

            let populationCell = document.createElement("td");
            populationCell.textContent = (planet.population ? planet.population : "unknown");

            let climateCell = document.createElement("td");
            climateCell.textContent = (planet.climate ? planet.climate : "unknown");

            let gravityCell = document.createElement("td");
            gravityCell.textContent = (planet.gravity ? planet.gravity : "unknown");

            row.appendChild(nameCell);
            row.appendChild(populationCell);
            row.appendChild(climateCell);
            row.appendChild(gravityCell);

            table.appendChild(row);
          }
          planetsTableContainer.appendChild(table);       
}

function updateButtons() {
    nextUrl ? (nextBtn.style.display = "inline") : (nextBtn.style.display = "none");
    prevUrl ? (prevBtn.style.display = "inline") : (prevBtn.style.display = "none");
}

fetchDataBtn.addEventListener("click",()=> {
    makeCallToApi(currentUrl);
});

nextBtn.addEventListener("click",()=>{
    if (nextUrl) {
        makeCallToApi(nextUrl);
    }
});

prevBtn.addEventListener("click",()=>{
    if (prevUrl) {
        makeCallToApi(prevUrl);
    }
});*/