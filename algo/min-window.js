/**
 * @see{https://leetcode.com/problems/minimum-window-substring}
 */

/**
 * @param {string} s
 * @param {string} t
 * @return {string}
 */
var minWindow = function (s, t) {
  if (!s || !t || s.length < t.length) {
    return "";
  }
  if (s.length === t.length) {
    return s.split("").sort().join("") === t.split("").sort().join("") ? s : "";
  }

  const map = {};
  const counter = {};
  const ret = [Infinity, -1, -1];
  let l = -1;
  let r = 0;
  let length = 0;

  while (++l < t.length) {
    map[t[l]] = map[t[l]] ? map[t[l]] + 1 : 1;
    counter[t[l]] = 0;
  }

  const desired = Object.keys(map).length;

  l = 0;

  while (r < s.length) {
    ++counter[s[r]];

    if (counter[s[r]] === map[s[r]]) {
      ++length;
    }

    while (length === desired) {
      counter[s[l]] -= counter[s[l]] > 0 ? 1 : 0;

      if (counter[s[l]] < map[s[l]]) {
        --length;
      }

      if (r - l + 1 < ret[0]) {
        ret[0] = r - l + 1;
        ret[1] = l;
        ret[2] = r;
      }

      l++;
    }

    r++;
  }

  return ret[0] < Infinity ? s.substring(ret[1], ret[2] + 1) : "";
};

{
  let input = ["ADOBECODEBANC", "ABC"];
  let output = minWindow(input[0], input[1]);
  let expected = "BANC";

  console.log("--------");
  console.log(output, expected, output === expected);
  console.log("--------");
}

{
  let input = ["a", "b"];
  let output = minWindow(input[0], input[1]);
  let expected = "";

  console.log("--------");
  console.log(output, expected, output === expected);
  console.log("--------");
}
{
  let input = ["ab", "A"];
  let output = minWindow(input[0], input[1]);
  let expected = "";

  console.log("--------");
  console.log(output, expected, output === expected);
  console.log("--------");
}
{
  let input = ["bbaa", "aba"];
  let output = minWindow(input[0], input[1]);
  let expected = "baa";

  console.log("--------");
  console.log(output, expected, output === expected);
  console.log("--------");
}
