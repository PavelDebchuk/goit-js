let inputName = document.querySelector('#validation-input');
inputName.addEventListener('input', changeName);

function changeName() {
        if (inputName.value.length <= 5) {
        inputName.classList.add('invalid');
        } else {
            inputName.classList.replace('invalid', 'valid');
        } 
        return;
    }
