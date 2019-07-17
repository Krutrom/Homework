'use strict'

// First task

function isNumberInRange(a) {
    return (a > 0 && a < 10) ? true : false;
}
  
// Second task

function isEven(a) {
    return (a%2 == 0) ? true : false;
}

// Third task

let value = +prompt('value?', '');
switch (value) {
    case 0:
        console.log( 0 );
        break;
    case 1:
        console.log( 1 );
        break;
    case 2:
    case 3:
        console.log( '2,3' );
        break;
}

// Fourth task

function min(a, b) {
    return (a < b) ? a : b;
  }

  