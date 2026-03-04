/*Homework6
Create a class Animal that has:
- name
- type - carnivore/herbivore/omnivore
- age
- size
- eat - a method that checks if the input is an Animal.
	* If the input is an Animal and If this object animal is herbivore write in the console: The animal ( this animal name ) is a herbivore and does not eat other animals
	* If the input is an Animal, and If this object animal is not herbivore, then change the input Animal property isEaten to true and log in the console: The animal (this animal name) ate the (the input animal name). 
	* If the animal is twice as large or larger than this animal than just log in the console: The animal (this animal name) tried to eat the (the input animal name) but it was too large. 
	* If the input is not an animal just write: The animal (this animal name) is eating (the input).
- isEaten = default false*/

//Herbivores are animals that consume only plants, including grass, leaves, fruits, and bark.
//Carnivores are animals that consume only other animals, including meat, fish, and insects.
//Omnivores are animals that consume both plants and other animals, including a variety of foods such as fruits, vegetables, meat, and insects.

//1st way Solution- Using instanceof to check if input is an animal
class Animal {
  constructor(name, type, age, size) {
    this.name = name;
    this.type = type; //carnivore/herbivore/omnivore
    this.age = age;
    this.size = size;
    this.isEaten = false;
  }

  eat(input) {
    if (input instanceof Animal) {
      if (this.type === "herbivore") {
        console.log(`The animal ${this.name} is a herbivore and does not eat other animals`);
        return;
      }

      if (input.size >= this.size * 2) {
        console.log(`The animal ${this.name} tried to eat the ${input.name} but it was too large.`);
        return;
      }

      input.isEaten = true;
      console.log(`The animal ${this.name} ate the ${input.name}.`);

    } else {
        if(this.type === 'herbivore' || this.type === 'omnivore'){
            console.log(`The animal ${this.name} is eating ${input}.`);
        } else {
            console.log(`The animal ${this.name} is a carnivore and does not eat ${input}.`);
        }
    }
  }
}

let tiger = new Animal("Tiger", "carnivore", 5, 250);
let giraffe = new Animal("Giraffe", "herbivore", 3, 120);
let zebra = new Animal("Zebra", "herbivore", 10, 500);

zebra.eat(giraffe);
tiger.eat(giraffe);
tiger.eat(zebra);
giraffe.eat(tiger);
giraffe.eat(zebra);
zebra.eat("grass");
giraffe.eat("leaves");
tiger.eat("grass");

// 2nd way Solution- Using custom flag to check if input is an animal
/*class Animal {
    constructor(name, type, age, size){
        this.name = name;
        this.type = type;
        this.age = age;
        this.size = size;
        this.isEaten = false;
        this.isAnimal = true; //using custom flag
    }

    eat(input){
        if (input && input.isAnimal) {
            if(this.type === 'herbivore'){
                console.log(`The animal ${this.name} is a herbivore and does not eat other animals`);
            } else if(input.size >= 2 * this.size){
                console.log(`The animal ${this.name} tried to eat the ${input.name} but it was too large.`);
            } else {
                input.isEaten = true;
                console.log(`The animal ${this.name} ate the ${input.name}.`);
            }
        } else {
            if(this.type === 'herbivore' || this.type === 'omnivore'){
                console.log(`The animal ${this.name} is eating ${input}.`);
            } else {
                console.log(`The animal ${this.name} is a carnivore and does not eat ${input}.`);
            }
        }
    }   
}

let tiger = new Animal("Tiger", "carnivore", 5, 250);
let giraffe = new Animal("Giraffe", "herbivore", 3, 120);
let zebra = new Animal("Zebra", "herbivore", 10, 500);

zebra.eat(giraffe);
tiger.eat(giraffe);
tiger.eat(zebra);
giraffe.eat(tiger);
giraffe.eat(zebra);
zebra.eat("grass");
giraffe.eat("leaves");
tiger.eat("grass");*/
