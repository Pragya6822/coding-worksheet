// Problem 5 - "this" keyword

//task 1 - Debugging

const obj = {
    name: "Alice",
    greet: function () {
        console.log(`Hello, ${this.name}`); // issue resolved
    }
};

obj.greet(); // output : Hello, Alice


// task2 - output based question 

function Person(name){
    this.name = name;
    this.greet = function(){
        console.log(`My name is ${this.name}`)  
    }
}
let person = new Person("Alice")
person.greet();
// expected output :My name is Alice