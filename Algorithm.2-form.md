Код создает форму обратной связи, которая сохраняет данные в локальном хранилище
и выводит их в консоль при отправке.

1. Создать функцию "createFormMarkup", которая возвращает HTML-код формы
   обратной связи.
2. Получить элемент DOM, в который нужно добавить HTML-код формы, и использовать
   метод "innerHTML" для добавления HTML-кода, возвращаемого функцией
   "createFormMarkup".
3. Получить элемент формы с помощью метода "querySelector" и установить
   обработчики событий "input" и "submit".
4. Определить ключ локального хранилища и загрузить данные формы из него,
   используя функцию "loadFormData".
5. При вводе данных в форму обновлять объект "dataForm" и сохранять его в
   локальном хранилище с помощью функции "onInputData".
6. При загрузке страницы вызвать функцию "reloadPage", которая загружает данные
   формы из локального хранилища и устанавливает их значения в соответствующие
   элементы формы.
7. При отправке формы проверять, заполнены ли все поля, и если нет, выводить
   сообщение об ошибке. Если все поля заполнены, выводить данные формы в
   консоль, очищать локальное хранилище и сбрасывать значения элементов формы.

==========//==========//==========//==========

1. Создание функции "createFormMarkup"

Первым шагом создается функция "createFormMarkup", которая возвращает HTML-код
формы обратной связи. Вот как это выглядит:

function createFormMarkup() { return

<form class="feedback-form" autocomplete="off"> <label> Email
<input type="email" name="email" autofocus /> </label> <label> Message
<textarea name="message" rows="8"></textarea> </label>
<button type="submit">Submit</button> </form> ; }

2. Добавление HTML-кода формы на страницу

Далее получаем элемент DOM, в который нужно добавить HTML-код формы, и
используем метод "innerHTML" для добавления HTML-кода, возвращаемого функцией
"createFormMarkup". Например:

const formContainer = document.getElementById('form-container');
formContainer.innerHTML = createFormMarkup();

3. Получение элемента формы и установка обработчиков событий

Затем мы получаем элемент формы с помощью метода "querySelector" и устанавливаем
обработчики событий "input" и "submit". Например:

const form = document.querySelector('.feedback-form');

form.addEventListener('input', onInputData); form.addEventListener('submit',
onFormSubmit);

4. Определение ключа локального хранилища и загрузка данных формы

Затем мы определяем ключ локального хранилища и загружаем данные формы из него,
используя функцию "loadFormData". Например:

const LOCAL_KEY = 'feedback-form-state';

let dataForm = loadFormData();

5. Установка данных формы при вводе

При вводе данных в форму мы обновляем объект "dataForm" и сохраняем его в
локальном хранилище с помощью функции "onInputData". Например:

function onInputData(e) { const { email, message } = form.elements; dataForm = {
email: email.value.trim(), message: message.value.trim() };
localStorage.setItem(LOCAL_KEY, JSON.stringify(dataForm)); }

6. Загрузка данных формы при загрузке страницы

При загрузке страницы мы вызываем функцию "reloadPage", которая загружает данные
формы из локального хранилища и устанавливает их значения в соответствующие
элементы формы. Например:

function reloadPage() { const { email, message } = form.elements; if (dataForm)
{ email.value = dataForm.email || ''; message.value = dataForm.message || ''; }
}

reloadPage();

7. Обработка отправки формы

При отправке формы мы проверяем, заполнены ли все поля, и если нет, выводим
сообщение об ошибке. Если все поля заполнены, мы выводим данные формы в консоль,
очищаем локальное хранилище и сбрасываем значения элементов формы. Например:

function onFormSubmit(e) { e.preventDefault(); const { email, message } =
form.elements;

if (email.value.trim() === '' || message.value.trim() === '') { return
alert('Please fill in all the fields!'); }

console.log({ email: email.value, message: message.value });

localStorage.removeItem(LOCAL_KEY); e.currentTarget.reset(); dataForm = {}; }

Вот и все! Теперь у нас есть форма обратной связи, которая сохраняет данные в
локальном хранилище и выводит их в консоль при отправке.
