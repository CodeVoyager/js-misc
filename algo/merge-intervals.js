/**
 * @see {https://leetcode.com/problems/merge-intervals/}
 */

/**
 * @param {number[][]} intervals
 * @return {number[][]}
 */
var merge = function (intervals) {
  if (intervals.length < 2) {
    return intervals;
  }

  const BEGIN = 0;
  const END = 1;
  const stack = [];
  let i = 0;

  intervals.sort((a, b) => a[BEGIN] - b[BEGIN]);

  stack.push(intervals[0]);

  while (++i < intervals.length) {
    if (stack[stack.length - 1][END] < intervals[i][BEGIN]) {
      stack.push(intervals[i]);
    } else if (stack[stack.length - 1][END] < intervals[i][END]) {
      stack[stack.length - 1][END] = intervals[i][END];
    }
  }

  return stack;
};

{
  let input = [
    [1, 3],
    [2, 6],
    [8, 10],
    [15, 18],
  ];
  let output = merge(input);
  let expected = [
    [1, 6],
    [8, 10],
    [15, 18],
  ];

  console.log("--------");
  console.log(
    output,
    expected,
    JSON.stringify(output) === JSON.stringify(expected)
  );
  console.log("--------");
}
{
  let input = [
    [1, 3],
    [8, 10],
    [15, 18],
    [2, 6],
  ];
  let output = merge(input);
  let expected = [
    [1, 6],
    [8, 10],
    [15, 18],
  ];

  console.log("--------");
  console.log(
    output,
    expected,
    JSON.stringify(output) === JSON.stringify(expected)
  );
  console.log("--------");
}
{
  let input = [[1, 3]];
  let output = merge(input);
  let expected = [[1, 3]];

  console.log("--------");
  console.log(
    output,
    expected,
    JSON.stringify(output) === JSON.stringify(expected)
  );
  console.log("--------");
}
{
  let input = [];
  let output = merge(input);
  let expected = [];

  console.log("--------");
  console.log(
    output,
    expected,
    JSON.stringify(output) === JSON.stringify(expected)
  );
  console.log("--------");
}
