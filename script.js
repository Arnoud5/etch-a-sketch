// making the sketch pad and sketch feature when the browser is first open
const canvas = document.querySelector(".canvas");
let numBoxes = 256;
let numRow = 16;

createBoxes(numBoxes, numRow);
function createBoxes(numBoxes) {
  for (let i = 0; i < numBoxes; i++) {
    const box = document.createElement("div");
    box.classList.add("box");
    box.classList.add("box-" + i);
    box.addEventListener("mouseover", (e) => {
      e.target.style.cssText = "background-color: rgb(175, 131, 183)";
    });
    canvas.appendChild(box);
  }
}

function newSketchPad() {
  let box1 = document.querySelectorAll(".box");
  // now we need to delete the element "box1"
  for (let i = 0; i < box1.length; i++) {
    box1[i].remove();
  }

  // pupolate the canvas with the size of prompted sketch size with 100 max
  let sketchSize = Number(
    prompt("How many boxes do you want to make ? e.g. 16")
  );
  if (sketchSize > 100) {
    let sketchSize = Number(
      prompt("How many boxes do you want to make ? e.g. 16")
    );
  }
  canvas.style.cssText = `grid-template-columns: repeat(${sketchSize}, 1fr);`;
  sketchSize = sketchSize * sketchSize;
  for (let i = 0; i < sketchSize; i++) {
    const box = document.createElement("div");
    box.classList.add("box");
    box.classList.add("box-" + i);
    box.addEventListener("mouseover", (e) => {
      e.target.style.cssText = "background-color: rgb(175, 131, 183)";
    });
    canvas.appendChild(box);
  }
}
