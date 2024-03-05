"use strict";

/*
Необходимо реализовать четыре функции, каждая функция должна принимать по два
числа и выполнять одну из операций (каждая функция выполняет одну из них):
1. Сложение
2. Разность
3. Умножение
4. Деление
Необходимо сделать так, чтобы функция вернула число, например выражение
console.log(sum(2, 6)); должно вывести число 8 в консоль (sum - функция
сложения в данном примере, ваши названия функций могут отличаться).
Округлять значения, которые возвращают функции не нужно, однако, обратите
внимание на разность, функция должна вычесть из большего числа меньшее, либо
вернуть 0, если числа равны.
Функциям всегда передаются корректные числа, проверки на NaN, Infinity делать
не нужно.
Демонстрировать работы функций не обязательно.
*/

/**
 * Сумма двух чисел
 * @param {number} numOne
 * @param {number} numTwo
 * @returns результат суммы двух чисел
 */
function sum(numOne, numTwo) {
  return numOne + numTwo;
}

/**
 * Разность двух чисел(из бОльшего меньшее)
 * @param {number} numOne
 * @param {number} numTwo
 * @returns результат разности двух чисел
 */

function difference(numOne, numTwo) {
  if (numOne > numTwo) {
    return numOne - numTwo;
  } else {
    return numTwo - numOne;
  }
}

/**
 * Умножение двух чисел
 * @param {number} numOne
 * @param {number} numTwo
 * @returns результат умножения двух чисел
 */
function multiplication(numOne, numTwo) {
  return numOne * numTwo;
}

/**
 * Деление двух чисел
 * @param {number} numOne
 * @param {number} numTwo
 * @returns результат деления двух чисел
 */
function division(numOne, numTwo) {
  return numOne / numTwo;
}

console.log(sum(5, 2));
console.log(difference(20, 20));
console.log(multiplication(3, 2));
console.log(division(3, 2));
