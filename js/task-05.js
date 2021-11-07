let inputName = document.querySelector('#name-input');
let outputName = document.querySelector('#name-output')
inputName.addEventListener('input', changeName);

function changeName(event) {
    if (inputName.value === '') {
    outputName.textContent = 'незнакомец';
    }
    else {
        outputName.textContent = event.currentTarget.value;
    };
} 
