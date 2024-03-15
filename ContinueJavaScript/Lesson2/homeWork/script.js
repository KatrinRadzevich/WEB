"use strict";

// 1. Ко всем элементам, имеющим класс "dropdown-item" добавить
// еще один класс "super-dropdown", необходимо использовать методы forEach
// и querySelectorAll и свойство classList у элементов.

const fountClassDropdownItem = document.querySelectorAll(".dropdown-item");
fountClassDropdownItem.forEach((element) => {
  element.classList.add("super-dropdown");
});

// 2. У элемента с классом btn необходимо убрать класс "btn-secondary",
// если он присутствует у этого элемента, либо добавить, если такого класса у элемента не было.

const btnClass = document.querySelector(".btn");
btnClass.classList.toggle("btn-secondary");

// 3. Необходимо удалить класс "dropdown-menu" у элемента, у которого присутствует класс "menu".

const fountClassDropdownMenu = document.querySelector(".menu");

if (fountClassDropdownMenu.classList.contains("dropdown-menu")) {
  fountClassDropdownMenu.classList.remove("dropdown-menu");
}

// 4. Используя метод insertAdjacentHTML добавьте после div'a с классом "dropdown"
// следующую разметку:
// `<a href="#">link</a>`

const fountClassDropdown = document.querySelectorAll(".dropdown");
const secondDropdownElement = fountClassDropdown[1];
secondDropdownElement.insertAdjacentHTML("afterend", '<a href="#">link</a>');

// 5. У элемента с id "dropdownMenuButton" замените id на "superDropdown".

const fountElement = document.getElementById("dropdownMenuButton");
fountElement.id = "superDropdown";

// 6. Добавьте атрибут data-dd со значением 3 элементу у которого существует атрибут
// "aria-labelledby" равный "dropdownMenuButton" используя dataset.

const element = document.querySelector(
  '[aria-labelledby="dropdownMenuButton"]'
);
element.dataset.dd = "3";

// 7. Удалите атрибут type у элемента с классом "dropdown-toggle".

const fountToggleElement = document.querySelector(".dropdown-toggle");
fountToggleElement.removeAttribute("type");
