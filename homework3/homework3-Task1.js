let fetchDataBtn = document.getElementById("getPlanetsBtn");
//let id = 1;
let url = "https://swapi.py4e.com/api/planets/?page=1";

//1st function that makes the call to the API (the URL should be passed as a parameter)
let makeCallToApi = function (url) {
     fetch(url)
    .then(function (response) {
      response
        .json()
        .then(function (data){
            printPlanetsIntoTable(data)
        })
        .catch(function (errorJson) {
          console.log(errorJson);
        });
    })
    .catch(function (error) {
      console.log(error);
    });
};

//2nd function that prints planets into the table.
let printPlanetsIntoTable = function (data) {

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

fetchDataBtn.addEventListener("click", function () {
    makeCallToApi(url);
});



//Solved without using functions
/*button.addEventListener("click",()=> {
  fetch("https://swapi.py4e.com/api/planets/?page=1")
    .then(function (response) {
      response
        .json()
        .then(function (data) {
            //console(data.results[0]);
            //console(data.results[0].name);

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
        })
        .catch(function (errorJson) {
          console.log(errorJson);
        });
    })
    .catch(function (error) {
      console.log(error);
    });
});*/