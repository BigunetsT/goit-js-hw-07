//Счетчик состоит из спана и кнопок, которые должны увеличивать и уменьшать значение счетчика на 1.

//Создай переменную counterValue в которой будет хранится текущее значение счетчика.
//Создай функции increment и decrement для увеличения и уменьшения значения счетчика
//Добавь слушатели кликов на кнопки, вызовы функций и обновление интерфейса

const spanValueRef = document.querySelector('#value');
let counterValue = spanValueRef.textContent;
const incrementBtnRef = document.querySelector(
  '#counter button[data-action="increment"]',
);
const decrementBtnRef = document.querySelector(
  '#counter button[data-action="decrement"]',
);

const increment = () => {
  counterValue = Number(spanValueRef.textContent) + 1;
  updating();
};
const decrement = () => {
  counterValue = Number(spanValueRef.textContent) - 1;
  updating();
};
const updating = () => {
  spanValueRef.textContent = counterValue;
};

incrementBtnRef.addEventListener('click', increment);
decrementBtnRef.addEventListener('click', decrement);
