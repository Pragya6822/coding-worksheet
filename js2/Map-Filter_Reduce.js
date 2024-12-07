// Problem 2 - Map ,Filter , Reduce & Method Chaining

// task1 - Debugging

const nums = [10, 20, 30];
const result = nums.filter((n) => n % 2 == 0).map((n) => n / 5); // Bug: Improper math operation
console.log(result.reduce((acc, num)=> acc + num, 0));  // expected output = 2+4+6 => 12



// task2  - Output based question

const arr = [1, 2, 3, 4, 5];    
// double the even numbers and sum them
const result1 = arr.filter((n) => n % 2 === 0).map((n) => n * 2); 
const sum = result1.reduce((acc, curr) => acc + curr, 0); 
console.log(sum);  // expected output: 12