'use strict'

// FIrst task

let arr3 = ['Cat', 'Dog', 'Giraffe'];

function searchArrayWord(word, arr3) {
    for (var i = 0; i < arr3.length; i++) {
        if (arr3[i] == word) return true;
    }

    return false;
}

console.log(searchArrayWord('Cat', arr3));

//  Second task

let arr = [1, 3, 5, 6, 7, 9];

let sum = 0;

for (let i = 0; i < arr.length; i++) {
    sum += arr[i];
}

let result = sum / arr.length;

console.log(result);

// Third task 

let arr2 = [1, 3, 5, 6, 7, 9];

let arrReverse;
for (let i = 0, j = arr2.length - 1; i < j; i++, j--) {
    arrReverse = arr2[j];
    arr2[j] = arr2[i];
    arr2[i] = arrReverse;
}

console.log(arr2);

// Fourht task

let obj = {
    html: 'HTML',
    css: "CSS",
    js: 'ECMA'
}

let keys = [],
    i = 0;
for (keys[i++] in obj) {}
console.log(keys);

// Fifth task

let customOrder = {
    сustomName: 'Roman',
    customTelephone: 80956985747,
    customAdress: 'Poltava city, Sinna str, 24',
    totalAmountOfOrder: 830,
    totalOrderWeight: 2700,
    purchasedGoods: [{
            name: 'Cup',
            price: 100,
            weight: 200
        },
        {
            name: 'Spoon',
            price: 30,
            weight: 100
        },
        {
            name: 'Cattle',
            price: 550,
            weight: 2000
        },
        {
            name: 'Mug',
            price: 150,
            weight: 400
        }
    ]
}