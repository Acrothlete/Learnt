// Template literals 
// implemented with using back quote`` and ${}
// var x = "Hello";
// console.log(`${x} world`)



// const in arrays
// const emails = ['acro1@gmail.com', 'acro2@gmail.com', 'acro3@gmail.com'];
// emails = ['acro4@gmail.com'];
// Above code would throw an error because you cannot assign const variable again but we can..
// emails.push('acro4@gmail.com');
// append items.


// let
// let limit = 200;
// {
//     let limit = 20;
//     console.log("Backstage ", limit);
// }
// console.log("Overall ", limit);
// Output
// Backstage  20
// Overall  200


// var
// var limit = 200;
// {
//     var limit = 20;
//     console.log("Backstage ", limit);
// }
// console.log("Overall ", limit);
// Output
// Backstage  20
// Overall  20

// Both let and const have added benefit of block scoping.




// Spread Operator and Rest Parameters
// Spread Operator
// let a = [20, 30, 40];
// let b = [10, ...a, 50]
// console.log(b)
// output
// [ 10, 20, 30, 40, 50 ]

// Rest operator
// function a(...x){
//     console.log(x)
// }
// Now we can pass any amount of parameter without any restriction
// a(1, 2, 3, 'hello');



// Destructuring assignments on arrays
// let animals = ['lee chong wei', 'lin dan', 'kento momota'];
// let [malaysian, chinese, japanese] = animals; // This line saved two lines.
// console.log(malaysian, japanese, chinese);
 
// Destructuring assignments on objects
// let bPlayer = {
//     name: "lee chong wei",
//     country: "Malaysia"
// }
// let name = bPlayer.name
// let country = bPlayer.country
// Above two lines can be replaced by below one line.
// let {name, country} = bPlayer;

// console.log(name, country);
