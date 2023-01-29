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

// console.log(`Загальна сума введених чисел дорівнює ${total}.`)

// Напишіть цикл, який пропонує ввести
//число більше 100 через prompt.
//Якщо відвідувач ввів інше число - попросити
//Ввести ще раз і так далі.
//Цикл має питати число, поки відвідувач не
//введе число більше 100, або натисне кнопку
//Скасування в prompt

// let numberInput = prompt("введіть число  більше 100");

// do {
//     console.log(numberInput)
// } while (numberInput <= 100);
// // while (numberInput <= 100) {
// //     numberInput = prompt("введіть число повторно більше 100");
// // }

// console.log(numberInput)

// Створіть масив styles з елементами «Джаз» та «Блюз».
// let styles = ["Jaz", "Bluz"];
// // styles.push("Roc-n-Roll");
// // styles.splice(styles.length, 0, "Roc-n-Roll")
// // styles = [...styles, "Roc-n-Roll"]
// styles[styles.length] = "Roc-n-Roll"

// // styles.splice(1, 1, "Classic");
// const index = styles.indexOf("Bluz")
// // styles.splice(index, 1, "Classic");
// styles[index] = 'Classic';

// const dleArie = styles.splice(0, 1);

// // console.log(dleArie[0]);

// // styles.unshift("Rap", "Reggy");
// // styles.splice(0, 0, "Rap", "Reggy");
// styles = ["Rap", "Reggy", ...styles]
// console.log(styles);

//Додайте "Рок-н-рол" в кінець.
// Замініть значення "Блюз" на "Класика".
//Видалить перший елемент масиву і виведіть його в консоль.
//Вставте «Реп» і «Реггі» на початок масиву.

//Напишіть функцію min(a, b), яка повертає
//менше з чисел a, b
//Потрібно додати перевірку, що функція отримує числа

// const fn = function (a, b) {
//     return Math.min(a, b);
// }
// const fn = function (a, b) {
//     if (typeof a !== "number" || typeof b !== "number") {
//         return "один з параметрів - не число"
//     }
//     return a < b ? a : b;
// }

// console.log(fn(12, 5));
// console.log(fn("с", 5));
// console.log(fn(12, "р"));


// const logItems = function (array) {

//     for (let i = 0; i < array.length; i += 1) {

//         console.log(`${i + 1} = ${array[i]}`);
//     }
// }
// logItems(styles);

//Напишіть функцію logItems(array), яка приймає
//масив та використовує цикл for, який для кожного
//елемента масиву виводитиме повідомлення у форматі
//<номер елемента> - <значення елемента>
//Нумерація елементів має починатися з першого.
