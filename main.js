// Exercise 1
function outerFunction() {
    let outerVar = "I'm outside!";
    function innerFunction() {
        let innerVar = "I'm inside!";
        return innerVar
        console.log(outervar);
        console.log(innerVar);
    }
    innerFunction();
}
outerFunction();


// Exercise 2
num();
function num() {
    math = 2+2
    console.log(math)
}


//Exercise 3
function newNum() {
    let number = function () {
        let math2 = 3+3;
        return math2;
    }
    number();
    return number()
}
newNum();
console.log(newNum())


// Exercise 4
let myNum = 5
function myNum4() {
    myNum = 6
}
function myNum4b() {
    let myNum = 7
}
myNum4();
myNum4b();
console.log(myNum)


// Exercise 5 Come Back to this
// let myPin = 333

// function functionFactory(pin) {
    
//     let newPin = myPin

//     function newNum() {
       
//     }

// }

// functionFactory(333);
// console.log()


// Exercise 6
function hoistingTest() {
    console.log(thing)

    let thing = 45
}
hoistingTest();


// Exercise 7
let x = 0;
function setupCounter(x) {
    let num = x;
    console.log(x)
    
    if (x) != 10, x+=;
    else 'wrong';
    return x;
    
}

setupCounter();
