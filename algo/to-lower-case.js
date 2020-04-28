/**
 * @see {https://leetcode.com/problems/to-lower-case}
 */
const UPPER_CASE_RANGE = [65, 90];
const CHAR_DIFF = 32;

/**
 * @param {string} str
 * @return {string}
 */
var toLowerCase = function (str) {
  const ret = [];
  let i = -1;
  let charCode;

  while (++i < str.length) {
    charCode = str.charCodeAt(i);

    if (UPPER_CASE_RANGE[0] <= charCode && UPPER_CASE_RANGE[1] >= charCode) {
      ret.push(String.fromCharCode(charCode + CHAR_DIFF));
    } else {
      ret.push(str[i]);
    }
  }

  return ret.join('');
};

{
  let input = "Hello";
  let output = toLowerCase(input);
  let expected = "hello";

  console.log("--------");
  console.log(output, expected, output === expected);
  console.log("--------");
}
{
  let input = "here";
  let output = toLowerCase(input);
  let expected = "here";

  console.log("--------");
  console.log(output, expected, output === expected);
  console.log("--------");
}
{
  let input = "LOVELY";
  let output = toLowerCase(input);
  let expected = "lovely";

  console.log("--------");
  console.log(output, expected, output === expected);
  console.log("--------");
}
{
  let input = "$LoVeLY$";
  let output = toLowerCase(input);
  let expected = "$lovely$";

  console.log("--------");
  console.log(output, expected, output === expected);
  console.log("--------");
}
