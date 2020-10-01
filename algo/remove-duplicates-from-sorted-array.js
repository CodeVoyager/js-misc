/**
 * @see {https://leetcode.com/problems/remove-duplicates-from-sorted-array/}
 */

/**
 * @param {number[]} nums
 * @return {number}
 */
const removeDuplicates = (nums) => {
  if (nums.length <= 1) {
    return nums.length;
  }

  let index = 1;
  let i = 0;

  while (++i < nums.length) {
    if (nums[i] !== nums[i - 1]) nums[index++] = nums[i];
  }

  return index;
};

{
  let input = [1, 1, 2];
  let output = removeDuplicates(input);
  let expected = 2;

  console.log("--------");
  console.log(output, expected, output === expected);
  console.log("--------");
}

{
  let input = [1, 2];
  let output = removeDuplicates(input);
  let expected = 2;

  console.log("--------");
  console.log(output, expected, output === expected);
  console.log("--------");
}

{
  let input = [];
  let output = removeDuplicates(input);
  let expected = 0;

  console.log("--------");
  console.log(output, expected, output === expected);
  console.log("--------");
}

{
  let input = [1];
  let output = removeDuplicates(input);
  let expected = 1;

  console.log("--------");
  console.log(output, expected, output === expected);
  console.log("--------");
}

{
  let input = [1, 1, 1, 1];
  let output = removeDuplicates(input);
  let expected = 1;

  console.log("--------");
  console.log(output, expected, output === expected);
  console.log("--------");
}

{
  let input = [0, 0, 1, 1, 1, 2, 2, 3, 3, 4];
  let output = removeDuplicates(input);
  let expected = 5;

  console.log("--------");
  console.log(output, expected, output === expected);
  console.log("--------");
}

{
  let input = [0, 0, 0, 0, 0, 1, 2, 2, 3, 3, 4, 4];
  let output = removeDuplicates(input);
  let expected = 5;

  console.log(input);

  console.log("--------");
  console.log(output, expected, output === expected);
  console.log("--------");
}
