/**
 * @see{https://leetcode.com/problems/search-in-rotated-sorted-array/}
 */

/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var search = function (nums, target) {
  if (nums.length < 2) {
    return target === nums[0] ? 0 : -1;
  }
  function findMedium(nums) {
    if (nums[0] < nums[nums.length - 1]) {
      return Math.floor((nums.length - 1) / 2);
    }
    let lo = 0;
    let hi = nums.length - 1;
    let mid;
    while (lo <= hi) {
      mid = lo + Math.floor((hi - lo) / 2);
      if (nums[mid] > nums[mid + 1]) {
        return mid + 1;
      }
      if (nums[mid] < nums[mid - 1]) {
        return mid;
      }
      if (nums[mid] > nums[0]) {
        lo = mid + 1;
      } else {
        hi = mid - 1;
      }
    }
  }
  function binSearch(nums, lo, hi, target) {
    let mid;
    while (lo <= hi) {
      mid = lo + Math.floor((hi - lo) / 2);

      if (nums[mid] === target) {
        return mid;
      }

      if (nums[mid] < target) {
        lo = mid + 1;
      } else {
        hi = mid - 1;
      }
    }

    return -1;
  }

  const m = findMedium(nums);

  if (nums[0] <= target && target <= nums[m - 1]) {
    return binSearch(nums, 0, m - 1, target);
  } else {
    return binSearch(nums, m, nums.length - 1, target);
  }
};

{
  let input = [[4, 5, 6, 7, 0, 1, 2], 0];
  let output = search(input[0], input[1]);
  let expected = 4;

  console.log("--------");
  console.log(
    output,
    expected,
    JSON.stringify(output) === JSON.stringify(expected)
  );
  console.log("--------");
}

{
  let input = [[4, 5, 6, 7, 0, 1, 2], 3];
  let output = search(input[0], input[1]);
  let expected = -1;

  console.log("--------");
  console.log(
    output,
    expected,
    JSON.stringify(output) === JSON.stringify(expected)
  );
  console.log("--------");
}

{
  let input = [[3, 2], 3];
  let output = search(input[0], input[1]);
  let expected = 0;

  console.log("--------");
  console.log(
    output,
    expected,
    JSON.stringify(output) === JSON.stringify(expected)
  );
  console.log("--------");
}

{
  let input = [[2, 3], 3];
  let output = search(input[0], input[1]);
  let expected = 1;

  console.log("--------");
  console.log(
    output,
    expected,
    JSON.stringify(output) === JSON.stringify(expected)
  );
  console.log("--------");
}
