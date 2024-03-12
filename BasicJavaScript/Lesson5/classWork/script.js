// 1. Создайте объект с ключами от 1 до 7, в качестве значений содержащий имена
// дней недели. Выведите на экран “Вторник”.

// const object = {
//     1 : 'понедельник',
//     2 : 'вторник',
//     3 : 'среда',
//     4 : 'четверг',
//     5 : 'пятница',
//     6 : 'суббота',
//     7 : 'воскресенье',
// };
// console.log(object[2]);

// 2. Создайте объект user с ключами 'name', 'surname', 'age'. Выведите в консоль
// фамилию, имя и возраст одной строкой.

// const user = {
//   name: "Ivan ",
//   surname: "Ivanov ",
//   age: 25,
// };
// console.log(user.name + user.surname + user.age);

// 3. Добавьте в объект user свойство отчество, которое пользователь должен
// ввести с клавиатуры.

// user.fatherName = prompt('Введите отчество');
// console.log(user);

// 4. Удалите свойство surname.

// delete user.surname
// console.log(user);

// 1. Создайте два массива: первый с названиями дней недели, а второй - с их
// порядковыми номерами:
// `['пн', 'вт', 'ср', 'чт', 'пт', 'сб', 'вс']`
// `[1, 2, 3, 4, 5, 6, 7]`

// const arrayDaysOfWeek = ["пн", "вт", "ср", "чт", "пт", "сб", "вс"];
// const arrayNumbersOfDays = [1, 2, 3, 4, 5, 6, 7];

// 2. С помощью цикла создайте объект, ключами которого будут названия дней,
// а значениями - их номера.

// const object = {};

// for (let i = 0; i < arrayDaysOfWeek.length; i++) {
//   object[arrayNumbersOfDays[i]] = arrayDaysOfWeek[i];
// }

// console.log(object);
// 3. Создайте объект: `{x: 1, y: 2, z: 3}`. Переберите этот объект циклом и
// возведите каждый элемент этого объекта в квадрат.

// const obj = {
//   x: 1,
//   y: 2,
//   z: 3,
// };

// for (let key in obj) {
//   obj[key] *= obj[key];
// }

// console.log(obj);

// const obj = {
//   iodsuf: {
//     asd: 1,
//     zxc: {
//       khvxc: {
//         ncxvm: 10,
//       },
//     },
//     qwd: 3,
//   },
//   gerg: {
//     joij: {
//       shdjk: 99,
//     },
//     kjn: 5,
//     iyu: 6,
//   },
//   xcnkv: {
//     oirje: 7,
//     iuhdv: 8,
//     nmbb: 9,
//   },
//   dswed: 55,
// };

// function sum(obj) {
//   let result = 0;
//   for (const key in obj) {
//     if (typeof obj[key] === "number") {
//       result += obj[key];
//     } else {
//       result += sum(obj[key]);
//     }
//   }
//   return result;
// }

// console.log(sum(obj));

// 1. Создайте объект riddle.
// 2. Добавьте свойства question со значениями(текст загадки) и
// answer (ответ на загадку).
// 3. Создайте метод askQuestion который спрашивает у пользователя вопрос
// question и сравнивает ответ с answer.
// В случае верного ответа, необходимо поздравить пользователя.
// В случае, если пользователь ответил неверно, необходимо подсказать,
// подсказок может быть несколько.
// Если пользователь ответил неверно после всех подсказок, то в консоль
// выводится текст: “вы проиграли”.

const riddle = {
  question: "замой и летом одним цветом",
  answer: "елка",
  help : ["ответ из 4 букв", "это делево", "оно всегда зеленое"],
  askQuestion() {
    let userAnswer = prompt(`введите ответ на загадку: ${this.question}`);
    if (userAnswer.toLocaleLowerCase() === this.answer) {
      console.log("вы ответили верно");
      return;
    }
    console.log("вы ответили неверно");
    for (let i = 0; i < this.help.length -1; i++) {
      alert(this.help[i]);
      let userAnswer = prompt(`введите ответ на загадку: ${this.question}`);
      if (userAnswer.toLocaleLowerCase() === this.answer) {
        console.log("вы ответили верно");
        return;
      }
    }
    alert('не угадал...')
  },
};
riddle.askQuestion();
riddle.askQuestion = function () {
  let userAnswer;
  let i = 0;
  do {
    userAnswer = prompt(`${this.question}`);
    if (userAnswer.toLowerCase() === this.answer) {
      console.log('Вы выиграли');
      return
    } if (i < this.help.length) {
      console.log(`Подумайте еще. Вот подсказка: ${this.help[i]}`);
      i++;
    } else {
      break;
    }
  } while (userAnswer.toLowerCase() !== this.answer);
  console.log('Вы самое слабое звено!');
}
riddle.askQuestion();riddle.askQuestion = function () {
    let userAnswer;
    let i = 0;
    do {
      userAnswer = prompt(`${this.question}`);
      if (userAnswer.toLowerCase() === this.answer) {
        console.log('Вы выиграли');
        return
      } if (i < this.help.length) {
        console.log(`Подумайте еще. Вот подсказка: ${this.help[i]}`);
        i++;
      } else {
        break;
      }
    } while (userAnswer.toLowerCase() !== this.answer);
    console.log('Вы самое слабое звено!');
  }
  riddle.askQuestion();