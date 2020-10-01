/**
 * @see{https://leetcode.com/problems/surrounded-regions/}
 */

/**
 * @param {character[][]} board
 * @return {void} Do not return anything, modify board in-place instead.
 */
var solve = function (board) {
  if (board.length < 1 || board[0].length < 1) {
    return board;
  }
  const circle = "O";
  const cross = "X";
  const one = "1";
  let row = -1;
  let col = -1;
  while (++row < board.length) {
    markWithOnes(row, 0, board);
    if (board[0].length > 1) {
      markWithOnes(row, board[0].length - 1, board);
    }
  }
  while (++col < board[0].length) {
    markWithOnes(0, col, board);
    if (board.length > 1) {
      markWithOnes(board.length - 1, col, board);
    }
  }

  row = -1;
  while (++row < board.length) {
    col = -1;
    while (++col < board[0].length) {
      if (board[row][col] === circle) {
        board[row][col] = cross;
      }
      if (board[row][col] === one) {
        board[row][col] = circle;
      }
    }
  }
};

function markWithOnes(row, col, board, dir) {
  if (
    row < 0 ||
    row >= board.length ||
    col < 0 ||
    col >= board[0].length ||
    board[row][col] !== "O"
  ) {
    return;
  }

  board[row][col] = "1";

  markWithOnes(row + 1, col, board, dir);
  markWithOnes(row - 1, col, board, dir);
  markWithOnes(row, col + 1, board, dir);
  markWithOnes(row, col - 1, board, dir);
}

{
  let input = [
    ["X", "X", "X", "X"],
    ["X", "O", "O", "X"],
    ["X", "X", "O", "X"],
    ["X", "O", "X", "X"],
  ];
  solve(input);
  let output = JSON.stringify(input);
  let expected = JSON.stringify([
    ["X", "X", "X", "X"],
    ["X", "X", "X", "X"],
    ["X", "X", "X", "X"],
    ["X", "O", "X", "X"],
  ]);

  console.log("--------");
  console.log(output, expected, output === expected);
  console.log("--------");
}

{
  let input = [
    ["X", "O", "X", "O", "X", "O"],
    ["O", "X", "O", "X", "O", "X"],
    ["X", "O", "X", "O", "X", "O"],
    ["O", "X", "O", "X", "O", "X"],
  ];
  solve(input);
  let output = JSON.stringify(input);
  let expected = JSON.stringify([
    ["X", "O", "X", "O", "X", "O"],
    ["O", "X", "X", "X", "X", "X"],
    ["X", "X", "X", "X", "X", "O"],
    ["O", "X", "O", "X", "O", "X"],
  ]);

  const foo = [
    ["X", "O", "X", "O", "X", "O"],
    ["O", "X", "X", "X", "O", "X"],
    ["X", "X", "X", "X", "X", "O"],
    ["O", "X", "O", "X", "O", "X"],
  ];

  console.log("--------");
  console.log(output, expected, output === expected);
  console.log("--------");
}
{
  let input = [
    ["O", "X", "X", "O", "X"],
    ["X", "O", "O", "X", "O"],
    ["X", "O", "X", "O", "X"],
    ["O", "X", "O", "O", "O"],
    ["X", "X", "O", "X", "O"],
  ];
  solve(input);
  let output = JSON.stringify(input);
  let expected = JSON.stringify([
    ["O", "X", "X", "O", "X"],
    ["X", "X", "X", "X", "O"],
    ["X", "X", "X", "O", "X"],
    ["O", "X", "O", "O", "O"],
    ["X", "X", "O", "X", "O"],
  ]);

  const foo = [
    ["O", "X", "X", "O", "X"],
    ["X", "X", "X", "X", "O"],
    ["X", "X", "X", "X", "X"],
    ["O", "X", "O", "O", "O"],
    ["X", "X", "O", "X", "O"],
  ];

  console.log("--------");
  console.log(output, expected, output === expected);
  console.log("--------");
}
