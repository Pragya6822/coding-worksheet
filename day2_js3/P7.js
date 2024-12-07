// Problem 7. Function Currying

// task1 - Debugging
const add = (a) => (b) => (c) => a + b + c;  // Bug removed

const curriedAdd = add(1)(2)(3); 
console.log(curriedAdd);



// task2 output based question
const cuboid = (length) =>(width) =>(height) => length * width + height;

const volume = cuboid(5)(4)(2)
console.log(volume); //output = 22