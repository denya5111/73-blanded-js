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

//Напишіть код для пошуку пароля в масиві
//Через включення і тернарний оператор
// const passwords = ['ajax123', 'polly456', 'mango789', 'semiBold'];
// const password = 'semiBold';

// const answer = passwords.includes(password) ? `Пароль ${password} знайдено` : `Пароль ${password} не знайдено`;
// console.log(answer);

//Напишіть скрипт, який замінює реєстрацію кожного символу
//в стороке на противоположный
//Например 'JavaScript' повинен вернути 'jAVAsCRIPT'

// let fraze = "JavaScript";

// fraze = fraze.split("")
// let string = [];
// for (let letter of fraze) {
//     if (letter === letter.toLowerCase()) {
//         string.push(letter.toLocaleUpperCase());
//     } else {
//         string.push(letter.toLowerCase())
//     }
// }
// console.log(string.join(""));

//Написать функцию, которая разобьет документ на массив
//по 2 буквы, если у последней буквы нет пары, то
//должна удерживаться 1 буква.
//Дана строка 'abc' - вернет ['ab', 'c']
// *если у последней буквы нет пары, вернет _
// строка 'abc' - вернет ['ab', 'c_']

// let stringLetters = "Привіт Україно!";
// stringLetters = stringLetters.split("");
// const string2Letters = [];
// for (let i = 0; i < stringLetters.length; i += 2) {

//     string2Letters.push(stringLetters[i] + (stringLetters[i + 1] ?? "_"))

// }

// console.log(string2Letters);

//Напиши функцію findSmallerNumber(numbers)
//яка шукає найменше в масиві
//Додай перевірку що функція отримує масив

// function findSmallerNumber(numbers) {
//   //   return Math.min(...numbers);
//   let minNum = numbers[0];
//   for (let number of numbers) {
//     minNum = number < minNum ? number : minNum;
//   }

//   // if (number < minNum) {
//   //   minNum = number;
//   // }

//   return minNum;
// }
// const numbers = [2, 5, 35, 56, 12, 24, 7, 80, 3];

// console.log(findSmallerNumber(numbers));

//Напишіть функцію caculculateAverage()
//яка приймає довільну кількість
//Аргументів і повертає їхнє середнє значення.
//Додати перевірку, що аргументи це числа.

// function caculculateAverage(...args) {
//   let total = 0;
//   let index = 0;

//   for (let arg of args) {
//     if (typeof arg !== 'number') {
//       continue;
//     }

//     total += arg;
//     index += 1;
//   }
//   console.log(total / index);
// }

// caculculateAverage(2, 5, 35, 56, 'f', 12, 24, 7, 't', 80, 3);

//Напишіть функцію findTheColor()
//яка приймає назву кольору
//визначає його наявність у масиві
//якщо колір є, встановлює його як фон документа
//якщо кольору немає виводить console.error('Такий колір не знайдено');
//і встановлює колір документа червоний
// document.body.style.background = 'red';
//const colors = ['blue', 'yellow', 'olive', 'fuchsia', 'lime', 'aqua', 'maroon']

// function findTheColor(color, colors) {
//   document.body.style.background = 'red';
//   if (colors.includes(color)) {
//     document.body.style.background = color;
//   } else {
//     console.error('Такий колір не знайдено');
//   }
// }

// const colors = ['blue', 'yellow', 'olive', 'fuchsia', 'lime', 'aqua', 'maroon'];

// findTheColor('yellow', colors);

//Створіть функцію multiplyNumeric(obj),
//яка множить всі числові властивості об'єкта obj на 2.

// let menu = {
//   width: 200,
//   height: 300,
//   title: 'My menu',
// };

// function multiplyNumeric(obj) {
//   for (let key in obj) {
//     if (typeof obj[key] === 'number') {
//       obj[key] *= 2;
//     }
//   }
//   console.log(obj);
// }

// multiplyNumeric(menu);

// Уже ребра татар бережу
// Де помити мопед

// const string = 'Уже ребра татар бережу';
// const string2 = 'Де помити мопед';

// function checkString(string) {
//   const normalizeString = string.toLowerCase().replaceAll(' ', '');
//   const reverseString = normalizeString.split('').reverse().join('');

//   return normalizeString === reverseString;
// }

// console.log(checkString(string));
// console.log(checkString(string2));

//Реалізувати фільтр за властивістю price  та отримати
//только назву моделі

// const vehicles = [
//   { make: 'Honda', model: 'CR-V', type: 'suv', amount: 14, price: 24045, onSale: true },
//   { make: 'Honda', model: 'Accord', type: 'sedan', amount: 2, price: 22455, onSale: true },
//   { make: 'Mazda', model: 'Mazda 6', type: 'sedan', amount: 8, price: 24195, onSale: false },
//   { make: 'Mazda', model: 'CX-9', type: 'suv', amount: 7, price: 31520, onSale: true },
//   { make: 'Toyota', model: '4Runner', type: 'suv', amount: 19, price: 34210, onSale: false },
//   { make: 'Toyota', model: 'Sequoia', type: 'suv', amount: 16, price: 45560, onSale: false },
//   { make: 'Toyota', model: 'Tacoma', type: 'truck', amount: 4, price: 24320, onSale: true },
//   { make: 'Ford', model: 'F-150', type: 'truck', amount: 11, price: 27110, onSale: true },
//   { make: 'Ford', model: 'Fusion', type: 'sedan', amount: 13, price: 22120, onSale: true },
//   { make: 'Ford', model: 'Explorer', type: 'suv', amount: 6, price: 31660, onSale: false },
// ];

// const newArray = vehicles.filter(car => car.price > 30000).map(car => car.model);

// //Отримати машини на розпродажі і сортувати за зменшенням ціни

// const onSaleCar = vehicles.filter(car => car.onSale).sort((a, b) => b.price - a.price);
// console.table(onSaleCar);

//3. Необхідно написати функцію (isEqualSymbols), яка приймає
//в аргументах два рядки і повертає true, якщо ці рядки
//складаються з ідентичних літер і false інакше.
//isEqualSymbols('кот', 'ток'); // виведе true
//isEqualSymbols('кот', 'тик') // виведе false

// function isEqualSymbols(str1, str2) {
//   const array1 = str1.split('');
//   const array2 = str2.split('');
//   return array1.every(a => array2.includes(a));
// }

// console.log(isEqualSymbols('кот', 'ток'));
// console.log(isEqualSymbols('кот', 'тик'));
