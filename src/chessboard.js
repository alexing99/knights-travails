import { Tree } from "./knightTree";

export const renderChessboard = () => {
  let start = "";
  const promptBox = document.getElementById("promptBox");
  promptBox.textContent = "Place Knight";
  const board = document.getElementById("chessboard");

  for (let i = 1, j = 8, k = 0; k < 64; i++, k++) {
    if (i > 8) {
      i = 1;
      j--;
    }

    let cell = document.createElement("div");
    cell.classList.add("square");
    cell.setAttribute("id", `cell-${i}-${j}`);

    board.appendChild(cell);
  }

  const squares = document.querySelectorAll(".square"); // selects the individual divs that were just created
  squares.forEach((square) => {
    // loops through them
    square.addEventListener("click", handleclick); // adds event listener set to the function handleclick
  });

  function handleclick() {
    if (promptBox.textContent === "Place Knight") {
      let parseStart = this.id.toString().split("-");
      start = [`${parseStart[1]}`, `${parseStart[2]}`].map(Number);
      // let start = fart.map(Number);

      let currentCell = event.target;
      let horse = document.createElement("img");

      horse.setAttribute("src", "/src/images/knight.png");
      horse.setAttribute("id", "horse");

      currentCell.appendChild(horse);
      promptBox.textContent = "Now Set a Destination";

      return start;
    } else if (promptBox.textContent === "Now Set a Destination") {
      let currentCell = event.target;
      let stable = document.createElement("img");

      stable.setAttribute("src", "/src/images/stable.png");
      stable.setAttribute("id", "stable");

      currentCell.appendChild(stable);

      let parseDest = this.id.toString().split("-");
      let dest = [`${parseDest[1]}`, `${parseDest[2]}`].map(Number);

      console.log("s", start);

      new Tree(start, dest);
    }
  }
};
