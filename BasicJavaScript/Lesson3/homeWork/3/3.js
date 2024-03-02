"use strict";

/*
Необходимо попросить пользователя ввести три числа.
Необходимо создать функцию, в которую мы должны передать эти три числа.
Функция должна определить максимальное, среди переданных ей значение и 
вывести сообщение: "Максимальное значение среди чисел N1, N2, N3 равно N."

Примечание: Условимся, что пользователь всегда вводит корректные значения, 
три числа. Проверять их не нужно.
*/

const numberOne = prompt("Введите первое число");
const numberTwo = prompt("Введите второе число");
const numberThree = prompt("Введите третье число");

/**
 * Выводит в диалоговое окно наибольшее из 3-х чисел
 * @param {number} numOne
 * @param {number} numTwo
 * @param {number} numThree
 */
function maxNumber(numOne, numTwo, numThree) {
  const maxNumber = Math.max(numOne, numTwo, numThree);
  alert(
    `Максимальное значение среди чисел ${numOne}, ${numTwo}, ${numThree} равно ${maxNumber}`
  );
}

maxNumber(numberOne, numberTwo, numberThree);
