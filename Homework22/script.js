'use strict'

// First task 

let arr = [2, -5, 1, -2, 0, -3, 2, -14];

let positiveArray = arr.filter(function (number) {
    return number > 0;
});

let roots = positiveArray.map(Math.sqrt);

console.log(roots);

// Second task

let arr2 = [4, 3, 5, 5, 0, 4, 8, 6];

let result = arr2.reduceRight(function (sum, current) {
    if (current == 0) {
        return false;
    }
    return sum + current;
}, 0);

console.log(result);

// Third task

function summArguments() {
    let sum = 0;
    for (let i = 0; i < arguments.length; i++) {
        sum = sum + arguments[i];
    }
    return sum;
};

console.log(summArguments(10, 1, 2, 5));
console.log(summArguments(10));