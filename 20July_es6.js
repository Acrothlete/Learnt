import { bestTPlayers, total } from './tennisPlayers.js';
// Revision of arrow function and using it with map and filter

// setTimeout method
// console.log("Wait...")
// setTimeout(() => {
//     console.log("Woohoo!");
// }, 2000);


// map function
// comapare the three codes below

// First one
// values = [10, 20, 30, 40];
// var double = (n) => {
//     return n*2;
// }
// var doubledArray = values.map(double);
// console.log(doubledArray);

// Second one
// values = [10, 20, 30, 40];
// var doubledArray = values.map((n) => {
//     return n*2;
// });
// console.log(doubledArray);

// Third one
// values = [10, 20, 30, 40];
// var doubledArray = values.map((n) => n*2);
// console.log(doubledArray);


// FILTER METHOD
// let points = [12, 3, 7, 21, 25, 10];
// We need highscores greater than 18
// let highScores = points.filter((n) => n>18);
// console.log(highScores);


// Repeat method
// Below code will repeat 20 times Hii
// let b = "Hii\n".repeat(20);
// console.log(b);


// String Helper methods
// startsWith, endsWith, includes
// let bPlayers = "Kento Momota"
// console.log(bPlayers.startsWith("Kento"));
// true
// console.log(bPlayers.startsWith("kento"));
// false because our string started with capital K
// console.log(bPlayers.endsWith("Momota")); // output true
// console.log(bPlayers.includes("en"))


// Modules 
// We have seperate js file name tennisPlayers.js contains an array named bestTPlayers and a total variable.
// We want to include those in our file for this on the top we have to import them

console.log(bestTPlayers);
console.log(total);

