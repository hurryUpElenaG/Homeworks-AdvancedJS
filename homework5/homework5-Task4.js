let fetchDataBtn = document.getElementById("getPlanetsBtn");
let url = "https://swapi.py4e.com/api/planets/?page=1";

//1st function that makes the call to the API (the URL should be passed as a parameter)
let makeCallToApi = async (url) =>{
  try {
    let response = await fetch(url);
    let data = await response.json();
    printPlanetsIntoTable(data);
  } catch (error) {
    console.error("Error fetching planets data:", error);
  }
};

//2nd function that prints planets into the table.
let printPlanetsIntoTable = (data) => {
  let planetsTableContainer = document.getElementById("planetsContainer");
  planetsTableContainer.innerHTML = ""; // clear old table

  let table = document.createElement("table");

  let headerRow = document.createElement("tr");
  headerRowTitles = ["Planet Name", "Population", "Climate", "Gravity"];

  headerRowTitles.forEach((headerRowTitle) => {
    let th = document.createElement("th");
    th.textContent = headerRowTitle;
    headerRow.appendChild(th);
  });

  table.appendChild(headerRow);

  let planets = data.results;

  planets.forEach((planet) => {
    let row = document.createElement("tr");

    let nameCell = document.createElement("td");
    nameCell.textContent = planet.name ? planet.name : "unknown";

    let populationCell = document.createElement("td");
    populationCell.textContent = planet.population ? planet.population : "unknown";

    let climateCell = document.createElement("td");
    climateCell.textContent = planet.climate ? planet.climate : "unknown";

    let gravityCell = document.createElement("td");
    gravityCell.textContent = planet.gravity ? planet.gravity : "unknown";

    row.appendChild(nameCell);
    row.appendChild(populationCell);
    row.appendChild(climateCell);
    row.appendChild(gravityCell);

    table.appendChild(row);
  });
  planetsTableContainer.appendChild(table);
};

fetchDataBtn.addEventListener("click", () => {
    makeCallToApi(url);
});
