const pixelSelected = document.getElementsByClassName('color');

function colorSelected(Event) {
  for (let i = 0; i < pixelSelected.length; i += 1) {
    pixelSelected[i].classList.remove('selected');
    Event.target.classList.add('selected');
  }
}

for (let i = 0; i < pixelSelected.length; i += 1) {
  pixelSelected[i].addEventListener('click', colorSelected);
}
/* Ajuda do Sumo na mentoria. Valeu, Sumo ! */
function fillColor(Event) {
  const paintAdd = document.querySelector('.selected');
  const background = window.getComputedStyle(paintAdd).getPropertyValue('background-Color');
  Event.target.style.backgroundColor = background;
}
const painted = document.getElementsByClassName('pixel');

for (let i = 0; i < painted.length; i += 1) {
  painted[i].addEventListener('click', fillColor);
}

const Button = document.getElementById('clear-board');
const pixels = document.getElementsByClassName('pixel');

function clearGame() {
  for (let i = 0; i < pixels.length; i += 1) {
    pixels[i].style.backgroundColor = 'white';
  }
}

Button.addEventListener('click', clearGame);
