/**
 * @see {https://leetcode.com/problems/divide-two-integers/}
 */

/**
 * @param {number} dividend
 * @param {number} divisor
 * @return {number}
 */
var divide = function (dividend, divisor) {
  const MIN_VAL = Math.pow(-2, 31);
  const MAX_VAL = Math.pow(2, 31) - 1;
  if (dividend === divisor) {
    return 1;
  }

  const sign =
    (dividend < 0 && divisor > 0) || (dividend > 0 && divisor < 0) ? -1 : 1;
  divisor = Math.abs(divisor);
  dividend = Math.abs(dividend);

  if (0 === divisor) {
    return Infinity;
  }
  if (dividend >= MAX_VAL && divisor === 1) {
    return sign > 0 ? MAX_VAL : MIN_VAL;
  }

  let temp;
  let mod;
  let result = 0;

  while (dividend >= divisor) {
    temp = divisor;
    mod = 1;
    while (temp << 1 <= dividend && temp << 1 > 0) {
      temp <<= 1;
      mod <<= 1;
    }
    dividend -= temp;
    result += mod;
  }

  return sign * result;
};

// {
//   const input = [10, 3];
//   const expected = 3;
//   const result = divide(input[0], input[1]);
//   console.log("-------");
//   console.log(expected, result, expected === result);
//   console.log("-------");
// }

// {
//   const input = [7, -3];
//   const expected = -2;
//   const result = divide(input[0], input[1]);
//   console.log("-------");
//   console.log(expected, result, expected === result);
//   console.log("-------");
// }

// {
//   const input = [3, 3];
//   const expected = 1;
//   const result = divide(input[0], input[1]);
//   console.log("-------");
//   console.log(expected, result, expected === result);
//   console.log("-------");
// }

// {
//   const input = [-3, -3];
//   const expected = 1;
//   const result = divide(input[0], input[1]);
//   console.log("-------");
//   console.log(expected, result, expected === result);
//   console.log("-------");
// }

// {
//   const input = [-2147483648, -1];
//   const expected = Math.pow(2, 31) - 1;
//   const result = divide(input[0], input[1]);
//   console.log("-------");
//   console.log(expected, result, expected === result);
//   console.log("-------");
// }

{
  const input = [2147483647, 2];
  const expected = Math.pow(2, 31) - 1;
  const result = divide(input[0], input[1]);
  console.log("-------");
  console.log(expected, result, expected === result);
  console.log("-------");
}
