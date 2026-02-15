//# Homework 4
/*Create a Constructor function for product. Each product has property: name, category (string), hasDiscount (bool) and price.
Create an array of 15 products. 
Now answer the following requirements:

- Find all products with price greater than 20.
- Get the names of all products of Category Food, that are on discount.
- Get the price of all products that are on discount.
- Find the name and price of all products with name starting with a vowel, that are not on discount.*/

function Product(name, category, hasDiscount, price){
    this.name = name,
    this.category = category,
    this.hasDiscount = hasDiscount,
    this.price = price 
}

let products = [
    new Product("Cheese", "Food", true, 300),
    new Product("Milk", "Food", false, 65),
    new Product("Toilet Paper", "Hygiene", true, 150),
    new Product("Paracetamol", "Pharmacy", false, 30),
    new Product("Notebook", "Stationary", false, 20),
    new Product("Sneakers", "Clothes", true, 3000),
    new Product("T-shirt", "Clothes", false, 500),
    new Product("Oil", "Food", false,  100),
    new Product("Eggs", "Food", true, 80),
    new Product("Shampoo", "Hygiene", false, 250),
    new Product("Conditioner", "Hygiene", false, 180),
    new Product("Mushrooms", "Food", false, 120),
    new Product("Supplements",  "Pharmacy", true, 850),
    new Product("Toothpaste", "Hygiene", true, 100),
    new Product("Salmon Fillets", "Food", false, 450)
];

//1.
let productsWithPriceGreaterThan20  = products
  .filter(product  => product.price > 20);
productsWithPriceGreaterThan20.forEach(pr => console.log(pr));

//2.
let productsOnDiscount = products
  .filter(product => product.category === "Food" && product.hasDiscount == true)
  .map(pr => pr.name);
productsOnDiscount.forEach(name => console.log(name));

/*let productsOnDiscount = products
  .filter(product => product.category === "Food" && product.hasDiscount == true)
  .map(pr => pr.name)
  .forEach(name => console.log(name));*/
                                 
//3.
let priceOfProducstOnDiscount = products.filter(product => product.hasDiscount == true)
                                        .map(product => product.price);
priceOfProducstOnDiscount.forEach(price => console.log(price));


//4. 1st way
let productNameStartingWithVowel = products.filter(product => product.name.match(/^[AEIOUaeiou]/) && product.hasDiscount == false)
                                           .map(pr =>({name: pr.name, price: pr.price}));
productNameStartingWithVowel.forEach(namePrice  => console.log(namePrice));
                                    
//2nd way
/*let vowels = ['a', 'e', 'i', 'o', 'u'];
let productNameStartingWithVowel = products
               .filter(product => vowels.includes(product.name[0].toLowerCase()) && product.hasDiscount == false)
               .map(pr =>({name: pr.name, price: pr.price}));  
productNameStartingWithVowel.forEach(namePrice => console.log(namePrice));  */                             



