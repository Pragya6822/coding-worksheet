// Problem 3 - Frequency Creation in Objects using Reduce

//task 1 -  Debugging
const chars = "aabbc";
const freq = chars.split("").reduce((acc, char) => {
    acc[char] = (acc[char] || 0) +1;
    return acc; // Initial value provided by 1
}, {});
console.log(freq);


// task2 - output based question

const arr = [1, 2, 3, 4, 5]

const OddEvenFreq = arr.reduce((acc, num) => {
    const key = num % 2 === 0? 'even' : 'odd';
    acc[key] = (acc[key] || 0) + 1;
    return acc;    
}, {})

console.log(OddEvenFreq) // Expected Output: { odd: 3, even: 2 }