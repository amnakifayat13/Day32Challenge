"use strict";
/* Use the .map() method to create a new array that contains the length of each word from an array of words.*/
const words = ["Apple", "Pakistan", "Typescript", "Javascript"];
const lengths = words.map(word => word.length);
console.log(lengths);
