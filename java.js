const container = document.querySelector('.container');
const knapp = document.querySelector('.knapp')

function createDiv(num) {
  for (let i = 0; i < num; i++){
    let box = document.createElement('div');
    box.classList.add('box')
    box.addEventListener('mouseover', () => {
      box.style.backgroundColor = 'blue'
    });
    container.appendChild(box);
  }
}

