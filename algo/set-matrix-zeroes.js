/**
 * @see{https://leetcode.com/problems/set-matrix-zeroes/}
 */

/**
 * @param {number[][]} matrix
 * @return {void} Do not return anything, modify matrix in-place instead.
 */
var setZeroes = function (matrix) {
  const stack = [];

  let row = -1;
  let col;

  while (++row < matrix.length) {
    col = -1;
    while (++col < matrix[0].length) {
      if (matrix[row][col] === 0) {
        stack.push([row, col]);
      }
    }
  }

  while (stack.length) {
    let [row, col] = stack.pop();
    markCellsInRow(row, 0, matrix);
    markCellsInCol(0, col, matrix);
  }
};

function markCellsInRow(row, col, matrix) {
  if (col >= matrix[0].length) {
    return;
  }
  matrix[row][col] = 0;
  markCellsInRow(row, col + 1, matrix);
}
function markCellsInCol(row, col, matrix) {
  if (row >= matrix.length) {
    return;
  }
  matrix[row][col] = 0;
  markCellsInCol(row + 1, col, matrix);
}

{
  let input = [
    [0, 1, 2, 0],
    [3, 4, 5, 2],
    [1, 3, 1, 5],
  ];
  setZeroes(input);
  let output = JSON.stringify(input);
  let expected = JSON.stringify([
    [0, 0, 0, 0],
    [0, 4, 5, 0],
    [0, 3, 1, 0],
  ]);

  console.log("--------");
  console.log(output, expected, output === expected);
  console.log("--------");
}

{
  let input = [
    [1, 1, 1],
    [1, 0, 1],
    [1, 1, 1],
  ];
  setZeroes(input);
  let output = JSON.stringify(input);
  let expected = JSON.stringify([
    [1, 0, 1],
    [0, 0, 0],
    [1, 0, 1],
  ]);

  console.log("--------");
  console.log(output, expected, output === expected);
  console.log("--------");
}
