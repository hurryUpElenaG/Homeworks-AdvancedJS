/*# Homework 2
Create a button
When the button is clicked, call the https://jsonplaceholder.typicode.com/users/1. 
Get the details for the first user using **FETCH API**.
Print the person stats in a **table** */

let button = document.getElementById("getUserBtn");
let id = 1;

button.addEventListener("click", function () {
  fetch("https://jsonplaceholder.typicode.com/users/" + id) //promise
    .then(function (response) {
      //response object
      response.json() //promise
        .then(function (data) {
          console.log(data);
          console.log(data.name);

          let userInfoTableContainer = document.getElementById("userInfoTableContainer");
          userInfoTableContainer.innerHTML = ""; // clear old table

          let table = document.createElement("table");

          let headerRow = document.createElement("tr");
          headerRowTitles = [
            "Id",
            "Name",
            "Username",
            "Email",
            "Address",
            "Phone",
            "Websiste",
            "Company",
          ];

          for (let headerRowTitle of headerRowTitles) {
            let th = document.createElement("th");
            th.textContent = headerRowTitle;
            headerRow.appendChild(th);
          }
          table.appendChild(headerRow);

          let row = document.createElement("tr");

          let idCell = document.createElement("td");
          idCell.textContent = data.id;

          let nameCell = document.createElement("td");
          nameCell.textContent = data.name;

          let usernameCell = document.createElement("td");
          usernameCell.textContent = data.username;

          let emailCell = document.createElement("td");
          emailCell.textContent = data.email;

          let addressCell = document.createElement("td");
          addressCell.textContent =
            data.address.street + ", " +
            data.address.suite + "\n" +
            data.address.city + "\n" +
            data.address.zipcode + ", \n" +
            data.address.geo.lat + ", " + data.address.geo.lng;

          let phoneCell = document.createElement("td");
          phoneCell.textContent = data.phone;

          let websiteCell = document.createElement("td");
          websiteCell.textContent = data.website;

          let companyCell = document.createElement("td");
          companyCell.textContent = data.company.name; 

          row.appendChild(idCell);
          row.appendChild(nameCell);
          row.appendChild(usernameCell);
          row.appendChild(emailCell);
          row.appendChild(addressCell);
          row.appendChild(phoneCell);
          row.appendChild(websiteCell);
          row.appendChild(companyCell);

          table.appendChild(row);
          userInfoTableContainer.appendChild(table);
        })
        .catch(function (errorJson) {
          console.log(errorJson);
        });
    })
    .catch(function (error) {
      console.log(error);
    });
});
