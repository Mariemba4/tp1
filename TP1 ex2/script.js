const textArea = document.querySelector('.text');
const color = document.querySelector('#color');
const fontsize = document.querySelector('#number');
const font = document.querySelector('#font');

function applyStyles() {

    textArea.style.color = color.value;
    textArea.style.fontSize = fontsize.value + 'px';
    textArea.style.fontFamily =font.value;
}

color.addEventListener('input', applyStyles);
fontsize.addEventListener('input', applyStyles);
font.addEventListener('change', applyStyles);

applyStyles();


