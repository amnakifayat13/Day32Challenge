"use strict";
/* Demonstrate how to use the .reduce() method to calculate the sum of all numbers in an array.*/
function sumCalculation(numbers1) {
    return numbers1.reduce((previousValue, currentValue) => previousValue + currentValue, 0);
}
const numbers1 = [5, 10, 20, 45];
console.log(sumCalculation(numbers1));
