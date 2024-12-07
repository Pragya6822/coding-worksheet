// problem 1 - Concurrency in JavaScript: Single-Threaded Nature & Event Loop
//task 1 - DEBUGGING
function fetchData() {
    setTimeout(() => console.log("Task 1"), 0);
    console.log("Task 2");
    Promise.resolve().then(() => console.log("Task 3"));
    setTimeout(()=> console.log("Completed!"),0)
}
fetchData();

//task2 - output based question
console.log("A");
setTimeout(() => console.log("B"), 1000);
Promise.resolve().then(() => console.log("C"));
console.log("D");

//expected output :  A D C B 
