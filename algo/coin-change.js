/**
 * @see {https://leetcode.com/problems/coin-change/}
 */

/**
 * @param {number[]} coins
 * @param {number} amount
 * @return {number}
 */
var coinChange = function (coins, amount) {
  if (!coins.length) {
    return -1;
  }
  const dp = [0].concat(Array(amount).fill(Infinity));

  let i = -1;
  let j;
  let upperBound = amount + 1;

  while (++i < coins.length) {
    j = coins[i] - 1;
    while (++j < upperBound) {
      dp[j] = Math.min(dp[j], dp[j - coins[i]] + 1);
      console.log(dp, coins[i], j);
    }
    console.log('------');

  }

  return dp[dp.length - 1] !== Infinity ? dp[dp.length - 1] : -1;
};

{
  const input = [[1, 2, 5], 11];
  const expected = 3;
  const result = coinChange(input[0], input[1]);
  console.log(result, expected, result === expected);
}

{
  const input = [[2], 3];
  const expected = -1;
  const result = coinChange(input[0], input[1]);
  console.log(result, expected, result === expected);
}

{
  const input = [[1], 0];
  const expected = 0;
  const result = coinChange(input[0], input[1]);
  console.log(result, expected, result === expected);
}

{
  const input = [[], 3];
  const expected = -1;
  const result = coinChange(input[0], input[1]);
  console.log(result, expected, result === expected);
}

{
  const input = [[186, 419, 83, 408], 6249];
  const expected = 20;
  const result = coinChange(input[0], input[1]);
  console.log(result, expected, result === expected);
}
