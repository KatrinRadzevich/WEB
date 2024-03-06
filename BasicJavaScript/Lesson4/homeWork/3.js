"use strict";

/*
Используя Math.random() необходимо сгенерировать массив, содержащий 5 цифр в 
диапазоне [0, 9].
После создания массива необходимо вывести в консоль следующие значения:
1. Сумму элементов массива
2. Минимальное значение в массиве
3. Новый массив, содержащий индексы сгенерированного выше массива, в которых 
значение равно 3.
Пример: Если у нас сгенерировался массив [2, 3, 5, 7, 3], то мы должны вывести 
в консоль массив [1, 4]. Такой массив получился потому что в сгенерированном
массиве тройки лежат под индексами 1 и 4. Если троек в сгенерированном массиве
не окажется, значит нужно будет вывести пустой массив.
*/

const randomArray = [];

for (let i = 0; i < 5; i++) {
  randomArray.push(Math.floor(Math.random() * 10));
}
console.log(randomArray);

let sum = 0;
randomArray.forEach((i) => {
  sum += i;
});
console.log(`1.Суммa элементов массива = ${sum}`);

let min = randomArray[0];
for (let i = 1; i < randomArray.length; i++) {
  if (min > randomArray[i]) {
    min = randomArray[i];
  }
}
console.log(`2.Минимальное значение в массиве = ${min}`);

const newArray = [];
for (let i in randomArray) {
  if (randomArray[i] === 3) {
    newArray.push(i);
  }
}
console.log(`3.Новый массив, содержащий индексы сгенерированного выше массива, в которых 
значение равно 3. [${newArray}]`);
