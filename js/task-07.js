const controlSize = document.querySelector('#font-size-control');
const textSize = document.querySelector('#text');

controlSize.addEventListener('input', resultText);

function resultText() {
    let siZe = controlSize.value;
    textSize.style.fontSize = siZe + "px";
}