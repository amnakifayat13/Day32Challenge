/*  Write a function that uses the .filter() method to return an array of numbers greater than 10.*/


function filterFunc(numbers: number[]): number[] {
    return numbers.filter(number => number >10)

}
 const numbers = [5, 10, 15, 20,25];
 console.log(filterFunc(numbers));
 