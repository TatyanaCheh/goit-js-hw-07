const userName = document.querySelector('#name-input');
const outputName = document.querySelector('#name-output');
userName.addEventListener('input', event => {
    const name = event.currentTarget.value.trim();
    if (name === '') {
        outputName.textContent = 'Anonymous';
    } else {
        outputName.textContent = name;
    }
})