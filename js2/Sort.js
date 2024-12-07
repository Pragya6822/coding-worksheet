// Problem 4 - Sort

// task 1 - Debugging

const nums = [1, 10, 2];
nums.sort((a,b)=> a-b);
console.log(nums);

// task 2 -  Output based question
// Sort the following array of objest by age in descending order

let object = [
  {name: 'Alice', age: 25},
  {name: 'Bob', age: 30}
];

object.sort((a,b)=> b.age - a.age);
console.log(object);
// expected output: [{"name":"Bob","age":30},{"name":"Alice","age":25}]


