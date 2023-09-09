const container = document.querySelector('.container');

function createDiv(num) {
  for (let i = 0; i < num*num; i++){
    let box = document.createElement('div');
    box.classList.add('box')
    box.addEventListener('mouseover', () => {
    box.style.backgroundColor = 'blue'
    });
    container.appendChild(box);
    let hojd = box.offsetHeight * num;
    let bred = box.offsetWidth * num;
    container.style.height = hojd + "px";
    container.style.width = bred + "px";
  }
}

function removeGrid() {
  let children = document.querySelector('.container').children;
  let barn = Array.from(children);
  barn.forEach((element) => {
    element.remove();
  });
}

function newGrid() {
  let gridSize = prompt("What size should the new grid be?");
  if (gridSize > 100){
    alert('The max is 100*100 please enter a lower number')
  }
  else{
    removeGrid();
    createDiv(gridSize);
  }
  
}
