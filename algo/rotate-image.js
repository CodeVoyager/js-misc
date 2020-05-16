/**
 * @see{https://leetcode.com/problems/rotate-image/}
 */

/**
 * @param {number[][]} matrix
 * @return {void} Do not return anything, modify matrix in-place instead.
 */
var rotate = function (matrix) {
  let row = -1;
  let col;
  while (++row < matrix.length) {
    col = row;
    while (++col < matrix.length) {
      [matrix[col][row], matrix[row][col]] = [
        matrix[row][col],
        matrix[col][row],
      ];
    }
  }
  row = -1;
  while (++row < matrix.length) {
    col = -1;
    while (++col < matrix.length / 2) {
      [matrix[row][matrix.length - col - 1], matrix[row][col]] = [
        matrix[row][col],
        matrix[row][matrix.length - col - 1],
      ];
    }
  }
};

{
  let input = [
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9],
  ];
  rotate(input);
  let output = JSON.stringify(input);
  let expected = JSON.stringify([
    [7, 4, 1],
    [8, 5, 2],
    [9, 6, 3],
  ]);

  console.log("--------");
  console.log(output, expected, output === expected);
  console.log("--------");
}
