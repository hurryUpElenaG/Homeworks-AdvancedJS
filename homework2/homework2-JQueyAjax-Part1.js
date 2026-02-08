/*# Homework 1
Create a button
When the button is clicked, get the data from the https://pokeapi.co/api/v2/pokemon 
and print details for the first ten pokemons in an **unordered list**
* Use JQuery AJAX call*/

//1st way
$(document).ready(function () {
  $("#getPokemonsBtn").click(function () {
    $.ajax({
      url: "https://pokeapi.co/api/v2/pokemon",   
      success: function (data) {
        console.log("Pokemon Data:", data);

        //reset so that we do not have duplicates when clicking multiple times
        $("#pokemons").empty();

        let pokemons = data.results;

        for (i = 0; i < 10; i++) {
         console.log(pokemons[i].name);
          $("#pokemons").append(`<li>${pokemons[i].name}</li>`);
        }
      },
      error: function (error) {
        console.error("Error fetching pokemon data:", error);
      },
    });
  });
});


//2nd way
/*$(document).ready(function () {
  $("#getPokemonsBtn").click(function () {
    $.ajax({
      url: "https://pokeapi.co/api/v2/pokemon?limit=10",
      success: function (data) {
        console.log("Pokemon Data:", data);

        //reset so that we do not have duplicates when clicking multiple times
        $("#pokemons").empty();

        let pokemons = data.results;

        for (let pokemon of pokemons) {
          console.log(pokemon.name);
          $("#pokemons").append(`<li>${pokemon.name}</li>`);
        }
      },
      error: function (error) {
        console.error("Error fetching pokemon data:", error);
      }
    });
  });
});*/