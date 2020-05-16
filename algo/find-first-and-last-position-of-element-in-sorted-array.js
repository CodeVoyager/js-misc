/**
 * @see{https://leetcode.com/problems/find-first-and-last-position-of-element-in-sorted-array/}
 */
/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var searchRange = function (nums, target) {
  if (nums.length < 2) {
    return nums[0] === target ? [0, 0] : [-1, -1];
  }
  const targetIndex = findIndex(nums, target);

  if (targetIndex < 0) {
    return [targetIndex, targetIndex];
  }

  let lo = targetIndex;
  let hi = targetIndex;

  while (true) {
    if (nums[--lo] !== target) {
      ++lo;
      break;
    }
  }
  while (true) {
    if (nums[++hi] !== target) {
      --hi;
      break;
    }
  }

  return [lo, hi];
};

function findIndex(nums, target) {
  let lo = 0;
  let hi = nums.length - 1;
  let mid;

  while (lo <= hi) {
    mid = Math.floor((lo + hi) / 2);
    if (nums[mid] === target) {
      return mid;
    }
    if (nums[mid] > target) {
      hi = mid - 1;
    } else {
      lo = mid + 1;
    }
  }

  return -1;
}

//----------------

/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var searchRange = function (nums, target) {
  if (nums.length < 2) {
    return nums[0] === target ? [0, 0] : [-1, -1];
  }
  const targetIndexLeft = findIndex(nums, target, true);

  if (targetIndexLeft === nums.length || target !== nums[targetIndexLeft]) {
    return [-1, -1];
  }

  const targetIndexRight = findIndex(nums, target) - 1;

  return [targetIndexLeft, targetIndexRight];
};

function findIndex(nums, target, left) {
  let lo = 0;
  let hi = nums.length;
  let mid;

  while (lo < hi) {
    mid = Math.floor((lo + hi) / 2);
    if (nums[mid] > target || (left && target === nums[mid])) {
      hi = mid;
    } else {
      lo = mid + 1;
    }
  }

  return lo;
}

{
  let input = [[5, 7, 7, 8, 8, 10], 8];
  let output = JSON.stringify(searchRange(...input));
  let expected = JSON.stringify([3, 4]);

  console.log("--------");
  console.log(output, expected, output === expected);
  console.log("--------");
}
{
  let input = [[5, 7, 7, 8, 8, 10], 6];
  let output = JSON.stringify(searchRange(...input));
  let expected = JSON.stringify([-1, -1]);

  console.log("--------");
  console.log(output, expected, output === expected);
  console.log("--------");
}
{
  let input = [[5, 7, 7, 7, 8, 8, 10], 7];
  let output = JSON.stringify(searchRange(...input));
  let expected = JSON.stringify([1, 3]);

  console.log("--------");
  console.log(output, expected, output === expected);
  console.log("--------");
}
{
  let input = [[5, 7, 7, 7, 8, 8, 10], 5];
  let output = JSON.stringify(searchRange(...input));
  let expected = JSON.stringify([0, 0]);

  console.log("--------");
  console.log(output, expected, output === expected);
  console.log("--------");
}
{
  let input = [[], 7];
  let output = JSON.stringify(searchRange(...input));
  let expected = JSON.stringify([-1, -1]);

  console.log("--------");
  console.log(output, expected, output === expected);
  console.log("--------");
}
{
  let input = [[7], 7];
  let output = JSON.stringify(searchRange(...input));
  let expected = JSON.stringify([0, 0]);

  console.log("--------");
  console.log(output, expected, output === expected);
  console.log("--------");
}
{
  let input = [[2, 2], 2];
  let output = JSON.stringify(searchRange(...input));
  let expected = JSON.stringify([0, 1]);

  console.log("--------");
  console.log(output, expected, output === expected);
  console.log("--------");
}
