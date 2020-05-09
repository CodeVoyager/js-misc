/**
 * @see {https://leetcode.com/problems/insert-interval/}
 */

/**
 * FYI: Sorting was not necessary
 * @param {number[][]} intervals
 * @param {number[]} newInterval
 * @return {number[][]}
 */
var insert = function (intervals, newInterval) {
  const START = 0;
  const END = 1;
  let i = -1;
  let smaller = [];
  let bigger = [];

  while (++i < intervals.length) {
    if (intervals[i][END] < newInterval[START]) {
      smaller.push(intervals[i]);
    } else if (intervals[i][START] > newInterval[END]) {
      bigger.push(intervals[i]);
    } else {
      newInterval[START] = Math.min(newInterval[START], intervals[i][START]);
      newInterval[END] = Math.max(newInterval[END], intervals[i][END]);
    }
  }

  return smaller.concat([newInterval]).concat(bigger);
};
