//Classes are a blueprint or template used to create objects. It defines the properties (fields/variables) and behaviors (methods/functions) that the objects created from the class will have.

// class ClassName {
//     constructor(prop1, prop2) {
//         this.prop1 = prop1;
//         this.prop2 = prop2;
//     }
// }

// let obj = new ClassName("arg1", "arg2");
// console.log(obj);              
// console.log(obj.prop1);         
// console.log(obj.prop2);         

//***********************************************Constructors************************************************ */
// class Dog{
//     constructor(dogName,weight,colour,breed){
//         this.dogName=dogName;
//         this.weight=weight;
//         this.colour=colour;
//         this.breed=breed;
//     }
// }
// let dog=new Dog("Dog1",20,"Black","Labrador"); 
// console.log(dog.dogName);
// console.log(dog.weight);
// console.log(dog.colour);
// console.log(dog.breed); 
//******************************************************************CLASSES******************************************** */

//Classes:- Classes are a template for creating objects. They encapsulate data with code to work on that data.
// Constructor:- The constructor method is a special method for creating and initializing an object created within a class. It is called automatically when a new object is created.

// class Person{
//     constructor(firstName,lastName){
//         this.firstName=firstName;
//         this.lastName=lastName;
//     }
// }
// let p=new Person("John","Doe"); 
// console.log("Hi",p.firstName);

// class Person{
//     constructor(firstName,lastName="Doe"){
//         this.firstName=firstName;
//         this.lastName=lastName;
//     }
// }
// let p=new Person("","Doe"); 
// console.log("Hi",p.lastName);

//**********************************************************METHODS*************************** */
//A method is a function that is defined inside a class and is used to perform actions using the class's data (properties).

// class Person{
//     constructor(firstName,lastName){
//         this.firstName=firstName;
//         this.lastName=lastName;
//     }
//     greet(){
//         console.log("Hi there! I'm",this.firstName);
//     }
// }
//  let p=new Person("John","Doe"); 
//  p.greet();

// class Person {
//     constructor(firstName, lastName) {
//         this.firstName = firstName;
//         this.lastName = lastName;
//     }
//     greet() {
//         console.log("Hi there, I am", this.firstName);
//     }
//     compliment(name, object) {
//         return "That's a wonderful " + object + ", " + name + "!";
//     }
// }

// // Create an instance of Person outside the class

// let p = new Person("Maaike", "van Putten");
// p.greet();
// let complimentMsg = p.compliment("Harry", "hat");
// console.log(complimentMsg);


//**************************************Properties******************************************** */
//Properties are variables declared inside a class that represent the characteristics or state of an object.
//They are used to store data specific to each object created from the class.

// class Car {
//     // Private fields (using #)
//     #brand;
//     #model;

//     constructor(brand, model) {
//         this.#brand = brand;
//         this.#model = model;
//     }

//     // Public method that interacts with private data
//     startEngine() {
//         console.log("The engine of", this.#brand, this.#model, "is now running.");
//     }

//     // Private method (this method can't be accessed from outside the class)
//     #secretMechanism() {
//         console.log("Secret engine mechanism is engaged!");
//     }
//     // Method to call the private method from within the class
//     activateSecretMechanism() {
//         this.#secretMechanism();
//     }
// }
// const myCar = new Car("Tesla", "Model S");
// myCar.startEngine();  // Works fine
// // myCar.#secretMechanism();  // Error: Private method can't be accessed
// myCar.activateSecretMechanism();  // Accessing the private method through a public one


//******************************************************GETTERS AND SETTERS*********************************************** */
//Getters are methods used to read a property (get its value).
//Setters are methods used to write or update a property (set its value).
//They help you control how properties are accessed and modified, especially when they are marked as private. 


// class Person{
//     #firstName; 
//     #lastName;
//     constructor(firstName,lastName){
//         this.#firstName=firstName;
//         this.#lastName=lastName;
//     }
//     get firstName(){ 
//         return this.#firstName;
//     }
//     set firstName(firstName){ 
//         this.#firstName=firstName;
//     }
//     get lastName(){ 
//         return this.#lastName;
//     }
//     set lastName(lastName){
//         this.#lastName=lastName;
//     }
// }
// let p=new Person("John","Doe");
// console.log(p.firstName); 
// console.log(p.firstName="Mickey");
// console.log(p.firstName);


// class Person {
//     #firstName;
//     #lastName;

//     constructor(firstName, lastName) {
//         this.#firstName = firstName;
//         this.#lastName = lastName;
//     }

//     get firstName() {
//         return this.#firstName;
//     }

