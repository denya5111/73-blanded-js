//Напишіть програму, яка отримає від користувача
//число (кількість хвилин) і виведе у консоль
//Рядок у форматі годин і хвилин
// https://developer.mozilla.org/ru/docs/Web/JavaScript/Reference/Global_Objects/String/padStart
// 70 === 01:10

// const time = 250;

// let minuts = Math.floor(time / 60);

// minuts = String(minuts).padStart(2, 0);

// let seconds = time % 60;

// seconds = String(seconds).padStart(2, 0);

// console.log(`${minuts}:${seconds}`);

//Напишіть цикл, який виводить у консоль
// числа від max до min за спаданням
// Додайте усі парні числа від min до max

// const max = 50;

// const min = 20;

// let sum = 0;

// for (let i = max; i >= min; i -= 1) {

//     if (i % 2 !== 0) {

//     continue;
//   }
//   sum += i;
// }
// console.log(sum);

// Напишіть код, який запитуватиме
//Логін за допомогою prompt і логувати результат
//В консоль браузера

//Якщо відвідувач вводить "Адмін",
//то prompt запитує пароль.
//Якщо нічого не ввели або натиснута клавіша Esc
//Вивести стороку "Скасовано"
// В іншому випадку вивести рядок "Я вас не знаю"

//Пароль перевіряти так:
//Якщо введено пароль "Я головний",
//то вивести рядок "Здрастуйте!"
//інакше виводити рядок "Невірний пароль!"

// const loginInput = prompt("Введіть свій логін");

// const loginInput = prompt('Введіть свій логін');
// console.log(loginInput);

// if (loginInput === 'Адмін') {
//   const password = prompt('Введіть свій пароль');
//   if (password === 'Я головний') {
//     console.log('Здрастуйте!');
//   } else {
//     console.log('Невірний пароль!');
//   }
// } else if (loginInput === null || loginInput === '') {
//   console.log('Скасовано');
// } else {
//   console.log('Я вас не знаю');
// }

// При завантаженні сторінки користувачеві пропонується
//В prompt ввести число. Введення додається до значення
//Змінної total.
//Операція введення числа триває до того часу,
//Поки користувач не натисне кнопку Cancel в prompt.
//Після того, як користувач припинив введення натиснувши на
//кнопку Cancel, показати alert з рядком "Загальна сума введених чисел дорівнює [число]."
//Робити перевірку,що користувач ввів саме число,
//а не довільний набір символів не потрібно.

// let total = 0;

// let numberInput = prompt("введіть число");

// // while (numberInput) {

// //     total += Number(numberInput);
// //     numberInput = prompt("введіть число");
// // }
// do {
//     total += Number(numberInput);
//     numberInput = prompt("введіть число");
// } while (numberInput);

// console.log(Загальна сума введених чисел дорівнює ${total}.)

// Напишіть цикл, який пропонує ввести
//число більше 100 через prompt.
//Якщо відвідувач ввів інше число - попросити
//Ввести ще раз і так далі.
//Цикл має питати число, поки відвідувач не
//введе число більше 100, або натисне кнопку
//Скасування в prompt

// let numberInput = prompt('Введіть число більше 100');

// while (numberInput < 100) {
//   numberInput = prompt('Введіть число більше 100');
// }
// console.log(numberInput);

//  У змінній min лежить число від 0 до 59.
// Визначте, в яку чверть години потрапляє
// це число(у першу, другу, третю чи четверту).
//var min = 10;

// const min = 15;

// if (min >= 0 && min <= 15) {
//   console.log('Це число потрапляє у першу чверть');
// } else if (min >= 15 && min <= 29) {
//   console.log('Це число потрапляє у другу чверть');
// } else if (min >= 30 && min <= 44) {
//   console.log('Це число потрапляє у третю чверть');
// } else if (min >= 45 && min <= 59) {
//   console.log('Це число потрапляє у четверту чверть');
// }

// if (min <= 15) {
//   console.log('Це число потрапляє у першу чверть');
// } else if (min <= 29) {
//   console.log('Це число потрапляє у другу чверть');
// } else if (min <= 44) {
//   console.log('Це число потрапляє у третю чверть');
// } else if (min <= 59) {
//   console.log('Це число потрапляє у четверту чверть');
// }

// switch (min) {
//   case min >= 0 && min <= 15 && min:
//     console.log('Це число потрапляє у першу чверть');
//     break;
//   case min >= 15 && min <= 29 && min:
//     console.log('Це число потрапляє у другу чверть');
//     break;
//   case min >= 30 && min <= 44 && min:
//     console.log('Це число потрапляє у третю чверть');
//     break;
//   case min >= 45 && min <= 59 && min:
//     console.log('Це число потрапляє у четверту чверть');
//     break;
//   default:
//     console.log('Ви не потрапили в діапазон годин');
//     break;
// }

//Дано рядок, що складається із символів, наприклад, 'abcde'.
// Перевірте, що першим символом цього рядка є буква 'a'.
// Якщо це так - виведіть 'так', інакше виведіть 'ні'.

// const string = 'abcde';

// if (string[0] === 'a') {
//   console.log('так');
// } else {
//   console.log('ні');
// }

// if (string.startsWith('a')) {
//   console.log('так');
// } else {
//   console.log('ні');
// }

// console.log(string.startsWith('a') ? 'так' : 'ні');

//Якщо  число ділитися на 3 повертати
//fizz якщо ділитися на 5 повертати buzz
//Елсі ділитися на 3 і на 5 повернути fizzbuzz

// const number = 20;
// for (let i = 1; i <= number; i += 1) {
//   if (i % 3 === 0 && i % 5 === 0) {
//     console.log('fizzbuzz');
//   } else if (i % 3 === 0) {
//     console.log('fizz');
//   } else if (i % 5 === 0) {
//     console.log('buzz');
//   } else {
//     console.log(i);
//   }
// }

//1. Використовує функцію if... else,
//напишіть код, який буде запитаний:
//"Яке офіційне ім'я JavaScript?"
//Якщо користувач вводить "ECMAScript",
//то показати через сповіщення: "Вірно!"
//у протилежному випадку показати:"Не знаєте? ECMAScript!"

// const string = prompt("Яке офіційне ім'я JavaScript?");

// if (string === 'ECMAScript') {
//   console.log('Вірно');
// } else {
//   console.log('Не знаєте? ECMAScript!');
// }

// console.log(string === 'ECMAScript' ? 'Вірно' : 'Не знаєте? ECMAScript!');
