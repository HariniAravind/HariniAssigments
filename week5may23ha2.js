"use strict";
function fibonacci(n) {
    if (n < 0) {
        console.log("its a negative num");
    }
    const fibseries = [0, 1];
    for (let i = 2; i < n; i++) {
        const fib = fibseries[i - 1] + fibseries[i - 2];
        fibseries.push(fib);
    }
    return fibseries;
}
console.log(fibonacci(3));
