/*# Homework 3
Use the Dog API https://dog.ceo/dog-api/documentation/breed
Call the following url: https://dog.ceo/api/breed/hound/images
Display (show on UI) each image returned in the response.
Use Fetch or JQuery AJAX by your choice*/


let button = document.getElementById("getDogImageBtn");
let container = document.getElementById("dogImagesContainer");


button.addEventListener("click", function () {
  fetch("https://dog.ceo/api/breed/hound/images")
    .then(function (response) {
      //response object
      response.json() //promise
        .then(function (data) {
          let images = data.message;

          for (let image of images) {
            let img = document.createElement("img");
            img.src = image;
            img.alt = "Hound dog";
            container.appendChild(img);
          }
        })
        .catch(function (errorJson) {
          console.log(errorJson);
        });
    })
    .catch(function (error) {
      console.log("Error fetching dog images:", error);
    });
});
