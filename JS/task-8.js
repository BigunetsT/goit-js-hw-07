//Напиши скрипт создания и очистки коллекции элементов.
//Пользователь вводит количество элементов в input и нажимает кнопку Создать, после чего рендерится коллекция.
//При нажатии на кнопку Очистить, коллекция элементов очищается.

//Создай функцию createBoxes(amount), которая принимает 1 параметр amount - число.
//Функция создает столько div, сколько указано в amount и добавляет их в div#boxes.

//Каждый созданный div:

//Имеет случайный rgb цвет фона
//Размеры самого первого div - 30px на 30px
//Каждый следующий div после первого, должен быть шире и выше предыдущего на 10px
//Создай функцию destroyBoxes(), которая очищает div#boxes.

const inputRef = document.querySelector('#controls input');
const renderBtnRef = document.querySelector(
  '#controls button[data-action="render"]',
);
const destroyBtnRef = document.querySelector(
  '#controls button[data-action="destroy"]',
);
const divBoxRef = document.querySelector('#boxes');
let amount;
const createBoxes = amount => {
  const firstBoxSize = 20;
  let arrBoxes = [];
  for (let i = 1; i <= amount; i += 1) {
    const div = document.createElement('div');
    const boxSize = firstBoxSize + i * 10;
    div.style.cssText = `width: ${boxSize}px; height: ${boxSize}px; background-color: rgba( ${random()} , ${random()} , ${random()} ); margin-bottom: 20px`;
    arrBoxes.push(div);
  }
  divBoxRef.append(...arrBoxes);
};
const getAmount = () => {
  const amount = inputRef.value;
  createBoxes(amount);
};
const destroyBoxes = () => {
  divBoxRef.innerHTML = '';
  inputRef.value = '';
};
const random = () => {
  return Math.floor(Math.random() * 256);
};
renderBtnRef.addEventListener('click', getAmount);
destroyBtnRef.addEventListener('click', destroyBoxes);
