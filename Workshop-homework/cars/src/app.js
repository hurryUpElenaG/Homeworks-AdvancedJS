let carsDataList = [];

//handles fetching and storing car data.
class CarService {
  static async fetchCars() {
    try {
      const response = await fetch(
        `https://raw.githubusercontent.com/hurryUpElenaG/Homeworks-AdvancedJS/main/Workshop-homework/cars/cars.json`,
      );
      const data = await response.json();
      console.log(data);
      carsDataList = data;

      CarUI.populateFilters(carsDataList);
      CarUI.createCarTable(carsDataList);
    } catch (error) {
      console.error("Error fetching car data:", error);
    }
  }
}

//handles table creation and filter population.
class CarUI {
  static createCarTable(cars) {
    const container = document.getElementById("carTableResult");
    container.innerHTML = "";

    if (!cars.length) {
      container.innerHTML = "<p>No data found</p>";
      return;
    }

    const table = document.createElement("table");

    const headers = [
      "Brand",
      "Color",
      "Doors",
      "Gas Type",
      "Horsepower",
      "Is New",
      "Model",
      "Type",
    ];
    const headerRow = document.createElement("tr");

    headers.forEach((h) => {
      const th = document.createElement("th");
      th.textContent = h;
      headerRow.appendChild(th);
    });

    table.appendChild(headerRow);

    cars.forEach((car) => {
      const row = document.createElement("tr");
      row.innerHTML = `
        <td>${car.brand}</td>
        <td>${car.color}</td>
        <td>${car.doors}</td>
        <td>${car.gasType}</td>
        <td>${car.horsepower}</td>
        <td>${car.isNew ? "Yes" : "No"}</td>
        <td>${car.model}</td>
        <td>${car.type}</td>
      `;
      table.appendChild(row);
    });

    container.appendChild(table);
  }

  static populateFilters(cars) {
    this.populateSelect("filterType", cars.map((car) => car.type));
    this.populateSelect("filterBrand",cars.map((car) => car.brand));
    this.populateSelect("filterGas", cars.map((car) => car.gasType));
    this.populateSelect("filterColor", cars.map((car) => car.color));
  }

  static populateSelect(selectId, values) {
    const select = document.getElementById(selectId);
    select.innerHTML = `<option value="">All</option>`; // default option
    [...new Set(values)].forEach((value) => {
      const option = document.createElement("option");
      option.value = value;
      option.textContent = value;
      select.appendChild(option);
    });
  }
}

//handles filtering logic.
class CarFilters {
  static applyFilters() {
    const filters = {
      type: document.getElementById("filterType").value,
      brand: document.getElementById("filterBrand").value,
      gasType: document.getElementById("filterGas").value,
      color: document.getElementById("filterColor").value,
      model: document.getElementById("filterModel").value.toLowerCase(),
      doors: document.getElementById("filterDoors").value,
      hp: document.getElementById("filterHP").value,
      isNew: document.querySelector('input[name="filterNew"]:checked')?.value,
    };

    const filtered = carsDataList.filter(
      (car) =>
        (!filters.type || car.type === filters.type) &&
        (!filters.brand || car.brand === filters.brand) &&
        (!filters.gasType || car.gasType === filters.gasType) &&
        (!filters.color || car.color === filters.color) &&
        (!filters.model || car.model.toLowerCase().includes(filters.model)) &&
        (!filters.doors || car.doors == filters.doors) &&
        (!filters.hp || car.horsepower >= filters.hp) &&
        (!filters.isNew || (filters.isNew === "new" ? car.isNew : !car.isNew)),
    );

    CarUI.createCarTable(filtered);
  }

  static resetFilters() {
    document.getElementById("filterForm").reset();
    CarUI.createCarTable(carsDataList);
  }
}


//App controller to initialize event listeners and start the app.
class AppController {
  static initEventListeners() {
    document.getElementById("searchBtn")
      .addEventListener("click", () => CarFilters.applyFilters());
    document
      .getElementById("resetBtn")
      .addEventListener("click", () => CarFilters.resetFilters());
  }

  static startApp() {
    this.initEventListeners();
    CarService.fetchCars();
  }
}

// Start the application
AppController.startApp();


