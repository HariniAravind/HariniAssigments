"use strict";
function factorial(num) {
    if (num < 0) {
        console.log("The given number is negative");
    }
    let fact = 1;
    for (let i = 2; i <= num; i++) {
        fact *= i;
    }
    return fact;
}
console.log(factorial(2));
