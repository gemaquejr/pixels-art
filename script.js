const pixelSelected = document.getElementsByClassName('color');

function colorSelected(obj) {
  for (let i = 0; i < pixelSelected.length; i += 1) {
    pixelSelected[i].classList.remove('selected');
  }
  obj.target.classList.add('selected');
}

for (let i = 0; i < pixelSelected.length; i += 1) {
  pixelSelected[i].addEventListener('click', colorSelected);
}
