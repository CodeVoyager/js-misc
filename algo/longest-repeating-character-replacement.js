/**
 * @param {string} s
 * @param {number} k
 * @return {number}
 */
var characterReplacement = function (s, k) {
  if (s.length < 2) {
    return s.length;
  }
  const MAX_REPLACEMENT = k;
  let maxLen = 0;
  let len;
  let l = -1;
  let h = 0;
  while (++l < s.length) {
    const curr = s[l];
    h = l;
    len = 1;
    k = MAX_REPLACEMENT;

    while (++h < s.length) {
      if (curr !== s[h]) {
        if (k > 0) {
          --k;
        } else {
          break;
        }
      }
      ++len;
    }

    if (k) {
      h = l;
      while (--h > -1) {
        if (curr !== s[h]) {
          if (k > 0) {
            --k;
          } else {
            break;
          }
        }
        ++len;
      }
    }

    maxLen = Math.max(maxLen, len);
  }

  return maxLen;
};

/**
 * @param {string} s
 * @param {number} k
 * @return {number}
 */
var characterReplacement = function (s, k) {
  const aCharCode = "A".charCodeAt(0);
  let max = 0;
  let mostFrequent = 0;
  let l = 0;

  const cache = Array(26).fill(0);

  for (let h = 0; h < s.length; h++) {
    const char = s.charCodeAt(h) - aCharCode;

    cache[char] += 1;
    mostFrequent = Math.max(mostFrequent, cache[char]);

    while (h - l + 1 - mostFrequent > k) {
      cache[s.charCodeAt(l) - aCharCode] -= 1;
      l++;
    }

    max = Math.max(max, h - l + 1);
  }

  return max;
};

{
  let input = ["ABAB", 2];
  let output = characterReplacement(input[0], input[1]);
  let expected = 4;

  console.log("--------");
  console.log(output, expected, output === expected);
  console.log("--------");
}
{
  let input = ["AABABBA", 1];
  let output = characterReplacement(input[0], input[1]);
  let expected = 4;

  console.log("--------");
  console.log(output, expected, output === expected);
  console.log("--------");
}
{
  let input = ["AB", 1];
  let output = characterReplacement(input[0], input[1]);
  let expected = 2;

  console.log("--------");
  console.log(output, expected, output === expected);
  console.log("--------");
}
{
  let input = ["AB", 0];
  let output = characterReplacement(input[0], input[1]);
  let expected = 1;

  console.log("--------");
  console.log(output, expected, output === expected);
  console.log("--------");
}
{
  let input = ["ABAA", 0];
  let output = characterReplacement(input[0], input[1]);
  let expected = 2;

  console.log("--------");
  console.log(output, expected, output === expected);
  console.log("--------");
}
{
  let input = ["ABBB", 2];
  let output = characterReplacement(input[0], input[1]);
  let expected = 4;

  console.log("--------");
  console.log(output, expected, output === expected);
  console.log("--------");
}
