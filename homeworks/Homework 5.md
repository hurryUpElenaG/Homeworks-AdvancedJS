# Homework - use Async/Await

## Task 1
Create a button
When the button is clicked, get the data from the https://api.openaq.org/v1/cities api with an AJAX call.
Print the details for the first 10 cities in an **unordered list**. If you are experiencing CORS problem, try using
```javascript
mode: "no-cors",
headers: {
        "Access-Control-Allow-Origin": "*",
      }
```
in the ajax call.
If you are still having problem, use https://pokeapi.co/api/v2/pokemon and print details for the first ten pokemons
of the result. 

## Task 2
* Create a button
* When the button is clicked, call the https://jsonplaceholder.typicode.com/users/1. 
* Get the details for the first user using **FETCH API**.
* Print the person stats in a **table**.

## Task 3
* Use the Dog API https://dog.ceo/dog-api/documentation/breed
* Call the following url: https://dog.ceo/api/breed/hound/images
* Display (show on UI) each image returned in the response.

## Task 4
Create an HTML page with a table and a button. When the button is clicked, show results for the first 10 planets from the Star Wars API. The information in the table should include:

* Planet Name
* Population
* Climate
* Gravity

**API URL:** https://swapi.py4e.com/api/planets/?page=1



