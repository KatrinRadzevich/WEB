"use strict";

// 1. При изменении значения в input с id="from", значение содержащееся в нем должно
// моментально отображаться в span. То есть при печати в input'е тег span также должен меняться.

const input = document.querySelector("input");
const span = document.querySelector("span");

input.addEventListener("input", () => {
  span.textContent = input.value;
});

// 2. При клике на кнопку с классом messageBtn необходимо элементу с классом message:
// - добавить два класса: animate_animated и animate_fadeInLeftBig
// - поставить данному элементу стиль visibility в значение 'visible'.

const btn = document.querySelector(".messageBtn");
const message = document.querySelector(".message");

btn.addEventListener("click", () => {
  message.classList.add("animate_animated");
  message.classList.add("animate_fadeInLeftBig");
  message.style.visibility = "visible";
});

// 3. Необходимо при отправке формы проверить, заполнены ли все поля в этой форме.
// Если какое-либо поле не заполнено, форма не должна отправляться, также должны быть
// подсвечены незаполненные поля (необходимо поставить класс error незаполненным полям).
// Как только пользователь начинает заполнять какое-либо поле, необходимо, при вводе в
// данное поле, произвести проверку:
// - Если поле пустое, необходимо данное поле подсветить (поставить класс error данному полю).
// - Если поле было чем-либо заполнено, подсветку (класс error) необходимо убрать.

const form = document.querySelector("form");
const button = form.querySelector("button");
const formInput = form.querySelector("input");
const formControl = document.querySelectorAll(".form-control");

button.addEventListener("click", (e) => {
  e.preventDefault();
  if (formInput.value.trim() !== "" && formControl[1].value !== "") {
    form.submit();
  } else {
    formControl.forEach((element) => {
      if (element.value.trim() === "") {
        element.style.border = "4px solid red";
        element.classList.add("error");
      } else {
        element.style.border = "4px solid green";
        element.classList.remove("error");
      }
    });
  }
});
