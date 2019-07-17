'use strict'

//  First task

let a;

if(a === '1'){
    console.log('Верно');
}else{
    console.log('Неверно');
}

// При а = '1' // верно
// При а = 1 // неверно
// При а = 3 // неверно

// Second task

let item = true; 

if( item != true ){
    console.log('Верно');
}else{
    console.log('Неверно');
}

// При item = true // Неверно
// При item = false // Верно

console.log((item != true) ? 'Верно' : 'Неверно'); // Сокращенная запись

// Third task 

a = 2;

if( a > 0 && a < 4 ){
    console.log('Верно');
}else{
    console.log('Неверно');
}

// При a = 4 // Неверно
// При a = 0 // Неверно
// При a = -3 // Неверно
// При a = 2 // Верно 

// Forth task

let b;

if( a > 0 && a < 12 || b >=7 && b < 15 ){
    console.log('Верно');
}else{
    console.log('Неверно');
}

// Fifth task

let month = 8;

if( month >= 1  && month <= 2 ){
    console.log('зима');
}
if( month >= 3 && month <=5 ){
    console.log('весна');
}
if( month >= 6 && month <=8 ){
    console.log('лето');
}
if( month >= 9 && month <=11 ){
    console.log('осень');
}
if( month == 12 ){
    console.log('зима');
}

// Sixth task

let i;

for (i = 0; i <= 100; i++){
    if( i%2 == 0){
        console.log(i);
    }
}


