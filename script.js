// function addTwoNumbers(num1=2,num2=3){
//     console.log(num1+num2);
// }
// let doing = x=>console.log('hi');

// function sayHello(){
//     let you = prompt("What is your name ?");
//     console.log("hello",you+"!");
// }
// sayHello()

// let varContainingFunction = function(){
//     let varInFunction = " i am in a function";
//     console.log("hi there", varInFunction);
// };

// function tester(para1,para2){
//     return para1 + " " + para2;
// }
// const arg1="argument1;"
// const arg2="argument2;"
// tester(arg1,arg2);


// function addTwoNumbers(x, y) {
//     console.log(x + y);
// }
// addTwoNumbers(5, 10);


// function addTwoNumbers(x=2, y=3) {
//     console.log(x + y);
// }
// addTwoNumbers();
// addTwoNumbers(6, 6);
// addTwoNumbers(10);

// function addTwoNumbers(x=2,y=3) {
//     console.log(x + y);
// }
// addTwoNumbers(1,2,3,4);


// let doingArrowStuff = x => console.log(x);  // arrow functions are useful when u want to write an implementation on the spot

// doingArrowStuff("Hello, VS Code!");  




// const arr =["divyanshu", "btech","information technology"];
// arr.forEach(e => console.log(e));

//************************************************* */ addTwoNumbers.js**********************************************

// Function to add two numbers
// function addTwoNumbers(num1, num2) {
//     return num1 + num2;
// }
// const number1 = 5;
// const number2 = 7;

// const result = addTwoNumbers(number1, number2);
// console.log(`The sum of ${number1} and ${number2} is ${result}`);




// Creating an empty array and array with some data****************************************************************
// let emptyArray = [];
// let numbersArray = [];

// for (let i = 0; i < 10; i++) {
//     numbersArray.push(i);
// }

// console.log("Empty Array:", emptyArray);
// console.log("Numbers Array (0-9):", numbersArray);


// Variable scope in the function   +++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++

// Local variables in functions 
// function sayHello() {
//     let message = "Hello from inside the function!";
//     console.log(message);
// }
// sayHello();

// function testAvailability() {
//     let y = "I'm only available inside this function";
//     console.log("Inside testAvailability:", y);
// }

// testAvailability();


// function doingStuff(){
//     if(true) {
//         var x="local";
//     }
//     console.log(x);
// }
// doingStuff();


// function doingStuff(task) {
//     let status = `Doing stuff like: ${task}`;
//     console.log(status);

//     status = `Just finished: ${task}`;
//     console.log(status);
// }

// doingStuff("learning JavaScript");

// **************************************************Global Variable*****************************************
// let globalMessage = "!MY friend is Dhananjay ";

// function doingStuff(task) {
//     console.log(globalMessage); 
//     let localMessage = "Doing: " + task;
//     console.log(localMessage);
// }

// doingStuff("JavaScript practice");

// console.log(globalMessage);

// *************************************************************************************************************************
// _________________________________________________________________________________________________________________________

// let varContainingFunction=function(){
//     let varInFunction="I am in a function";
//     console.log("hi there!",varInFunction);
// };
// varContainingFunction();

// function tester(para1,para2){
//     return para1 + " "+ para2
// }
// const arg1="argument1";
// const arg2="argument";
// tester(arg1,arg2);

// function myFunction(x,y){
//     console.log(x+y);
// }
// myFunction(10+5)

// function addTwoNumbers(x=2,y=3){
//     console.log(x+y)
// }
// addTwoNumbers();
// addTwoNumbers(6,6);
// addTwoNumbers(10);
// addTwoNumbers(1,2,3,4);

//                          Special fn and operators(arrow function-we can also pass fn as an argument)

//ARROW FUNCTION
//  (param1 ,param2)=>body of function


// function doingStuff(x){
//     console.log(x);
// }

// let doingArrowStuff=x=>console.log(x);
// doingArrowStuff("hii");

// const arr=["Divyanshu","Rai","abesec"];
// arr.forEach(e=>console.log(e));
//                                     SPREAD OPERATOR(used at time of invoking)


// let spread=["so","much","fun"];
// let message=["Jvascript","is",...spread,"and","very","powerful"];
// console.log(message);

// function addTwoNumbers(x,y){
//     console.log(x+y);
// }
// let arr=[5,9];
// addTwoNumbers(...arr);

// function addFourNumbers(x,y,z,a){
//     console.log(x+y+z+a);
// }
// let arr=[6,9];
// let arr2=[7,9];
// addFourNumbers(...arr,...arr2);
//                                                     REST OPERATOR(used at function time)

// function someFunction(param1,...param2){
//     console.log(param1,param2);
// }
// someFunction("hi","there!","how are you");

//                                                        Returning function valu/es
// let result=addTwoNumbers(4,5);
// console.log(result);

// function addTwoNumbers(x,y){
//     return x+y;
//  }
// let resultArr=[];
// for(let i=0;i<10;i++){
//     let result=addTwoNumbers(i,2*i);
//     resultArr.push(result);
// }
// console.log(resultArr);



// let addTwoNumbers=(x,y)=>{
//     console.log("Adding...");
//     return x+y;
// }
// let result=addTwoNumbers(12,15);
// console.log(result);

//           Variables scope in function

//Local variable in function
// function testAvailability(x){
//     console.log("Available here:",x);
// }
// testAvailability("Hii!");
// console.log("Not available here:",x);

// function testAvailability(){
//     let y="Local variable";
//     console.log("Available here:",y);
// }
// testAvailability("Hii!");
// console.log("Not available here:",y);
//*********************************************************************************************************** */
                                     // Anonymous function
// (function(){
//     console.log("IIFE!");
// })();



//****************************************************************************************************** */
                     // Recursive function
// function getrecursion(nr){
   
//     if(nr>0){
//         getrecursion(--nr);
//     }
//     console.log(nr);
   
// }
// getrecursion(3);


// function logRecursive(nr) {
//     console.log("Started function:", nr);
//     if (nr > 0) {
//       logRecursive(nr - 1);
//     } else {
//         console.log("done with recursion");
//     }
//     console.log("Ended function:", nr);
//    }
//    logRecursive(3);

//******************************************************************************************************************** */
                                                  //NESTED FUNCTION
//  function doOuterFunctionStuff(nr) {
//  console.log("Outer function");
//   doInnerFunctionStuff(nr);
//  function doInnerFunctionStuff(x) {
//  console.log(x + 7);
//  console.log("I can access outer variables:", nr);
// }
// }
// doOuterFunctionStuff(2);


//**************************************************Anonymous function & Function callbacks******************* */
// let functionVariable = function () {
//     console.log("Not so secret though.");
//     };
//     functionVariable();

// function doFlexibleStuff(executeStuff) {
//     executeStuff();
//    console.log("Inside doFlexibleStuffFunction.");
//    }
//    doFlexibleStuff(functionVariable);


   // let youGotThis = function () {
   //  console.log("You're doing really well, keep coding!");
   //  };
   //  // setTimeout(youGotThis, 1000);
   //  setInterval(youGotThis, 1000);


//***********************************************quiz************************
   // (function () {
   //    console.log("Welcome");
   // })();
   // (function () {
   //    let firstName = "Laurence";
   // })();
   // let result = (function () {
   //    let firstName = "Laurence";
   //    return firstName;
   // })();
   // console.log(result);
   // (function (firstName) {
   //    console.log("My Name is " + firstName);
   // })("Laurence")
   


   // var addFive1 = function addFive1(num) {
   //    return num + 2;
   //    };
   //    let addFive2 = (num) => num + 2;
   //    console.log(addFive1(14));
