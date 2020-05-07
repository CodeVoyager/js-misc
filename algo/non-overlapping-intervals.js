/**
 * @see {https://leetcode.com/problems/non-overlapping-intervals/}
 */

/**
 * @param {number[][]} intervals
 * @return {number}
 */
var eraseOverlapIntervals = function (intervals) {
  if (intervals.length < 2) {
    return 0;
  }
  const stack = [];
  let top;
  let i = 0;

  intervals.sort((a, b) => a[1] - b[1]);

  stack.push(intervals[0]);

  function peek(xs) {
    return xs[xs.length - 1];
  }

  while (++i < intervals.length) {
    top = peek(stack);
    if (top[1] <= intervals[i][0]) {
      stack.push(intervals[i]);
    }
  }

  return intervals.length - stack.length;
};

{
  let input = [
    [1, 2],
    [2, 3],
    [3, 4],
    [1, 3],
  ];
  let output = eraseOverlapIntervals(input);
  let expected = 1;

  console.log("--------");
  console.log(output, expected, output === expected);
  console.log("--------");
}

{
  let input = [
    [1, 100],
    [11, 22],
    [1, 11],
    [2, 12],
  ];
  let output = eraseOverlapIntervals(input);
  let expected = 2;

  console.log("--------");
  console.log(output, expected, output === expected);
  console.log("--------");
}

{
  let input = [];
  let output = eraseOverlapIntervals(input);
  let expected = 0;

  console.log("--------");
  console.log(output, expected, output === expected);
  console.log("--------");
}

{
  let input = [[1, 2]];
  let output = eraseOverlapIntervals(input);
  let expected = 0;

  console.log("--------");
  console.log(output, expected, output === expected);
  console.log("--------");
}

{
  let input = [
    [1, 2],
    [1, 2],
    [1, 2],
  ];
  let output = eraseOverlapIntervals(input);
  let expected = 2;

  console.log("--------");
  console.log(output, expected, output === expected);
  console.log("--------");
}

{
  let input = [
    [1, 2],
    [2, 3],
  ];
  let output = eraseOverlapIntervals(input);
  let expected = 0;

  console.log("--------");
  console.log(output, expected, output === expected);
  console.log("--------");
}

{
  let input = [
    [-2, -1],
    [-1, 1],
    [1, 2],
    [-1, 3],
  ];
  let output = eraseOverlapIntervals(input);
  let expected = 1;

  console.log("--------");
  console.log(output, expected, output === expected);
  console.log("--------");
}
