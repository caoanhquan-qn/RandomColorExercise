const btn = document.querySelector('button');
const h1 = document.querySelector('h1');
const body = document.querySelector('body');


function changeColor() {
    let redValue = Math.floor(Math.random() * 256);
    let greenValue = Math.floor(Math.random() * 256);
    let blueValue = Math.floor(Math.random() * 256);
    const newColor = `rgb(${redValue},${greenValue},${blueValue})`
    body.style.backgroundColor = newColor;
    h1.innerText = newColor;

}

btn.addEventListener('click', changeColor);


