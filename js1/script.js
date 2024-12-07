// Problem 1  - Dynamic vs Static Typing
// 1)
function calculateArea(length, width) {
    return length * width;
}
console.log(calculateArea(10, 5)); // Expected: 50

// 3)
function sum(arr){
    let total = 0
    for(let i=0 ; i<arr.length ; i++){
        total += Number(arr[i])
    }
    
    return total;
}
let arr = ["10" , 20 ,"30"]
console.log(sum(arr));  // Expected:60

// 4) comparing Dynamic 
let x = 10
console.log(typeof x); // Expected: number
let y = "10"
console.log(typeof y); // Expected: string
let z= true
console.log(typeof z); // Expected: boolean

//  Dynamic typing with type coercion
let ans = "5" + 10  // => str + num
console.log(ans); // Expected: 510
console.log(typeof ans); // Expected: string




// Problem 2  - String Concatenation and Type coercion

// 1)
let a = 10;
let b = 5;
console.log(a + b); // Expected Output: 15


// 2)
let input = ["Hello", 42 , true]
res = ""

for(let i=0 ; i<input.length ; i++){
    res += String(input[i])  // explicit conversion
}
console.log(res) // Expected: "Hello42true"

// 4) (== vs ===)

let num1 = 10
let num2 = "10"

console.log(num1 == num2)  // expected: true 
console.log(num1 === num2) // expected: false 



// Problem 3 - Function : Declarative, Expression , Anonymous , Arrow
// 1)
const multiply = (a, b) => { return a * b };
console.log(multiply(2, 3)); // Expected Output: 6

// 3)

const double = ( arr1 , cb) => {
    return arr1.map(cb)
}
let res1 = double([1,2,3], (num) => num * 2)
console.log(res1) // Expected Output: [2,4,6]




// Problem 4 - Method : Function vs Arrow Function and this

// 1)
const obj = {
    name: "JavaScript",
    getName: function(){
        return this.name;
    } 
};
console.log(obj.getName()); // Expected Output: "JavaScript"

// 3)
const obj1 = {
    name: "React",

    getCode: function(){
        return this.name;
    } ,

    getBoundCode: function(){
        return this.getCode.bind(this);
    },
};

console.log(obj1.getCode()); // Expected Output: React
const bindsCallback= obj1.getBoundCode()
console.log(bindsCallback()) //Expected output: React



// Problem 5 - Global Execution Context and Functional Execution Context with call Stack
// 1)
// console.log(name);  variable consoled before declaration
var name = "JavaScript";
console.log(name)



