// Problem 6 - Call , Apply and Bind

// task 1 - debugging

const obj = {
    num: 42,
    getNum() {
        return this.num;
    }
};

const detachedGetNum = obj.getNum.bind(obj);  
console.log(detachedGetNum()); 


// task2 - output based question

const obj1 = { a: 1, b: 2, c: 3 }


const sumobj = {
    sum(){
        return this.a + this.b + this.c;
    }
}

console.log(sumobj.sum.call(obj1));  // call method  : output = 6
console.log(sumobj.sum.apply(obj1));  // apply method : output = 6
