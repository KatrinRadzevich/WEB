"use strict";

// В html создать кнопку button
// После загрузки страницы вывести в консоль текст “страница загрузилась”
// Добавить событие onclick которое выводит в консоль текст “событие onclick”
// Добавить событие addEventListener которое выводит в консоль текст “событие addEventListener”

// const btn = document.querySelector(".button");

// window.onload = () => {
//   console.log("Страница загрузилась");
// };

// btn.onclick = () => {
//   console.log("событие onclick");
// };

// btn.addEventListener("click", () => {
//   console.log("событие addEventListener");
// });

// Создать в html три кнопки button с нумерацией (1, 2, 3 соответственно)
// Добавить клик на кнопку , чтобы в консоль выводилась именно та кнопка на которую мы нажали
// Добавить кнопку button с текстом 4, которая считает сколько раз на нее нажали и
// количество нажатий на эту кнопку выводит в консоль
// Создать кнопку button с текстом 5, При клике на которую, меняется текст данной кнопки
//  на “Вы нажали на эту кнопку”

const body = document.querySelector("body");
// for (let i = 1; i <= 5; i++) {
//   body.insertAdjacentHTML("beforeend", `<button>${i}</button>`);
// }

// body.addEventListener("click", (e) => {
//   // console.log(e.target.nodeName);// просмотр названия цели
//   if (e.target.nodeName === "BUTTON") {
//     console.log(`нажали на кнопку ${e.target.textContent}`);
//   }
// });

// const btns = document.querySelectorAll("button");
// let count = 0;
// btns[3].addEventListener("click", () => {
//   console.log(`На кнопку 4 нажали ${++count} раз`);
// });

// btns[4].addEventListener("click", () => {
//   btns[4].textContent = "Вы нажали на эту кнопку";
// });

// Создать кнопку, которая добавляем заголовок h1 с текстом, “Новый заголовок,
// данный элемент нужно расположить после кнопки
// Создать вторую кнопку, которая будет удалять созданный заголовок h1
// Создать третью кнопку, при наведении на которую в консоль будет выводиться
// текст “вы навели на данную кнопку” , как только вы убираем курсор мыши с кнопки,
// в консоли должен появиться текст “Наведения на кнопку больше нет”

// const btn = document.createElement("button");
// btn.textContent = "ClickMe";
// body.insertAdjacentElement("beforeend", btn);
// btn.addEventListener("click", () => {
//   body.insertAdjacentHTML("beforeend", `<h1>Новый заголовок</h1>`);
// });

// const btn2 = document.createElement("button");
// btn2.textContent = "remove";
// body.insertAdjacentElement("afterend", btn2);
// btn2.addEventListener("click", () => {
//   document.querySelector("h1").remove();
// });

// const btn3 = document.createElement("button");
// btn3.textContent = "Наведение";
// body.insertAdjacentElement("beforeend", btn3);
// btn3.addEventListener("mouseover", () => {
//   console.log("навели на кнопку");
// });
// btn3.addEventListener("mouseout", () => {
//   console.log("наведения на кнопку больше нет");
// });

// Создать в html список состоящий из 3-х произвольных элементов li
// Нужно создать кнопку которая будет добавлять элементы списка с текстом “новый элемент списка”
// Создать кнопку, которая будет удалять первый элемент из созданного списка
// Создать кнопку, при клике на которую ей добавляется класс “click”
const ul = document.querySelector("ul");
const btn = document.createElement("button");
btn.textContent = "добавить";
body.insertAdjacentElement("afterbegin", btn);
btn.addEventListener("click", () => {
  ul.insertAdjacentHTML("beforeend", `<li>новый элемент списка</li>`);
});

const btn2 = document.createElement("button");
btn2.textContent = "удалить";
body.insertAdjacentElement("afterbegin", btn2);
btn2.addEventListener("click", () => {
  ul.firstElementChild.remove();
});

const addClass = document.createElement("button");
addClass.textContent = "добавить класс";
body.insertAdjacentElement("afterbegin", addClass);
addClass.addEventListener("click", () => {
  addClass.classList.add("click");
});
