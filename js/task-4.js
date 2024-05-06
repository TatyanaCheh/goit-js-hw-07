const form = document.querySelector('.login-form');
const onFormSubmit = event => {
    event.preventDefault();
    const formEmailEl = event.currentTarget.elements.email.value.trim();
    const formPassEl = event.currentTarget.elements.password.value.trim();
    if (formEmailEl === '' || formPassEl === ''){
        return alert ('All form fields must be filled in');
    }
    const info = {
        email: formEmailEl,
        password: formPassEl,
    };
    console.log(info);
    event.currentTarget.reset();
};
form.addEventListener('submit', onFormSubmit);