//     set firstName(name) {
//         if (name.length > 0) {
//             this.#firstName = name;
//         } else {
//             console.log("First name cannot be empty!");
//         }
//     }

//     get lastName() {
//         return this.#lastName;
//     }

//     set lastName(name) {
//         if (name.length > 0) {
//             this.#lastName = name;
//         } else {
//             console.log("Last name cannot be empty!");
//         }
//     }

//     greet() {
//         console.log(`Hi there, I am ${this.#firstName} ${this.#lastName}`);
//     }

//     compliment(name, object) {
//         return `That's a wonderful ${object}, ${name}!`;
//     }
// }

// let person = new Person("Maaike", "van Putten");

// person.greet();
// console.log(person.firstName);
// console.log(person.lastName);

// person.firstName = "Harry";
// person.lastName = "Potter";
// person.greet();

// person.firstName = ""; // triggers validation

// let complimentMsg = person.compliment("Harry", "hat");
// console.log(complimentMsg);



//***********************************************************Inheritance********************************************* */
// Inheritance is a way to create a new class that is based on an existing class. The new class inherits the properties and methods of the existing class, allowing you to reuse code and create a hierarchy of classes. Inheritance is achieved using the extends keyword.


// class Vehicle{
//     constructor(color, currentSpeed, maxSpeed){
//         this.color= color;
//         this.currentSpeed=currentSpeed;
//         this.maxSpeed=maxSpeed;
//     }
//     move() {
//         console.log("moving at",this.currentSpeed);
//     }
     
//     accelerate(amount){
//         this.currentSpeed += amount;
//     }
// }

// class Vehicle {
//     constructor(color, currentSpeed, maxSpeed) {
//         this.color = color;
//         this.currentSpeed = currentSpeed;
//         this.maxSpeed = maxSpeed;
//     }

//     move() {
//         console.log(`Moving at ${this.currentSpeed} km/h`);
//     }

//     accelerate(amount) {
//         if (this.currentSpeed + amount <= this.maxSpeed) {
//             this.currentSpeed += amount;
//         } else {
//             this.currentSpeed = this.maxSpeed;
//             console.log("Reached maximum speed!");
//         }
//     }

//     brake(amount) {
//         this.currentSpeed -= amount;
//         if (this.currentSpeed < 0) {
//             this.currentSpeed = 0;
//         }
//     }

//     describe() {
//         console.log(`This ${this.color} vehicle is going ${this.currentSpeed} km/h (max: ${this.maxSpeed} km/h)`);
//     }
// }
// // Example usage
// let car = new Vehicle("red", 0, 180);

// car.accelerate(50);
// car.move();        

// car.accelerate(150); 
// car.describe();      

// car.brake(100);
// car.move();    
//__________________________________________________________________________________________________________________________________________________________    

// Parent Class
// class Vehicle {
//     constructor(color, currentSpeed, maxSpeed) {
//         this.color = color;
//         this.currentSpeed = currentSpeed;
//         this.maxSpeed = maxSpeed;
//     }

//     move() {
//         console.log(`Moving at ${this.currentSpeed} km/h`);
//     }

//     accelerate(amount) {
//         if (this.currentSpeed + amount <= this.maxSpeed) {
//             this.currentSpeed += amount;
//         } else {
//             this.currentSpeed = this.maxSpeed;
//             console.log("Reached maximum speed!");
//         }
//     }
//     brake(amount) {
//         this.currentSpeed -= amount;
//         if (this.currentSpeed < 0) {
//             this.currentSpeed = 0;
//         }
//     }
//     describe() {
//         console.log(`This ${this.color} vehicle is going ${this.currentSpeed} km/h (max: ${this.maxSpeed} km/h)`);
//     }
// }

// // Child Class
// class Motorcycle extends Vehicle {
//     constructor(color, currentSpeed, fuel, maxSpeed) {
//         super(color, currentSpeed, maxSpeed); 
//         this.fuel = fuel; 
//     }

//     refuel(amount) {
//         this.fuel += amount;
//         console.log(`Refueled: now fuel is ${this.fuel} liters`);
//     }

//     describe() {
//         console.log(`This ${this.color} motorcycle is going ${this.currentSpeed} km/h with ${this.fuel} liters of fuel (max: ${this.maxSpeed} km/h)`);
//     }
// }

// // Example usage
// let bike = new Motorcycle("black", 20, 5, 160);

// bike.move();         
// bike.accelerate(50); 
// bike.describe();       
// bike.refuel(3);        
// bike.brake(30);        
// bike.describe();       

//*******************************************************************PROTOTYPES************************************************************************* */

