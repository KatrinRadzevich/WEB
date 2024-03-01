// 1. Написать функцию, которая принимает, имя, фамилия и возраст. Функция должна
// вывести в консоль строку:
// "Привет, `имя` `фамилия`. Вы уже большой, вам `возраст`."
// const name = prompt("Введите свое имя");
// const surname = prompt("Введите свою фамилию");
// const age = +prompt("Введите свой возраст");

// function printHello(name, surname, age) {
//   console.log(`Привет, ${name} ${surname}. Вы уже большой, вам ${age} лет`);
// }

// printHello(name, surname, age)

// 2. Создайте функцию, которая принимает число, а возвращает квадрат переданного
// ей числа.

// function squareOfNumber(number) {
//     return number**2;
// }

// alert(squareOfNumber(5));
// 3. Создайте функцию, которая принимает число.
// Функция должна вывести в консоль '+++', если число положительное, либо '---',
// если число было отрицательное. В случае, если было передано не число, либо ноль,
// функция ничего не должна выводить.

// function ifNegative(number) {
//   if (!Number.isFinite(number)) { //проверка на число
//     return;
//   } else if (number > 0) {
//     console.log("+++");
//   } else if (number < 0) {
//     console.log("---");
//   }
// }
// ifNegative('5');
// ifNegative("n");
// ifNegative(-5);
// ifNegative(5);
// ifNegative(0);

// 1. Создайте функцию, которая параметрами принимает 3 числа и выводит в
// консоль сумму этих чисел.
// Создайте три переменные, со случайными значениями и продемонстрируйте работу
// данной функции.

// function sum(a, b, c) {
//   console.log(a + b + c);
// }
// let number1 = Math.floor(Math.random() * 100);
// let number2 = Math.floor(Math.random() * 100);
// let number3 = Math.floor(Math.random() * 100);
// console.log(number1);
// console.log(number2);
// console.log(number3);
// sum(number1, number2, number3);
// 3. Дан код:

// ```
// func(2);
// func(3);
// func();

// function func(num = 5) {
//   console.log(num * num);
// }
// ```

// 1. Создайте функцию, которая принимает число, а возвращает квадратный корень
// переданного числа.
// С помощью созданной функции найдите сумму корней чисел 3 и 4 и выведите данную
// сумму в консоль.

// function squareRoot(number) {
//   return Math.sqrt(number);
// }
// console.log(squareRoot(3));
// console.log(squareRoot(4));
// let sum = squareRoot(3) + squareRoot(4);
// console.log(sum);
// 2. Создайте функцию, которая находит минимальное число из 2х переданных
// аргументов функции и вернет найденное значение.
// function ifMinimal(a, b) {
//   return Math.min(a, b);
// }
// console.log(ifMinimal(3, 6));
// 1. Создайте функцию, которая принимает параметром число от 1 до 7, а возвращает
// день недели на русском языке.
// function dayOfWeek(number) {
//   switch (number) {
//     case 1:
//       return "Понедельник";
//     case 2:
//       return "Вторник";
//     case 3:
//       return "Среда";
//     case 4:
//       return "Четверг";
//     case 5:
//       return "Пятница";
//     case 6:
//       return "Суббота";
//     case 7:
//       return "Воскресенье";
//     default:
//       return "Вы ввели что-то не то";
//   }
// }
// console.log(dayOfWeek(3));
// 2. Создайте функцию, которой мы передаем имя и она возвращает приветствие в
// зависимости от времени суток (утро, день, вечер, ночь), например:
// "Добрый день, Иван." или "Доброй ночи, Иван.

function greetByName(name) {
    let currentTime = new Date();
    let currentHour = currentTime.getHours();

    if (currentHour >= 6 && currentHour < 12) {
        return `Доброе утро, ${name}.`;
    } else if (currentHour >= 12 && currentHour < 18) {
        return `Добрый день, ${name}.`;
    } else if (currentHour >= 18 && currentHour < 24) {
        return `Добрый вечер, ${name}.`;
    } else {
        return `Доброй ночи, ${name}.`;
    }
}
console.log(greetByName('Katrin'));