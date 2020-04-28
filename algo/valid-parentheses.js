/**
 * @see{https://leetcode.com/problems/valid-parentheses/}
 */

const OPEN_MAP = {
  "(": ")",
  "{": "}",
  "[": "]",
};
const CLOSE_MAP = {
  ")": "(",
  "}": "{",
  "]": "[",
};

/**
 * @param {string} s
 * @return {boolean}
 */
var isValid = function (s) {
  const stack = [];
  let i = -1;

  while (++i < s.length) {
    if (OPEN_MAP[s[i]]) {
      stack.push(OPEN_MAP[s[i]]);
    }
    if (CLOSE_MAP[s[i]]) {
      if (s[i] === stack[stack.length - 1]) {
        stack.pop();
      } else {
        return false;
      }
    }
  }

  return !stack.length;
};

{
  let input = "()";
  let output = isValid(input);
  let expected = true;

  console.log("--------");
  console.log(output, expected, output === expected);
  console.log("--------");
}

{
  let input = "()[]{}";
  let output = isValid(input);
  let expected = true;

  console.log("--------");
  console.log(output, expected, output === expected);
  console.log("--------");
}

{
  let input = "(]";
  let output = isValid(input);
  let expected = false;

  console.log("--------");
  console.log(output, expected, output === expected);
  console.log("--------");
}

{
  let input = "([)]";
  let output = isValid(input);
  let expected = false;

  console.log("--------");
  console.log(output, expected, output === expected);
  console.log("--------");
}

{
  let input = "]";
  let output = isValid(input);
  let expected = false;

  console.log("--------");
  console.log(output, expected, output === expected);
  console.log("--------");
}
