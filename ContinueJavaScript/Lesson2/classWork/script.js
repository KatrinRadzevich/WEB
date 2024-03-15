"use strict";

// Дан блок, внутри него необходимо создать элемент div с классом item,
// разместить текст “Элемент внутри” и задать стили
// Цвет текста синий
// Рамка сплошная черная
// Цвет фона #f8f8f8
// Внутренний отступ 16px
// Добавить данному блоку класс item_1 (использовать setAttribute)

// const block = document.querySelector(".block");

// const item = document.createElement("div");
// block.appendChild(item);
// item.textContent = "Элемент внутри";

// item.style.color = "blue";
// item.style.border = "1px solid black";
// item.style.padding = "16px";
// item.style.background = "orange";
// item.setAttribute("class", "item1");

// // Необходимо с помощью querySelector найти параграф с классом text

// const text = document.querySelector(".text");

// // Вывести в консоль соседний элемент h2

// console.log(text.previousElementSibling);

// // Вывести в консоль родительский элемент content

// console.log(text.parentNode);

// // Вывести в консоль картинку

// console.log(text.parentNode.previousElementSibling);

// // Вывести в консоль родительский элемент elem

// console.log(text.parentNode.parentNode);

// Дано поле ввода и кнопка отправить, необходим реализовать функционал,
// если пользователь нажимает на кнопку отправить, а поле ввода пустое,
// то под полем ввода и кнопкой должен появиться заголовок h2 с текстом
// вы не заполнили поле ввода
// Цвет у рамки сделать красным

const input = document.querySelector("input");
const btn = document.querySelector(".btn");
let h2 = document.querySelector("h2");
btn.addEventListener("click", (event) => {
  event.preventDefault();
  if (input.value.trim() === "") {
    if (!h2) {
      h2 = document.createElement("h2");
      input.parentElement.insertAdjacentElement("afterend", h2);
    }
    h2.textContent = "Вы не заполнили поле ввода";
    input.parentElement.insertAdjacentElement("afterend", h2);
    input.style.border = "3px solid red";
  } else {
    h2.remove();
    input.style.border = "3px solid green";
  }
});
