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

// Write a function which takes an array of city objects like such:
// as input and returns a new array containing the cities whose temperature is cooler than 70 degrees.
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

// Write a function which takes an array of city objects like the above problem as input and returns 
// an array of the cities names.
function nameOfCities(cities) {
  let counter = 0;
  let list = [];
  cities.forEach(function(city) {
    list.push(cities[counter]["name"]);
    counter++;
  })
  return list;
}
console.log(nameOfCities([
    { name: 'Los Angeles', temperature: 60.0},
    { name: 'Atlanta', temperature: 52.0 },
    { name: 'Detroit', temperature: 48.0 },
    { name: 'New York', temperature: 80.0 }
]));

// Given an array of people's names Print out 'Good Job, {{name}}!' for each person's name, one on a line.
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
  people.forEach(function(person) {
      console.log(`Good Job, ${person}`)
  })
