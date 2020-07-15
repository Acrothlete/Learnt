// Js let
// The let statement allows you to declare a variable with block scope.
// var x = 10;
// Here x is 10
// {
//   let x = 2;
  // Here x is 2
// }
// Here x is 10

//Js const
// Constants are similar to let variables, except that the value cannot be changed.



// var x = function(a,b){
//     return a*b;
// }
// Above function can be replaced by arrow function in one line and const keyword is necessary.
// const x = (a,b) => a*b;

// var result = x(20,2);
// console.log(result)



// Classes(type of function), properties are assigned in constructor method which get called when 
// object is initialised.
// class badmintonRacquet{
//     constructor(brand){
//         this.badmintonRacquetName = brand;
//     }
// }

// x = new badmintonRacquet('yonex');
// console.log(x.badmintonRacquetName);



// ES6 allows Default parameter values.
// function myFunction(x, y = 10) {
//     // y is 10 if not passed or undefined
//     return x + y;
//   }
//   myFunction(5); // will return 15



// Array.find() myFunction below takes 3 arguments value, index and array
// var numbers = [4, 9, 16, 25, 29];
// var first = numbers.find(myFunction);

// function myFunction(value, index, array) {
//   return value > 18;
// }
// similarly Array.findIndex() finds index


// isInteger(), isSafeInterger(), ifFinite(), isNan()
// The Number.isInteger() Method
// The Number.isInteger() method returns true if the argument is an integer.


// The Number.isSafeInteger() Method
// A safe integer is an integer that can be exactly represented as a double precision number.
// The Number.isSafeInteger() method returns true if the argument is a safe integer.

// The global isFinite() method returns false if the argument is Infinity or NaN.

// The global isNaN() method returns true if the argument is NaN. Otherwise it returns false:


