/**
 * @see{https://leetcode.com/problems/jump-game/}
 */

/**
 * @param {number[]} nums
 * @return {boolean}
 */
var canJump = function (nums) {
  function visit(index, share) {
    if (
      index >= share.nums.length ||
      share.visited[index] ||
      share.canReachEnd
    ) {
      return;
    }
    if (index === share.nums.length - 1) {
      share.canReachEnd = true;
      return;
    }

    let possibleOffset = share.nums[index];

    share.visited[index] = true;

    while (possibleOffset > 0) {
      visit(index + possibleOffset, share);
      --possibleOffset;
    }
  }

  const share = {
    visited: Array(nums.length).fill(false),
    canReachEnd: false,
    nums,
  };

  visit(0, share);

  return share.canReachEnd;
};

/**
 * @param {number[]} nums
 * @return {boolean}
 */
var canJump = function (nums) {
  let lastPosition = nums.length - 1;
  let i = nums.length;
  while (--i >= 0) {
    if (i + nums[i] >= lastPosition) {
      lastPosition = i;
    }
  }

  return lastPosition === 0;
};

{
  let input = [2, 3, 1, 1, 4];
  let output = canJump(input);
  let expected = true;

  console.log("--------");
  console.log(output, expected, output === expected);
  console.log("--------");
}

{
  let input = [3, 2, 1, 0, 4];
  let output = canJump(input);
  let expected = false;

  console.log("--------");
  console.log(output, expected, output === expected);
  console.log("--------");
}
{
  let input = [];
  let output = canJump(input);
  let expected = false;

  console.log("--------");
  console.log(output, expected, output === expected);
  console.log("--------");
}
{
  let input = [0];
  let output = canJump(input);
  let expected = true;

  console.log("--------");
  console.log(output, expected, output === expected);
  console.log("--------");
}
{
  let input = [0, 1];
  let output = canJump(input);
  let expected = false;

  console.log("--------");
  console.log(output, expected, output === expected);
  console.log("--------");
}
{
  let input = [1];
  let output = canJump(input);
  let expected = true;

  console.log("--------");
  console.log(output, expected, output === expected);
  console.log("--------");
}
