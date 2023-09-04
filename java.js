const container = document.querySelector('.container');

function createDiv(num) {
  for (let i = 0; i < num; i++){
    let box = document.createElement('div');
    box.classList.add('box')
    container.appendChild(box);
  }
}