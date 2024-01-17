// TO DO *** Understand height and wieght applied to clones and not original and why it affects grid differently

document.addEventListener("DOMContentLoaded", () => {
  //body
  const body = document.querySelector("body");
  body.style.height = "100vh";
  body.style.width = "100vh";
  body.style.border = "1px solid blue";
  body.style.margin = "0px 40vh 0px";

  //button container
  const btnContainer = document.createElement("div");
  body.appendChild(btnContainer);
  // btnContainer.style.border = '3px solid red'
  btnContainer.style.margin = "50px";
  btnContainer.style.textAlign = "center";

  //button
  const button = document.createElement("button");
  btnContainer.appendChild(button);
  button.textContent = "click to set grid size";
  button.style.fontSize = "24px";
  button.style.lineHeight = "64px";
  button.style.padding = "5px 20px";

  //grind container
  const gridContainer = document.createElement("div");
  body.appendChild(gridContainer);
  gridContainer.style.height = "80vh";
  gridContainer.style.width = "80vh";
  gridContainer.style.margin = "0px 120px 0px";
  gridContainer.style.border = "0.5px solid black";

  //grid value
  let grid = 4;
  let gridValue = 100 / grid;

  // horizontal container for squares
  const horizontalContainer = document.createElement("div");
  horizontalContainer.style.width = "100%";
  // const height = horizontalContainer.style.height = `${gridValue}%`;
  horizontalContainer.style.display = "flex";

  //horizontal square clones
  const square = document.createElement("div");
  square.style.border = "0.5px solid black";

  square.style.height = "100%";
  square.style.boxSizing = "border-box";

  //Mouse behavior
  let isMouseDown = false;
  document.addEventListener("mousedown", () => {
    isMouseDown = true;
  });
  document.addEventListener("mouseup", () => {
    isMouseDown = false;
  });
  document.addEventListener("mouseleave", () => {
    isMouseDown = false;
  });


  function random_rgba() {
    var o = Math.round, r = Math.random, s = 255;
    return 'rgba(' + o(r()*s) + ',' + o(r()*s) + ',' + o(r()*s) + ',' + r().toFixed(1) + ')';
}
  function changeColor(event) {
    event.currentTarget.style.backgroundColor = random_rgba();
  }

  function generateGrid(num) {
    if (num < 4 || num > 100) {
      alert("enter number between 4 and 100");
      return;
    }
    gridContainer.innerHTML = "";
    grid = num;
    gridValue = 100 / grid;

    for (let j = 1; j <= num; j++) {
      let horizontalClone = horizontalContainer.cloneNode(true); // Clone the horizontal container
      horizontalClone.style.height = `${gridValue}%`;

      for (let i = 1; i <= num; i++) {
        let squareClone = square.cloneNode(true);
        squareClone.style.width = `${gridValue}%`;

        squareClone.addEventListener("mousemove", (event) => {
          if (isMouseDown) {
            changeColor(event);
          }
        });
        horizontalClone.appendChild(squareClone); 
       /* These copies (or clones) are what get appended to your grid, 
        not the original horizontalContainer and square elements themselves.The original horizontalContainer and 
        square are never directly appended to the DOM (Document Object Model). They exist only in memory and serve as 
        blueprints for creating the elements that actually get displayed. This is a common practice for generating 
        repeated DOM elements dynamically, where you create a template element, clone it as needed, and 
        then insert those clones into the document. */
      }

      gridContainer.appendChild(horizontalClone);
    }
  }

  button.addEventListener("click", () => {
    let newValue = prompt("select grid size", "");
    newValue = parseInt(newValue, 10);
    if (isNaN(newValue)) {
      alert("enter a vaild number between 4 and 100");
    }
    generateGrid(newValue);
  });
});
