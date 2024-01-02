function createFormMarkup() {
  return `
      <form class="feedback-form" autocomplete="off">
        <label>
          Email
          <input type="email" name="email" autofocus />
        </label>
        <label>
          Message
          <textarea name="message" rows="8"></textarea>
        </label>
        <button type="submit">Submit</button>
      </form>
    `;
}

const formContainer = document.getElementById('form-container');
formContainer.innerHTML = createFormMarkup();

const form = document.querySelector('.feedback-form');

const LOCAL_KEY = 'feedback-form-state';

form.addEventListener('input', onInputData);
form.addEventListener('submit', onFormSubmit);

let dataForm = JSON.parse(localStorage.getItem(LOCAL_KEY)) || {};
const { email, message } = form.elements;
reloadPage();

function onInputData(e) {
  dataForm = { email: email.value, message: message.value };
  localStorage.setItem(LOCAL_KEY, JSON.stringify(dataForm));
}

function reloadPage() {
  if (dataForm) {
    email.value = dataForm.email || '';
    message.value = dataForm.message || '';
  }
}

function onFormSubmit(e) {
  e.preventDefault();
  console.log({ email: email.value, message: message.value });

  if (email.value === '' || message.value === '') {
    return alert('Please fill in all the fields!');
  }

  localStorage.removeItem(LOCAL_KEY);
  e.currentTarget.reset();
  dataForm = {};
}
