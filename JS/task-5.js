//Напиши скрипт который, при наборе текста в инпуте input#name-input (событие input),
//подставляет его текущее значение в span#name - output.
//Если инпут пустой, в спане должна отображаться строка 'незнакомец'.
const inputRef = document.querySelector('#name-input');
const spunRef = document.querySelector('#name-output');

const onInput = event => {
  if (event.currentTarget.value != '') {
    return (spunRef.textContent = event.currentTarget.value);
  }
  return (spunRef.textContent = 'незнакомец');
};

inputRef.addEventListener('input', onInput);
