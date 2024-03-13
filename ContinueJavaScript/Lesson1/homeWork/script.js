"use strict";

// 1. Найти по id, используя getElementById, элемент с id
// равным "super_link" и вывести этот элемент в консоль.
const fountElement = document.getElementById("super_link");
console.log(fountElement);

// 2. Внутри всех элементов на странице, которые имеют
// класс "card-link", поменяйте текст внутри элемента на "ссылка".
const fountCardLinkClass = document.querySelectorAll(".card-link");
fountCardLinkClass.forEach((element) => {
  element.textContent = "ссылка";
});

// 3. Найти все элементы на странице с классом "card-link",
// которые лежат в элементе с классом "card-body" и вывести полученную коллекцию в консоль.

const cardLinkInCardbody = document.querySelectorAll(".card-body .card-link");
console.log(cardLinkInCardbody);

// 4. Найти первый попавшийся элемент на странице у которого есть
// атрибут data-number со значением 50 и вывести его в консоль.

const fountAtrribute = document.querySelector('[data-number="50"]');
console.log(fountAtrribute);

// 5. Выведите содержимое тега title в консоль.

const fountTegTitleText = document.querySelector("title").textContent;
console.log(fountTegTitleText);

// 6. Получите элемент с классом "card-title" и выведите его родительский узел в консоль.

const parentNodeCardTitle = document.querySelector(".card-title").parentNode;
console.log(parentNodeCardTitle);

// 7. Создайте тегp`, запишите внутри него текст "Привет"
// и добавьте созданный тег в начало элемента, который имеет класс "card".

const newTag = document.createElement("p");
newTag.textContent = "Привет";

const classCard = document.querySelector(".card");
const firstChild = classCard.firstChild;
classCard.insertBefore(newTag, firstChild);

// 8. Удалите тег h6 на странице.

const tegH6 = document.querySelector("h6");
const tegH6ParentNode = tegH6.parentNode;
tegH6ParentNode.removeChild(tegH6);
