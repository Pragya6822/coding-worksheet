// Problem 6. Rest Parameters
// task1- Debugging


function multiply(...nums) {
    return nums.reduce((prod, num) => prod * num);
}
console.log(multiply(1,2,3,4,5));

// task2 - output based questuin
// Write a function that accepts any number of numbers and returns their maximum.

function findMax(...numbers) {
    return Math.max(...numbers);
}
console.log(findMax(1,2,3));  // output : 3