function createDefaultBoard() {
  const pixelBoard = document.getElementById('pixel-board');
  for (let i = 0; i < 25; i += 1) {
    const pixelCreated = document.createElement('div');
    pixelCreated.classList.add('pixel');
    pixelBoard.appendChild(pixelCreated);
  }
}

function colorRemoved() {
  const pixelSelected = document.querySelector('.selected');
  pixelSelected.classList.remove('selected');
}

function colorAdded() {
  const painted = document.getElementsByClassName('color');
  for (let i = 0; i < painted.length; i += 1) {
    painted[i].addEventListener('click', (e) => {
      colorRemoved();
      e.target.classList.add('selected');
    });
  }
}

function fillColor() {
  const pixelClicked = document.getElementsByClassName('pixel');
  for (let i = 0; i < pixelClicked.length; i += 1) {
    pixelClicked[i].addEventListener('click', (e) => {
      const paintAdd = document.querySelector('.selected');
      const background = window.getComputedStyle(paintAdd);
      const selectedBackground = background.getPropertyValue('background-Color');
      e.target.style.backgroundColor = selectedBackground;
    });
  }
}

function clearGame() {
  const button = document.getElementById('clear-board');
  button.addEventListener('click', () => {
    const pixels = document.getElementsByClassName('pixel');
    for (let i = 0; i < pixels.length; i += 1) {
      pixels[i].style.backgroundColor = 'white';
    }
  });
}

createDefaultBoard();
colorAdded();
fillColor();
clearGame();
