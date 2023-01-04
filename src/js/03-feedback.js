const STORAGE_MESSAGE = 'save-input';
const formData = {};

const refs = {
    form: document.querySelector('.feedback-form'),
    email: document.querySelector('.feedback-form input'),
    textarea: document.querySelector('.feedback-form textarea'),

}

refs.form.addEventListener('submit', onFormSubmit);
refs.form.addEventListener('input', onTextareaInput);
messageOutput();

function onFormSubmit(e) {
    e.preventDefault();
    e.currentTarget.reset();
    localStorage.removeItem(STORAGE_MESSAGE);
};

function onTextareaInput(e) {
    formData[e.target.name] = e.target.value;
    const data = JSON.stringify(formData);   
    localStorage.setItem(STORAGE_MESSAGE, data);
        
};

function messageOutput() {
    const savedMessage = localStorage.getItem(STORAGE_MESSAGE);
    const fromStorage = JSON.parse(savedMessage);
    
    if (fromStorage) { 
        refs.email.value = fromStorage.email;
        refs.textarea.value = fromStorage.message;
    };
};