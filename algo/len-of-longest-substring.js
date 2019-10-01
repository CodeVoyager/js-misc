/**
 * @see {https://leetcode.com/problems/longest-substring-without-repeating-characters/}
 */

/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLongestSubstring = function(s) {
    const map = {};
    let begin = 0;
    let end = 0;
    let len = 0;
    let counter = 0;
    for (c of s) {
        map[c] = 0;
    }
    while (end < s.length) {
        if (map[s[end++]]++ > 0) {
            counter++;
        }
        while (counter > 0) {
            if (map[s[begin++]]-- > 1) {
                counter--;
            }
        }
        len = len < end - begin ? end - begin : len;
    }

    return len;
};

{
    // Example one
    const s = "abcabcbb";
    const result = 3;
    console.log(lengthOfLongestSubstring(s), result);
    console.log("---");
}

{
    // Example two
    const s = "bbbbb";
    const result = 1;
    console.log(lengthOfLongestSubstring(s), result);
    console.log("---");
}

{
    // Example three
    const s = "pwwkew";
    const result = 3;
    console.log(lengthOfLongestSubstring(s), result);
    console.log("---");
}

{
    // Example with Lorem
    const s = "Lorem ipsum dolor sit amet";
    const result = 10;
    console.log(lengthOfLongestSubstring(s), result);
    console.log("---");
}

{
    // Example with empty string
    const s = "";
    const result = 0;
    console.log(lengthOfLongestSubstring(s), result);
    console.log("---");
}
