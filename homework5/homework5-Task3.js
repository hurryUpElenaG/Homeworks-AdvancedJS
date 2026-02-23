/*# Homework 3
Use the Dog API https://dog.ceo/dog-api/documentation/breed
Call the following url: https://dog.ceo/api/breed/hound/images
Display (show on UI) each image returned in the response.
Use async/await*/

let button = document.getElementById("getDogImageBtn");
let container = document.getElementById("dogImagesContainer");

button.addEventListener("click", async function () {
  try {
    let response = await fetch("https://dog.ceo/api/breed/hound/images");
    let data = await response.json();

    let images = data.message;

    images.forEach((image) => {
      let img = document.createElement("img");
      img.src = image;
      img.alt = "Hound dog";
      container.appendChild(img);
    });
  } catch (error) {
    console.error("Error fetching dog images:", error);
  }
});
