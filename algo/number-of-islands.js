/**
 * @see {https://leetcode.com/problems/number-of-islands/}
 */

/**
 * @param {character[][]} grid
 * @return {number}
 */
var numIslands = function (grid) {
  const ISLAND = "1";
  const WATER = "0";
  const ROW = 0;
  const COL = 1;
  let row = -1;
  let col;
  let count = 0;
  const dirs = [
    [0, -1],
    [0, 1],
    [1, 0],
    [-1, 0],
  ];

  function clear(row, col) {
    if (
      row < 0 ||
      row >= grid.length ||
      col < 0 ||
      col >= grid[row].length ||
      grid[row][col] === WATER
    ) {
      return;
    }

    let i = -1;

    grid[row][col] = WATER;

    while (++i < dirs.length) {
      clear(row + dirs[i][ROW], col + dirs[i][COL]);
    }
  }

  while (++row < grid.length) {
    col = -1;
    while (++col < grid[row].length) {
      if (ISLAND === grid[row][col]) {
        ++count;
        clear(row, col);
      }
    }
  }

  return count;
};

{
  let input = ["100".split(""), "100".split(""), "011".split("")];
  let output = numIslands(input);
  let expected = 2;

  console.log("--------");
  console.log(output, expected, output === expected);
  console.log("--------");
}
{
  let input = ["10".split(""), "00".split("")];
  let output = numIslands(input);
  let expected = 1;

  console.log("--------");
  console.log(output, expected, output === expected);
  console.log("--------");
}
{
  let input = [
    "11110".split(""),
    "11010".split(""),
    "11000".split(""),
    "00000".split(""),
  ];
  let output = numIslands(input);
  let expected = 1;

  console.log("--------");
  console.log(output, expected, output === expected);
  console.log("--------");
}
{
  let input = [
    "11000".split(""),
    "11000".split(""),
    "00100".split(""),
    "00011".split(""),
  ];
  let output = numIslands(input);
  let expected = 3;

  console.log("--------");
  console.log(output, expected, output === expected);
  console.log("--------");
}
