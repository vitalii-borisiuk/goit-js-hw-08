const STORAGE_MESSAGE = 'save-input';

const refs = {
    form: document.querySelector('.feedback-form'),
    email: document.querySelector('.feedback-form input'),
    textarea: document.querySelector('.feedback-form textarea'),
}


refs.form.addEventListener('submit', onFormSubmit);
refs.form.addEventListener('input', onTextareaInput);
messageOutput();
    
const formData = {
    email: refs.email.value,
    message:refs.textarea.value,
};

function onFormSubmit(e) {
    e.preventDefault();
        if (refs.email.value === '' || refs.textarea.value === '') {
        return alert('Введіть всі поля форми');
    }
    console.log(formData);
    e.currentTarget.reset();
    localStorage.removeItem(STORAGE_MESSAGE);
};

function onTextareaInput(e) {

    formData[e.target.name] = e.target.value;
    localStorage.setItem(STORAGE_MESSAGE, JSON.stringify(formData));    
};

function messageOutput() {
    const fromStorage = JSON.parse(localStorage.getItem(STORAGE_MESSAGE));
     if (fromStorage) {
        refs.email.value = fromStorage.email;
        refs.textarea.value = fromStorage.message;
    };

};
