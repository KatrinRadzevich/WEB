"use strict";
// /*
// Задание 1:
// 1. Создать две переменные и спросить у пользователя значения для данных
// переменных. Одна переменная будет хранить имя пользователя, другая его возраст.
// 2. Вывести на экран текст:
// “Добро пожаловать, `имя`. Ваше количество оборотов вокруг солнца - `возраст`.”
// Тайминг: 15 минут.
// */

// let name = String(prompt('Введите имя'));
// // let age = Number(prompt('Введите возраст'));
// let age = Number.parseInt(prompt('Введите возраст'));
// // let age = +prompt('Введите возраст');
// alert(`Добро пожаловать, ${name}. Ваше количество оборотов вокруг солнца - ${age}.`);

// 1. Найти остаток от деления переменных `a` на `b`, где a = 13, b = 5.
// const a = 13, b = 5;
// const result = a % b;
// alert(result);
// 2. Что выведет на экран (Сначала проговорите, потом проверьте)
// ```
// let a;
// alert(a);
//undefined
// ```
// 3. Что выведет на экран (Сначала проговорите, потом проверьте)
// ```
// alert('abc' * 3);
// NaN
// ```
// 4. Что выведет на экран (Сначала проговорите, потом проверьте)
// ```
// alert(1 / 0); //Infinity
// alert(-1 / 0); //-Infinity
// ```
// 5. Что выведет на экран (Сначала проговорите, потом проверьте)
// ```
//  alert('2' * '3'); //6

// 1. Сознательно допустите ошибку в вашем коде. Убедитесь, что ошибка появляется
// в консоли. Определите, в какой строке кода случилась ошибка.
// 2. Необходимо вывести в консоль результат суммы переменных a = '2', b = '3'.
// const a = "2";
// const b = "3";
// console.log(a + b);
// 3. Пользователь с клавиатуры вводит 2 числа, необходимо в консоль вывести весь
// текст ниже, одной строкой с переносами строк:

// const a = Number(prompt("Введите первое число"));
// const b = Number(prompt("Введите второе число число"));
// console.log(`Сумма чисел равна ${a + b}.
// Разность чисел равна  ${a - b}.
// Произведение чисел равно  ${a * b}.
// Частное чисел равно  ${a / b}.
// Остаток от деления чисел равен  ${a % b}.`);

// console.log(String(true)); //true
// console.log('a' + true); // atrue
// console.log(Number(true)); // 1
// console.log(true + 1); // 2
// console.log(true + true); // 2
// console.log(true - true); //  0
// console.log(String(true) + Number(true)); // true1

// 1. Пользователь с клавиатуры вводит число. Необходимо создать условный
// оператор, который выведет одну из следующих строк в консоль:
// “Число больше 5”, “Число меньше 5”, либо “Число равно 5”.
// const a = Number(prompt("Введите число"));
// if (Number.isNaN(a)) {
//   console.log("Вы не ввели число");
// } else if (a > 5) {
//   console.log("Число больше 5");
// } else if (a < 5) {
//   console.log("Число меньше 5");
// } else if (a === 5) {
//   console.log("Число равно 5");
// }

// 2. Создайте две переменные test1 и test2. Проверьте, равны ли их значения и
// выведите соответствующее сообщение.
// const test1 = 1;
// const test2 = 'g';
// // if (test1 === test2) {
// //     console.log('Переменные равны');
// // } else{
// //     console.log('Переменные не равны');
// // }
// console.log(test1 === test2 ? "Переменные равны" : "Переменные не равны");
// 3. Пользовать с клавиатуры вводит 2 числа, необходимо определить, какие из двух
// чисел минимальное и вывести в консоль строку “Минимальное число `число`”.
// const a = Number(prompt("Введите первое число"));
// const b = Number(prompt("Введите второе число число"));
// console.log(a > b ? `Минимальное число ${b}` : `Минимальное число ${a}`);
// console.log(Math.min(a,b));
// 4. Попросить пользователя ввести число, которое будет больше нуля и меньше 15.
// Если пользователь ввел значение, о котором его попросили, необходимо вывести
// сообщение “Спасибо за число `число`.”, в противном случае, вывести сообщение:
// “А вы, я смотрю, хулиганите! `число` - неверное значение.”
// const a = Number(
//   prompt("Введите число, которое будет больше нуля и меньше 15")
// );
// if (a > 0 && a < 15) {
//   alert(`Спасибо за число ${a}.`);
// } else {
//   alert(`А вы, я смотрю, хулиганите! ${a} - неверное значение.`);
// }

const num = 2367;
console.log( num % 10);
console.log(Math.trunc(num / 10) % 10);
console.log(Math.trunc(num / 100) % 10);
console.log(Math.trunc(num / 1000) % 10);