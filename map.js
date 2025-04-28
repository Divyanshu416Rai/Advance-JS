//*****************************************************MAPS(SET METHOD)************************************************ */
// const fruits = new Map();

// fruits.set('apple', 3);
// fruits.set('banana', 5);
// fruits.set('orange', 2);

// console.log(fruits.get('apple')); 
// console.log(fruits.get('banana')); 
// console.log(fruits.get('orange')); 

//**********************************************GET METHOD*************************************************** */
// const fruits = new Map();

// fruits.set('apple', 3);
// fruits.set('banana', 5);
// fruits.set('orange', 2);

// console.log(fruits.get('apple'));  
// console.log(fruits.get('banana'));  
// console.log(fruits.get('orange'));  

//--------------------------------------------------------------------------------------------------------

// const fruits = new Map([
//     ["apple", 100],
//     ["banana", 200],
//     ["orange", 300]
// ]);
// console.log(fruits); 
// fruits.set("mango", 400);
// console.log(fruits);    
// typeof fruits; 
// fruits.get("apple"); 

// const fruits = new Map();

// fruits.set('apple', 3);
// fruits.set('banana', 5);
// let fruitCount = fruits.size;  // 2
//-------------------------------------------------------use(delete,size,clear)---------------------------------------------------

// const fruits = new Map();

// fruits.set('apple', 3);
// fruits.set('banana', 5);
// fruits.set('orange', 2);

// console.log('Initial size of fruits map:', fruits.size);  // 3

// fruits.delete('banana');  
// console.log('Size after deleting banana:', fruits.size);  // 2

// console.log('Does the map have apple?', fruits.has('apple'));  // true
// console.log('Does the map have banana?', fruits.has('banana'));  // false

// fruits.clear(); 
// console.log('Size after clearing:', fruits.size);  // 0

//_________________________________________________________(maps.for each)__________________________________________________
// const fruits = new Map();

// fruits.set('apple', 3);
// fruits.set('banana', 5);
// fruits.set('orange', 2);

// let text = "";
// // fruits.forEach(function(value, key) {
// //     text += key + " = " + value + "\n";
// // });

// // for(const x of fruits.keys()){                                       //keys
// //     text+=x;
// // }

// for(const x of fruits.values()){                                       //values
//         text+=x;
// }
// console.log(text);

//*******************************************Objects as keys******************************************************* */
// const apples = { name: "Apples" };
// const bananas = { name: "Bananas" };
// const oranges = { name: "Oranges" };

// const fruits = new Map();  

// fruits.set(apples, 100);
// fruits.set(oranges, 300);  
// fruits.set(bananas, 200);

// console.log(fruits);

//---------------------------------------------Map.groupBY()----------------------------------------------------------
// const fruits = [
//     {name: "apples", quantity:300},
//     {name: "bananas", quantity:500},
//     {name: "oranges", quantity: 200}, 
//     {name: "kiwi", quantity: 150}
// ];
// function myCallback({quantity}){
//     return quantity>200? "ok":"low";
// }
// const result = Map.groupBy(fruits, myCallback);
// console.log(result);

//*********************************************[Destructuring]*************************************************************** */
// let person = {
//     firstName: "John",
//     lastName: "Doe",
//     age: 30
// };

// let { lastName, firstName } = person;

// console.log(firstName);
// console.log(lastName);   

//---------------------------------------------default value---------------------
// let person = { 
//     firstName: "John",
//     lastName: "Doe",
//     age: 30
// };
// let { firstName, lastName, country = "India" } = person;

// console.log(firstName);  // Output: John
// console.log(lastName);   // Output: Doe
// console.log(country);    // Output: India

//-----------------------------------------------------------------------------------------
// let str = "Hello";

// // Destructuring the string to get individual characters
// let [firstChar, secondChar, thirdChar, fourthChar, fifthChar] = str;                             // array

// console.log(firstChar);
// console.log(secondChar); 
// console.log(thirdChar);  
// console.log(fourthChar);
// console.log(fifthChar);  

//----------------------------------------------------------(Rest property)----------------------------------
// let numbers = [1, 2, 3, 4, 5];

// let [first, second, ...rest] = numbers;

// console.log(first);   
// console.log(second);  
// console.log(rest);    


//------------------------------------------Swapping of variables---------------------------
// let firstName = "Alice";
// let secondName = "Bob";

// // Swapping names using destructuring
// [firstName, secondName] = [secondName, firstName];

// console.log(firstName); 
// console.log(secondName); 

//-------------------------------------------Exponential operators--------------------------------
// let base = 2;
// let exponent = 3;
// let result = base ** exponent;
// console.log(result);  

// let base = 2;
// let exponent = 4;

// let result = Math.pow(base, exponent);
// console.log(result); 
//-------------------------------------------------------------(includes)--------------------------------

// let fruits = ["apple", "banana", "orange", "mango"];

// let fruit1 = fruits.includes("apple");
// let fruit2 = fruits.includes("grapes");

// console.log(fruit1); 
// console.log(fruit2); 

//_______________________________________________________{Trailing Comma}_________________________________________
// Trailing commas refer to the commas that are placed after the last element in an array or object. This is allowed in both arrays and objects, and it's a feature that helps prevent errors when adding or removing elements, especially in multi-line structures.

// let fruits = [
//     "apple",
//     "banana",
//     "orange",
// ];

// console.log(fruits);

//-------------------------------------------------Sparse Object------------------------------------------------------
// let sparseObject = {
//     a: 1,
//     b: undefined,  // This key has an undefined value (it's sparse)
//     c: 3
// };

// console.log(sparseObject);







