// Problem 5. Spreading

// task1 - debugging
const obj1 = { a: 1 };
const obj2 = { a: 2, b: 3 };
const merged = { ...obj2, ...obj1 };
console.log(merged);

// task2 - output based question
const arr1 = [1, 2]
const arr2 = [2, 3]
const mergeArr = [...new Set([...arr1, ...arr2])]
console.log(mergeArr)

