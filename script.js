// create theme for the web 
const theme = document.querySelector('#theme');
const body = document.querySelector('body');

theme.addEventListener('change', () => {
    const blackCat = '#432741';
    const greenThumb = '#C4E1B2';

    theme.value === 'light'
    ? setBackground(greenThumb, blackCat)
    : theme.value === 'dark'
    ? setBackground(blackCat, greenThumb)
    : setBackground(greenThumb, blackCat);
})

function setBackground(bgColor, textColor) {
    body.style.backgroundColor = bgColor;
    body.style.color = textColor;
}

function myFavoriteFood(food) {
    return food + 'is my favorite food.';
};

const myArray = ['I', 'want', 'to', 'live', 'in', 'Norge'];
const joinArray = myArray.join(' ');



// js function learning
const x = 1;

function a() {
    const y = 2;
    const textArea = document.querySelector('#text');
    textArea.textContent = output(z);
}

function b() {
    const z = 3;
    const textArea = document.querySelector('#text');
    textArea.textContent = output(y);
}

function output(value) {
  const para = document.createElement('p');
  document.body.appendChild(para);
  para.textContent = `Value: ${value}`;
}

b();
a();