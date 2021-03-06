// // Write a function which takes an array of numbers as input and returns a new array containing only the 
// // even numbers in the given array.

// // Creates a function to retrieve even numbers.
// function getEvens(allNumbers) {

//     // Creates and empty array.
//     evenNumbers = [];

//     // Loops through each number in the array passed in the function.
//     allNumbers.forEach(function(number) {

//         // If the number is divisible by 2.
//         if (number % 2 == 0) {
        
//         // We push it into an empty array.
//         evenNumbers.push(number);

//         }
//     })
//     // Return the modified array.
//     return evenNumbers;
// }
// // We log the function to the console and call it.
// console.log(getEvens([1, 2, 3, 4, 5, 6, 7, 8, 9, 10]));

// // Write a function which takes an array of numbers as input and returns a new array containing only 
// // the positive numbers in the given array.
// function getPositive(list) {
//     positiveNumber = [];
//     list.forEach(function(number) {
//         if (number > 0) {
//             positiveNumber.push(number);
//         }
//     });
//     return positiveNumber;
// }
// console.log(getPositive([1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 0, -1, -2, -3, -4, -5, -6, -7, -8, -9, -10]));

// // Write a function which takes an array of numbers as input and returns a new array containing result of 
// // squaring each of the numbers in the given array by two. Example: squareTheNumbers([1, 2, 3]) should give 
// // [1, 4, 9].

// function squared(list) {
//     let newList = [];
//     list.forEach(function(num) {
//         newList.push(num * num);
//     })
//     return newList;
// }
// console.log(squared([1, 2, 3, 4, 5, 6, 7, 8, 9, 10]));

// // Write a function which takes an array of city objects like such:
// // as input and returns a new array containing the cities whose temperature is cooler than 70 degrees.
// function cooler(cities) {
//   let count = 0;
//   cities.forEach(function(city) {
//     if (cities[count]["temperature"] < 70) {
//       console.log(city);
//       count++;
//     }
//   })
// }
// cooler([
//     { name: 'Los Angeles', temperature: 60.0},
//     { name: 'Atlanta', temperature: 52.0 },
//     { name: 'Detroit', temperature: 48.0 },
//     { name: 'New York', temperature: 80.0 }
// ]);

// // Write a function which takes an array of city objects like the above problem as input and returns 
// // an array of the cities names.
// function nameOfCities(cities) {
//   let counter = 0;
//   let list = [];
//   cities.forEach(function(city) {
//     list.push(cities[counter]["name"]);
//     counter++;
//   })
//   return list;
// }
// console.log(nameOfCities([
//     { name: 'Los Angeles', temperature: 60.0},
//     { name: 'Atlanta', temperature: 52.0 },
//     { name: 'Detroit', temperature: 48.0 },
//     { name: 'New York', temperature: 80.0 }
// ]));

// // Given an array of people's names Print out 'Good Job, {{name}}!' for each person's name, one on a line.
// var people = [
//     'Dom',
//     'Lyn',
//     'Kirk',
//     'Autumn',
//     'Trista',
//     'Jesslyn',
//     'Kevin',
//     'John',
//     'Eli',
//     'Juan',
//     'Robert',
//     'Keyur',
//     'Jason',
//     'Che',
//     'Ben'
//   ];
//   people.forEach(function(person) {
//       console.log(`Good Job, ${person}`)
//   })

// // Use the call3Times function to print "Hello, world!" 3 times.

//   function call3Times(fun) {
//     fun();
//     fun();
//     fun();
//   }
// let string = "Hello, world!";

// function fun() {
//    console.log(string);
// }

// function call3Times(fun) {
//  fun();
//  fun();
//  fun();
// }

// call3Times(fun);

// You will write a function callNTimes that takes two arguments: times as a number, and fun as a 
// function. It will call that function for that many times. Example:
// function fun() {
//     console.log(`Hello World ${count}`);
//   }
//   let count = 0;
//   function callNTimes(times, fun) {
//       while (count <= times) {
//           fun();
//           count++;
//       }
//   }
//   callNTimes(20, fun);

// Write a strMultiply function which takes two arguments:

// str - the string to multiply
// times - number of times to multiply
// Example:

// > strMultiply('abc', 5)
// 'abcabcabcabcabc'
// You may not use the native repeat method that strings provide. But you can use the range function defined below.

// You may use the following range function as is:

// function range(min, max) {
//   var arr = [];
//   for (var i = min; i < max; i++) {
//     arr.push(i);
//   }
//   return arr;
// }
// function repeated(str, times) {
//   list = [];
//   count = times;
//   while (count > 0) {
//     list.push(str);
//     count--;
//   }
//   return list.join("");
// }
// console.log(repeated("Hi", 12))

// Sort an array
// Given an array of strings such as the array of names given in one of the "Good Job" problem, 
// sort them by alphabetically order.
// var people = [
//         'Dom',
//         'Lyn',
//         'Kirk',
//         'Autumn',
//         'Trista',
//         'Jesslyn',
//         'Kevin',
//         'John',
//         'Eli',
//         'Juan',
//         'Robert',
//         'Keyur',
//         'Jason',
//         'Che',
//         'Ben'
//       ];
// console.log(people.sort());

// Sort an array, 2
// Sort the same array, but not by alphabetically order, but by how long each name is, shortest name first.
var people = [
        'Dom',
        'Lyn',
        'Kirk',
        'Autumn',
        'Trista',
        'Jesslyn',
        'Kevin',
        'John',
        'Eli',
        'Juan',
        'Robert',
        'Keyur',
        'Jason',
        'Che',
        'Ben'
];
console.log(people.sort(function(a, b) {
    return a.length - b.length;
}));