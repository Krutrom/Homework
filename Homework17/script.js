'use strict'

// first task

let hours = 3, 
    minutesInOneHour = 60, 
    secondsInOneMinute = 60;
let secondsToHours = secondsInOneMinute * minutesInOneHour * hours;
console.log(`В ${hours} часах: ${secondsToHours} секунд`);

// second task

let num = 1;
num += 12;
num -= 14;
num *= 5;
num /= 7;
num += 1;  // or num++ ++num
num -= 1;  // or num-- --num
alert(num);

// third task

let a = 10, 
    b = 2, 
    c = 5;
console.log( a + b + c );

// fourth task 

a = 17;
b = 10;
c = a - b;
let d = 7;
let result = c + d;
console.log( result );

// fifth task

let name = 'Roman';
console.log(`Привет, ${name}!`);