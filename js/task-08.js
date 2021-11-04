инструкция

//--вибираем елемент из дом дерева
const titleEl = document.querySelector('h2');
//--Доступ к самому тексту внутри тега
titleEl.textContent;
//перезапись заголовка на новий
lool.textContent = "Я новий заголовок";
//добавление класа
titleEl.classList.add('new-classe');
//удаление класа
titleEl.classList.remove('new-classe');

