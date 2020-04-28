/**
 * @see {https://leetcode.com/problems/ambiguous-coordinates/}
 */

const INCLUDES = [", ", "."];

/**
 * @param {string} S
 * @return {string[]}
 */
var ambiguousCoordinates = function (S) {
  const searchSpace = S.slice(1, S.length - 1);
  const ret = [];
  let pivot = 0;

  while (++pivot < searchSpace.length) {
    const candidatesLeft = checkForValidValues(searchSpace.slice(0, pivot));
    const candidatesRight = checkForValidValues(searchSpace.slice(pivot));

    ret.push(mixValues(candidatesLeft, candidatesRight));
  }

  return ret.reduce(function (acc, xs) {
    return acc.concat(xs);
  }, []);
};

/**
 * @param {string} str
 * @returns
 */
function checkForValidValues(str) {
  const ret = [];
  let index = 0;

  if (isValid(str)) {
    ret.push(str);
  }

  if (str.length > 1) {
    while (++index < str.length) {
      const testString = [
        str.slice(0, index),
        INCLUDES[1],
        str.slice(index),
      ].join("");
      if (isValid(testString)) {
        ret.push(testString);
      }
    }
  }

  return ret;
}

function isValid(str) {
  if (str.length === 1) {
    return true;
  }
  if (str !== parseFloat(str).toString()) {
    return false;
  }

  return true;
}

function mixValues(candidatesLeft, candidatesRight) {
  let i = -1;
  let j;
  const ret = [];
  while (++i < candidatesLeft.length) {
    j = -1;
    while (++j < candidatesRight.length) {
      ret.push(
        ["(", candidatesLeft[i], INCLUDES[0], candidatesRight[j], ")"].join("")
      );
    }
  }
  return ret;
}

/**
 * @param {any[][]} xs
 * @returns {any[]}
 */
function flatten(xs) {
  return xs.reduce(function (acc, xs) {
    return acc.concat(xs);
  }, []);
}

{
  let input = "(123)";
  let output = JSON.stringify(ambiguousCoordinates(input));
  let expected = JSON.stringify(["(1, 23)", "(12, 3)", "(1.2, 3)", "(1, 2.3)"]);

  console.log("--------");
  console.log(output, expected, output === expected);
  console.log("--------");
}

{
  let input = "(0010)";
  let output = JSON.stringify(ambiguousCoordinates(input));
  let expected = JSON.stringify(["(0.01, 0)"]);

  console.log("--------");
  console.log(output, expected, output === expected);
  console.log("--------");
}
{
  let input = "(00011)";
  let output = JSON.stringify(ambiguousCoordinates(input));
  let expected = JSON.stringify(["(0.001, 1)", "(0, 0.011)"]);

  console.log("--------");
  console.log(output, expected, output === expected);
  console.log("--------");
}
{
  let input = "(0123)";
  let output = JSON.stringify(ambiguousCoordinates(input));
  let expected = JSON.stringify([
    "(0, 123)",
    "(0, 12.3)",
    "(0, 1.23)",
    "(0.1, 23)",
    "(0.1, 2.3)",
    "(0.12, 3)",
  ]);

  console.log("--------");
  console.log(output, "\n", expected, output === expected);
  console.log("--------");
}
