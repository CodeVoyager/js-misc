/**
 * @see{https://leetcode.com/problems/maximum-product-subarray/}
 */

/**
 * @param {number[]} nums
 * @return {number}
 */
var maxProduct = function (nums) {
  if (nums.length < 2) {
    return nums[0] || 0;
  }
  let max = -Infinity;
  let maxLocal = 1;
  let minLocal = 1;
  let i = -1;
  let prod1;
  let prod2;

  while (++i < nums.length) {
    prod1 = maxLocal * nums[i];
    prod2 = minLocal * nums[i];
    maxLocal = Math.max(nums[i], Math.max(prod1, prod2));
    minLocal = Math.min(nums[i], Math.min(prod1, prod2));
    max = Math.max(max, maxLocal);
  }

  return max;
};

{
  let input = [2, 3, -2, 4];
  let output = maxProduct(input);
  let expected = 6;

  console.log("--------");
  console.log(output, expected, output === expected);
  console.log("--------");
}

{
  let input = [-2, 0, -1];
  let output = maxProduct(input);
  let expected = 0;

  console.log("--------");
  console.log(output, expected, output === expected);
  console.log("--------");
}

{
  let input = [];
  let output = maxProduct(input);
  let expected = 0;

  console.log("--------");
  console.log(output, expected, output === expected);
  console.log("--------");
}

{
  let input = [1];
  let output = maxProduct(input);
  let expected = 1;

  console.log("--------");
  console.log(output, expected, output === expected);
  console.log("--------");
}

{
  let input = [-2,3,-4];
  let output = maxProduct(input);
  let expected = 24;

  console.log("--------");
  console.log(output, expected, output === expected);
  console.log("--------");
}

{
  let input = [2,-5,-2,-4,3];
  let output = maxProduct(input);
  let expected = 24;

  console.log("--------");
  console.log(output, expected, output === expected);
  console.log("--------");
}
