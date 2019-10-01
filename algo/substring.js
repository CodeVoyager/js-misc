function getValueSafe(s, i) {
    return s[i] !== undefined ? s[i] : 0;
}

/**
 * @param {string} first
 * @param {string} second
 *
 * @returns {boolean}
 */
function isSubstring(first, second) {
    const map = {};

    for (const c of first) {
        map[c] = getValueSafe(map, c) + 1;
    }

    let counter = second.length;
    let index = 0;

    while (index < second.length) {
        if (getValueSafe(map, second[index]) > 0) {
            counter -= 1;
        }
        index += 1;
        if (counter === 0) {
            return true;
        }
    }

    return false;
}

/**
 *
 * @param {string} first
 * @param {string} second
 */
function minWindow(first, second) {
    const map = {};

    /**
     * Building second argument characters map
     */
    for (const c of second) {
        map[c] = 1;
    }

    /**
     * Window start
     */
    let start = 0;
    /**
     * Window end
     */
    let end = 0;
    /**
     * How many characters we need to finf
     */
    let counter = second.length;
    /**
     * minimum windiow start
     */
    let minStart = 0;
    /**
     * minimum windiow length
     */
    let minLength = Number.MAX_VALUE;
    const size = first.length;

    while (end < size) {
        if (getValueSafe(map, first[end]) > 0) {
            counter -= 1;
        }
        map[first[end]] = getValueSafe(map, first[end]) - 1;
        end += 1;
        while (counter === 0) {
            if (end - start < minLength) {
                minStart = start;
                minLength = end - start;
            }
            map[first[start]] += 1;
            if (map[first[start]] > 0) {
                counter++;
            }
            start += 1;
        }
    }

    if (minLength < Number.MAX_VALUE) {
        return first.slice(minStart, minStart + minLength);
    }

    return "";
}

/**
 *
 *
 * @param {string} str
 * @param {number} count
 * @returns {string}
 */
function longestSubstringWithAtLeastNCharactersDistinct(str, count) {
    const map = {};
    let longestString = "";
    let begin = 0;
    let end = 0;
    let counter = 0;

    /**
     * Building second argument
     */
    for (const c of str) {
        map[c] = 0;
    }

    while (end < str.length) {
        if (map[str[end++]]++ === 0) {
            counter += 1;
        }

        while (counter > count) {
            if (map[str[begin++]]-- == 1) {
                counter--;
            }
        }
        if (longestString.length < end - begin) {
            longestString = str.slice(begin - 1, end);
        }
    }

    return longestString;
}

/**
 *
 *
 * @param {string} str
 * @param {number} count
 * @returns {string}
 */
function longestSubstringWithAtLeastNCharactersWORepeats(str, count) {
    const map = {};
    let longestString = "";
    let begin = 0;
    let end = 0;
    let counter = 0;

    /**
     * Building second argument
     */
    for (const c of str) {
        map[c] = 0;
    }

    while (end < str.length) {
        if (map[str[end++]]++ === 0) {
            counter += 1;
        }

        while (counter > count) {
            if (map[str[begin++]]-- > 0) {
                counter--;
            }
        }
        if (longestString.length < end - begin) {
            longestString = str.slice(begin, end);
        }
    }

    return longestString;
}

console.log(minWindow("Makaronik", "arn"));
console.log(minWindow("Makaronik", "akn"));
console.log(minWindow("aaaat", "t"));
console.log(minWindow("Makaronik", "aronarz"));
console.log(isSubstring("Makaron", "Makaronik"));
console.log(isSubstring("Makaronik", "Makaron"));
console.log(longestSubstringWithAtLeastNCharactersDistinct("Makaronik", 5));
console.log(
    longestSubstringWithAtLeastNCharactersDistinct("aaaadwadbdjwiabubufiaw", 5)
);
console.log(
    longestSubstringWithAtLeastNCharactersWORepeats("aaaadwadbdjwiabubufiaw", 5)
);
