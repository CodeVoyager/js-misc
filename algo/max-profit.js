/**
 * @see {https://leetcode.com/problems/best-time-to-buy-and-sell-stock/solution/}
 */

/**
 * @param {number[]} prices
 * @return {number}
 */
var maxProfit = function (prices) {
  if (prices.length < 2) {
    return 0;
  }
  let i = -1;
  let minPrice = Number.MAX_VALUE;
  let maxProfit = 0;
  while (++i < prices.length) {
    if (prices[i] < minPrice) {
      minPrice = prices[i];
    } else if (prices[i] - minPrice > maxProfit) {
      maxProfit = prices[i] - minPrice;
    }
  }

  return maxProfit;
};

{
  let input = [7, 1, 5, 3, 6, 4];
  let output = maxProfit(input);
  let expected = 5;

  console.log("--------");
  console.log(output, expected, output === expected);
  console.log("--------");
}
