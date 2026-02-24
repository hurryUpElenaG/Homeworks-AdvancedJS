/*Create a button
When the button is clicked, get the data from the https://pokeapi.co/api/v2/pokemon 
and print details for the first ten pokemons in an **unordered list**
* Use aync/await call*/

let button = document.getElementById("getPokemonsBtn");
let unorderedList = document.getElementById("pokemons");

button.addEventListener("click", async () => {
  unorderedList.innerHTML = ""; // Clear previous results

  try {
    // Fetch Pokemon list
    let response = await fetch("https://pokeapi.co/api/v2/pokemon");
    let data = await response.json();

    // Filter first 10 Pokemon
    let firstTen = data.results.filter((pokemon, index) => index < 10);

    // Fetch details for each Pokemon and append to the list
    for (let pokemon of firstTen) {
      let detailResponse = await fetch(pokemon.url);
      let detailData = await detailResponse.json();

      let li = document.createElement("li");
      li.textContent = `
              Name: ${detailData.name},
              Height: ${detailData.height},
              Weight: ${detailData.weight}
            `;
      unorderedList.appendChild(li);
    }
  } catch (error) {
    console.error("Error fetching Pokemon:", error);
  }
});
