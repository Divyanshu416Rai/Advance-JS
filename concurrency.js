//********************************************CALLBACKS*********************************************** */
//A callback is a function passed as an argument to another function, which is then executed after some operation has been completed. Callbacks are a foundational concept in handling asynchronous operations.

// function dosomething(callback){
//     callback();
// }
// function sayHi(){
//     console.log("Hi");
// }
// dosomething(sayHi);
//_____________________________________________________________________________________________

// function judge(grade) {
//     switch (true) {
//         case grade === "A":
//             console.log("You got an A: amazing!");
//             break;
//         case grade === "B":
//             console.log("You got a B: good job!");
//             break;
//         case grade === "C":
//             console.log("You got a C: alright!");
//             break;
//         case grade === "D":
//             console.log("You got a D: you passed.");
//             break;
//         default:
//             console.log("A", grade, "? What does that even mean?");
//     }
// }
//____________________________________________________________________________________________________
// function getGrade(score, callback) {
//     let grade;
//     switch (true) {
//         case score >= 90:
//             grade = "A";
//             break;
//         case score >= 80:
//             grade = "B";
//             break;
//         case score >= 70:
//             grade = "C";
//             break;
//         default:
//             grade = "F";
//     }
//     callback(grade);
// }

// function judge(grade) {
//     switch (grade) {
//         case "A":
//             console.log("You got an A: amazing!");
//             break;
//         case "B":
//             console.log("You got a B: good job!");
//             break;
//         case "C":
//             console.log("You got a C: not bad!");
//             break;
//         case "F":
//             console.log("You got an F: better luck next time!");
//             break;
//         default:
//             console.log("Unknown grade:", grade);
//     }
// }

// getGrade(85, judge);

//******************************************Promises************************************************* */
// let promise =new Promise(function(resolve, reject) {
//     let x=20;
//     if(x>10){
//         resolve(x);
//     }
//     else{
//         reject("Too low");
//     }
// });
// promise.then(function(value){
//     console.log("Resolved with value: "+value);
// }).catch(function(error){
//     console.log("Rejected with error: "+error);
// });
//_____________________________________________________________________________________________
// const promise=new Promise ((resolve, reject)=>{
//     // resolve("success");
//     reject("oops");
// }).then(value=>{
//     console.log(value);
//     return "we";
// }).then(value=>{
//     console.log(value);
//     return "can";
// }).then(value=>{
//     console.log(value);
//     return "chain";
// }).then(value=>{
//     console.log(value);
//     return "promises";
// }).then(value=>{
//     console.log(value);

// }).catch(value=>
// {
//     console.log(value);
// }
// )

//**************************************************Async & Await***************************************** */
// function saySomething(x) {
//     return new Promise((resolve, reject) => {
//         setTimeout(() => {
//             resolve("Hello, world!"+x);
//         }, 1000);
//     });
// }
// async function talk(x) {
//     const result = await saySomething(x); 
//     console.log(result);
// }
// talk(2); 
// talk(4);
// talk(8);