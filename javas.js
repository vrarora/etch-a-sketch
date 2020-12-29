const grid = document.querySelector('.gridContainer');
const userInput = document.getElementById('quantity');
const resetBtn = document.querySelector('.reset');

gridMake = () => {
    for(let i=0; i<256; i++){
        const div = document.createElement("div");
        div.classList.add('square');
        grid.appendChild(div);
    }
};

gridUpdate = () => {
    grid.innerHTML = '';
    grid.style.setProperty(
        "grid-template-columns",
        `repeat(${userInput.value}, 2fr)`
    );

    grid.style.setProperty(
        "grid-template-rows",
        `repeat(${userInput.value}, 2fr)`
    );
    for(let i =0; i < userInput.value * userInput.value; i++) {
        const div = document.createElement("div");
        div.classList.add('square');
        grid.appendChild(div);
    }
    console.log(userInput.value)
};

function changeColor(e) {
    const randomR = Math.floor(Math.random() * 256);
    const randomG = Math.floor(Math.random() * 256);
    const randomB = Math.floor(Math.random() * 256);
    e.target.style.backgroundColor = `rgb(${randomR}, ${randomG}, ${randomB})`;
  }
const square = document.querySelector('.gridContainer');
square.addEventListener('mouseover', changeColor);

function changeSize() {
    userInput.value = prompt("Enter new size");
  
    if (userInput.value !== null) {
      if (userInput.value < 1 || userInput.value > 100 || Number.isNaN(userInput.value)) {
        alert("Enter a number from 1-100 range");
        changeSize();
      } else {
          gridMake(userInput.value);
       gridUpdate(userInput.value);

      }
    }
}

userInput.addEventListener("change", gridUpdate);

resetBtn.addEventListener("click", changeSize);

gridMake();