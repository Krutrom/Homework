'use strict'

// First task

function fib(n) {
    return n <= 1 ? n : fib(n-1) + fib(n-2);
}

console.log( fib(5) ); 

function fib(n) {
    let a = 1, b = 1;
    for (let i = 3; i <= n; i++) {
      let c = a + b;
      a = b;
      b = c;
    }
    return b;
}

console.log( fib(5) );


// Second task 

let n = 1000;
let num = 0;

while (n > 50) {
    num++;
	n = n / 2;
}

console.log(n);
console.log(num);



