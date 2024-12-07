// Problem 4. Destructuring: Multi-Level Destructuring

// task1 - debugging

const obj = { a: 1,
              b: { 
                c: 2, 
                d: 3 } 
            };

const { a, b: { c } } = obj; // code debugged
console.log(a, c);  // output : 1 2


// task2 - output based question

const data = { user: { profile: { name: "Bob" }, role: "admin" } };

const { user: { profile: { name }, role } } = data;
console.log(`Name : ${name}, Role : ${role}`);  // expected output =>  Name : Bob, Role : admin


