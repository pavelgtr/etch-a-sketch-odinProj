//whole page
const body = document.querySelector("body");
body.style.height = "100vh";
body.style.border = "1px solid red";


// horizontal container
const horizontalContainer = document.createElement("div");
horizontalContainer.style.width = "100%";
horizontalContainer.style.height = "6.25%";
horizontalContainer.style.display = "flex";




//square to clone horizontally
const square = document.createElement("div");
square.style.border = "1px solid red";
square.style.width = "6.25%";
square.style.height = "100%";
square.style.boxSizing = "border-box";

function handleSquareClick(event) {
    event.currentTarget.style.backgroundColor = 'purple';

  }


// loop horizontal container vertically
for (let j = 1; j <= 16; j++) {
  let horizontalClone = horizontalContainer.cloneNode(true); // Clone the horizontal container

  for (let i = 1; i <= 16; i++) {
    let squareClone = square.cloneNode(true);
    squareClone.addEventListener('mouseover', handleSquareClick); // Attach the event listener
    horizontalClone.appendChild(squareClone);
  }

  body.appendChild(horizontalClone);
}
