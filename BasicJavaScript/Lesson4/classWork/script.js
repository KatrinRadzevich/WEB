// 1. Создайте массив с элементами 1, 2, 3.
// Выведите на экран каждый из этих элементов.

// const array = [1, 2, 3];
// console.log(array[0]);
// console.log(array[1]);
// console.log(array[2]);

// 2. Создайте массив с произвольными элементами.
// Выведите на экран количество элементов в этом массиве.

// const array = [1, 2, 3, 4, 5];
// console.log(array.length);

// 3. Создайте массив с элементами 'a', 'b', 'c'. Запишите вместо первого элемента
// число 1, вместо второго - 2, вместо третьего - 3.

// const array = ['a', 'b', 'c'];
// console.log(array);
// array[0] = 1;
// array[1] = 2;
// array[2] = 3;
// console.log(array);

// 1. Создайте массив с элементами 1, 2 и 3. С помощью оператора ++ увеличьте
// каждый элемент массива на единицу.

// const array = [1, 2, 3];
// console.log(array);

// for (let i = 0; i < array.length; i++) {
//     array[i]++;
// }
// console.log(array);

// 2. Узнайте длину следующего массива и объясните почему такое значение:

// const arr = [];
// arr[3] = 'a';
// arr[8] = 'b';

// console.log(arr.length);

// 3. Пусть дан такой массив: `[1, 2, 3]`. Добавьте ему в конец элементы 4 и 5.

// const array = [1, 2, 3];
// console.log(array);

// array.push(4);
// array.push(5);
// console.log(array);

// 4. Создайте произвольный массив из 5 элементов, удалите из него два элемента.
// Проверьте, какое станет значение свойства length после этого.

// const array = [];

// for (let i = 0; i < 5; i++) {
//   array.push(Math.floor(Math.random() * 100));
// }
// console.log(array);
// array.pop();
// array.pop();
// console.log(array);
// console.log(array.length);

// 1. С помощью цикла for выведите в консоль числа от 11 до 33.

// for (let i = 11; i < 33; i++) {
//     console.log(i);
// }
// не включительно 33***

// 2. С помощью цикла for выведите в консоль нечетные числа в промежутке от 1
// до 100 включительно.

// for (let i = 1; i < 101; i++) {
//     if (i % 2 != 0) {
//         console.log(i);
//     }
// }

// 3. С помощью цикла for выведите в консоль числа от 100 до 0.

// for (let i = 100; i > 0; i--) {
//   console.log(i);
// }

// 4. Создать переменную с заданным числом. Умножайте число на 3 столько раз,
// пока результат умножения не станет больше 1000. Какое число получится?
// Посчитайте количество итераций, необходимых для этого.

// let number = 2;
// let iterations = 0;

// while (number <= 1000) {
//     number *= 3;
//     iterations++;
// }

// console.log("Полученное число:", number);
// console.log("Количество итераций:", iterations);

// 1. Создать массив `[2, 5, 9, 15, 1, 4]`.
// Выведите в консоль те элементы массива, которые больше 3-х, но меньше 10.

// const array = [2, 5, 9, 15, 1, 4];
// for (let i = 0; i < array.length; i++) {
//   if (array[i] < 10 && array[i] > 3) {
//     console.log(array[i]);
//   }
// }

// 2. Найдите сумму четных чисел от 2 до 100.
// let sum = 0;
// for (let i = 2; i < 100; i++) {
//     if (i % 2 === 0) {
//         sum += i;
//     }
// }
// console.log(sum);
// 3. Создать массив `[2, 5, 9, 3, 1, 4]`.
// Найдите сумму элементов этого массива.

// let sum = 0;

// const array = [2, 5, 9, 3, 1, 4];
// // for (let i = 0; i < array.length; i++) {
// //   sum += array[i];
// // }

// // array.forEach((element,i) => {
// //   sum += element;
// // });
// // console.log(sum);

// // for (const i of array) {
// //     sum+=i;
// // }

// for (const i in array) {
//     sum += array[i];
// }
// console.log(sum);
// 4. С помощью цикла сформируйте строку '-1-2-3-4-5-6-7-8-9-'.
// let line = "-";
//   for (let i = 1; i < 10; i++) {
//     line += i + '-';
//   }
// console.log(line);

// 5. Создать массив `[2, 5, 9, 0, 3, 1, 4]`.
// Запустите цикл, который будет по очереди выводить элементы этого массива в
// консоль до тех пор, пока не встретится элемент со значением 0. После этого
// цикл должен завершить свою работу.

// const array = [2, 5, 9, 0, 3, 1, 4];
// for (let i = 0; array[i] !== 0; i++) {
//     console.log(array[i]);
// }
// 1. Создать массив из 10 случайных чисел от 0 до 100 включительно.
// Наобходимо вывести в консоль все числа, которые делятся и на 2, и на 3.

// const array = [];

// for (let i = 0; i < 10; i++) {
//   array[i] = Math.floor(Math.random() * 100);
// }

// console.log(array);

// for (let i = 0; i < array.length; i++) {
//   if (array[i] % 2 === 0 && array[i] % 3 === 0) {
//     console.log(array[i]);
//   }
// }

// 2. Дан массив: `[1, 2, 3, 2, 4, 3, 5, 6, 3, 2, 3]`. Подсчитайте количество
// цифр 3 в этом массиве.

// const array = [1, 2, 3, 2, 4, 3, 5, 6, 3, 2, 3];
// let sum = 0;
// for (let i = 0; i < array.length; i++) {
//   if (array[i] === 3) {
//     sum++;
//   }
// }

// array.forEach(i => {
//     if (array[i] === 3) {
//         sum++;
//       }
// });
// console.log(sum);

// 4. Дан массив: `[1, 2, 3, 4, 5]`.
// С помощью метода splice преобразуйте массив в следующий: [1, 4, 5]

// const array = [1, 2, 3, 4, 5];
// array.splice(1, 2); //откуда удаляем,сколько удаляем,что ставим на место
// console.log(array);
const array = [1, 45, 3, 32, 5];

// const arr = array.filter((element) => {
//   if (element > 25) {
//     return true;
//   }
//   return false;
// });

const arr = array.filter((element) => element > 25);
console.log(arr);