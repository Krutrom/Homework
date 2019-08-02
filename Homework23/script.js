'use strict'

// First task

let time = new Date();

let getHours = 23 - time.getHours();
let minutes = 59 - time.getMinutes();
let seconds = 59 - time.getSeconds();

console.log(`До конца дня осталось: ${getHours} часов ${minutes} минут ${seconds} секунд`);

// Second task

let now = new Date();
let today = new Date(now.getFullYear(), now.getMonth(), now.getDate());
let diff = now - today;
let result = Math.round(diff / 1000);

console.log(`C начала дня прошло: ${result} секунд`);

// Third task

function getWeekDay(date) {
    let days = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];

    return days[date.getDay()];
}
let date = new Date(2013, 0, 25);
console.log(getWeekDay(date));

//Fourth task

function daysLeftToBirthday() {
    let dateOfBirthday = prompt('Введите дату вашего рождения в формате YYYY-MM-DD', '');
    let dayOfBirth = new Date(Date.parse(dateOfBirthday));
    let now = new Date();
    let newDate = dayOfBirth.setFullYear(now.getFullYear());
    if (newDate < now) {
        dayOfBirth.setFullYear(now.getFullYear() + 1);
    }
    let sec = 24 * 60 * 60 * 1000;
    let dayswait = Math.round((dayOfBirth.getTime() - now.getTime()) / sec);

    console.log(`До Вашего дня рождения осталось: ${dayswait} дней`);
}

daysLeftToBirthday();