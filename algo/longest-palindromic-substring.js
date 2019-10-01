/**
 * @see {https://leetcode.com/problems/longest-palindromic-substring/}
 */

/**
 * @param {string} s
 * @param {number} l
 * @param {number} r
 * @returns {number}
 */
function expandFromCenter(s, l, r) {
    while (l >= 0 && r < s.length && s[l] === s[r]) {
        l--;
        r++;
    }
    return r - l - 1;
}

/**
 * @param {string} s
 * @return {string}
 */
var longestPalindrome = function(s) {
    let i = -1;
    let l1;
    let l2;
    let start = 0;
    let end = 0;
    let longest = 0;
    if (s.length < 2) {
        return s;
    }
    while (++i < s.length) {
        l1 = expandFromCenter(s, i, i);
        l2 = expandFromCenter(s, i, i + 1);
        l1 = l1 > l2 ? l1 : l2;
        if (l1 > longest) {
            if (l1 % 2 === 0) {
                start = i - (l1 / 2 - 1);
                end = i + l1 / 2;
            } else {
                start = i - (l1 - 1) / 2;
                end = i + (l1 - 1) / 2;
            }
            longest = l1;
        }
    }

    return s.slice(start, end + 1);
};

{
    const s = "babad";
    const result = "bab";
    console.log(longestPalindrome(s), result);
    console.log("----");
}

{
    const s = "aaaabaabscafa";
    const result = "aabaa";
    console.log(longestPalindrome(s), result);
    console.log("----");
}

{
    const s = "Lorem ipsum dolor sit amet";
    const result = "olo";
    console.log(longestPalindrome(s), result);
    console.log("----");
}

{
    const s = "cbbd";
    const result = "bb";
    console.log(longestPalindrome(s), result);
    console.log("----");
}

{
    const s = "a";
    const result = "a";
    console.log(longestPalindrome(s), result);
    console.log("----");
}

{
    const s = "";
    const result = "";
    console.log(longestPalindrome(s), result);
    console.log("----");
}
