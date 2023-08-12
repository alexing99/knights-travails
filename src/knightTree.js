let counter = 1;
let currentDepthArray = [];

export class KnightNode {
  constructor(
    data = null,
    possibleMoves = []
    // one = null,
    // two = null,
    // four = null,
    // five = null,
    // seven = null,
    // eight = null,
    // ten = null,
    // eleven = null
  ) {
    this.data = data;
    this.possibleMoves = possibleMoves;

    // this.one = one;
    // this.two = two;
    // this.four = four;
    // this.five = five;
    // this.seven = seven;
    // this.eight = eight;
    // this.ten = ten;
    // this.eleven = eleven;
  }
}

class Tree {
  constructor(start, end) {
    this.end = end;
    this.start = start;
    this.root = this.buildFirstArr(start);

    console.log(start, end);
  }

  appender(move) {
    if (move[0] > 8 || move[0] < 1 || move[1] > 8 || move[1] < 1) {
      return false;
    }
    return true;
    // this.possibleMoves.push(move);
  }

  moveChecker(array) {
    if (
      array.find(
        (coord) => coord[0] === this.end[0] && coord[1] === this.end[1]
      ) != null
    ) {
      console.log("epic!!!");
      return true;
    }
    return false;
  }
  buildRestArray(array) {
    let nextDepthArray = [];
    array.forEach((i) => {
      let root = new KnightNode(i);

      let rootOne = [i[0] + 1, i[1] + 2];
      if (this.appender(rootOne)) root.possibleMoves.push(rootOne);
      let rootTwo = [i[0] + 2, i[1] + 1];
      if (this.appender(rootTwo)) root.possibleMoves.push(rootTwo);
      let rootFour = [i[0] + 2, i[1] - 1];
      if (this.appender(rootFour)) root.possibleMoves.push(rootFour);
      let rootFive = [i[0] + 1, i[1] - 2];
      if (this.appender(rootFive)) root.possibleMoves.push(rootFive);
      let rootSeven = [i[0] - 1, i[1] - 2];
      if (this.appender(rootSeven)) root.possibleMoves.push(rootSeven);
      let rootEight = [i[0] - 2, i[1] - 1];
      if (this.appender(rootEight)) root.possibleMoves.push(rootEight);
      let rootTen = [i[0] - 2, i[1] + 1];
      if (this.appender(rootTen)) root.possibleMoves.push(rootTen);
      let rootEleven = [i[0] - 1, i[1] + 2];
      if (this.appender(rootEleven)) root.possibleMoves.push(rootEleven);

      // currentDepthArray.push(...root.possibleMoves);cvs
      nextDepthArray.push(...root.possibleMoves);
    });

    console.log(counter, nextDepthArray);

    if (this.moveChecker(nextDepthArray)) {
      const promptBox = document.getElementById("promptBox");
      promptBox.textContent = `It will take at least ${counter} moves to get from ${this.start} to ${this.end}. `;
      console.log(this.root);
    } else {
      currentDepthArray = [];
      currentDepthArray.push(...nextDepthArray);
      counter++;
      this.buildRestArray(currentDepthArray);
    }
  }

  buildFirstArr = function (start = null) {
    if (start[0] === this.end[0] && start[1] === this.end[1]) {
      const promptBox = document.getElementById("promptBox");
      promptBox.textContent = `You're already there smartguy`;
      return;
    }
    if (
      start === null ||
      start[0] > 8 ||
      start[0] < 1 ||
      start[1] > 8 ||
      start[1] < 1
    ) {
      return null;
    }

    if (counter === 1) {
      let root = new KnightNode(start);

      let rootOne = [start[0] + 1, start[1] + 2];
      if (this.appender(rootOne)) root.possibleMoves.push(rootOne);
      let rootTwo = [start[0] + 2, start[1] + 1];
      if (this.appender(rootTwo)) root.possibleMoves.push(rootTwo);
      let rootFour = [start[0] + 2, start[1] - 1];
      if (this.appender(rootFour)) root.possibleMoves.push(rootFour);
      let rootFive = [start[0] + 1, start[1] - 2];
      if (this.appender(rootFive)) root.possibleMoves.push(rootFive);
      let rootSeven = [start[0] - 1, start[1] - 2];
      if (this.appender(rootSeven)) root.possibleMoves.push(rootSeven);
      let rootEight = [start[0] - 2, start[1] - 1];
      if (this.appender(rootEight)) root.possibleMoves.push(rootEight);
      let rootTen = [start[0] - 2, start[1] + 1];
      if (this.appender(rootTen)) root.possibleMoves.push(rootTen);
      let rootEleven = [start[0] - 1, start[1] + 2];
      if (this.appender(rootEleven)) root.possibleMoves.push(rootEleven);

      currentDepthArray.push(...root.possibleMoves);

      if (this.moveChecker(currentDepthArray)) {
        const promptBox = document.getElementById("promptBox");
        promptBox.textContent = `It will take 1 move to get from ${start} to ${this.end}. `;
      } else {
        counter++;
        this.buildRestArray(currentDepthArray);
      }
    }
  };

  // this.buildTree(root.one);
  // this.buildTree(root.two);
  // this.buildTree(root.four);
  // this.buildTree(root.five);
  // this.buildTree(root.seven);
  //   buildTree(root.eight);
  //   buildTree(root.ten);
  //   buildTree(root.eleven);
}

export { Tree };
