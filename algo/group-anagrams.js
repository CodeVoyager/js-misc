/**
 * @see{https://leetcode.com/problems/group-anagrams/}
 */

/**
 * @param {string[]} strs
 * @return {string[][]}
 */
var groupAnagrams = function (strs) {
  if (!strs.length) {
    return strs;
  }
  if (1 === strs.length) {
    return [strs];
  }
  const aCharCode = "a".charCodeAt(0);

  function getKey(str) {
    const key = [];
    let i = -1;
    let chr = 0;
    while (++i < str.length) {
      chr = str.charCodeAt(i) - aCharCode;
      key[chr] = undefined !== key[chr] ? key[chr] + 1 : 1;
    }
    return key.reduce(
      (acc, x, i) => acc + (x ? String.fromCharCode(i + aCharCode) + x : ""),
      ""
    );
  }

  const map = {};
  let i = -1;
  let key;

  while (++i < strs.length) {
    key = getKey(strs[i]);
    if (!map[key]) {
      map[key] = [];
    }

    map[key].push(strs[i]);
  }

  return Object.values(map);
};

{
  let input = [];
  let output = groupAnagrams(input);
  let expected = [[]];

  console.log("--------");
  console.log(
    output,
    expected,
    JSON.stringify(output) === JSON.stringify(expected)
  );
  console.log("--------");
}
{
  let input = ["a"];
  let output = groupAnagrams(input);
  let expected = [["a"]];

  console.log("--------");
  console.log(
    output,
    expected,
    JSON.stringify(output) === JSON.stringify(expected)
  );
  console.log("--------");
}
{
  let input = ["eat", "tea", "tan", "ate", "nat", "bat"];
  let output = groupAnagrams(input);
  let expected = [["ate", "eat", "tea"], ["nat", "tan"], ["bat"]];

  console.log("--------");
  console.log(
    output,
    expected,
    JSON.stringify(output) === JSON.stringify(expected)
  );
  console.log("--------");
}
