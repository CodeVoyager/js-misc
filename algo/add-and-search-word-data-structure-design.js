/**
 * @see {https://leetcode.com/problems/add-and-search-word-data-structure-design/}
 */

const ANY_CHAR = ".";

function TreeNode(char) {
  this.char = char;
  this.children = [];
  this.isWord = false;
}

/**
 * @param {string} char
 * @returns {boolean}
 */
TreeNode.prototype.equals = function (char) {
  return char === this.char || char === ANY_CHAR;
};

/**
 * @param {string} char
 * @returns {TreeNode}
 */
TreeNode.prototype.findChild = function (char) {
  return this.children.find((child) => child.equals(char));
};

/**
 * @param {string} char
 * @returns {boolean}
 */
TreeNode.prototype.findWord = function (share, index) {
  const isLastChar = index === share.word.length - 1;
  const currentCharCorrect = index > -1 ? this.equals(share.word[index]) : true;

  if (isLastChar) {
    return currentCharCorrect && this.isWord;
  } else {
    return (
      currentCharCorrect &&
      this.children.some((char) => char.findWord(share, index + 1))
    );
  }
};

/**
 * @param {string} char
 * @returns {TreeNode}
 */
TreeNode.prototype.createChild = function (char) {
  const child = new TreeNode(char);

  this.children.push(child);

  return child;
};

/**
 * Initialize your data structure here.
 */
var WordDictionary = function () {
  this.head = new TreeNode("*");
};

/**
 * Adds a word into the data structure.
 * @param {string} word
 * @return {void}
 */
WordDictionary.prototype.addWord = function (word) {
  if (!word || !word.length) {
    return;
  }
  let i = -1;
  let current = this.head;
  let child;

  while (++i < word.length) {
    child = current.findChild(word[i]);

    if (!child) {
      child = current.createChild(word[i]);
    }

    current = child;
  }

  current.isWord = true;
};

/**
 * Returns if the word is in the data structure. A word could contain the dot character '.' to represent any one letter.
 * @param {string} word
 * @return {boolean}
 */
WordDictionary.prototype.search = function (word) {
  if (!word || !word.length) {
    return true;
  }
  const share = { word };

  return this.head.findWord(share, -1);
};

/**
 * Your WordDictionary object will be instantiated and called as such:
 * var obj = new WordDictionary()
 * obj.addWord(word)
 * var param_2 = obj.search(word)
 */

{
  const dict = new WordDictionary();

  dict.addWord("bad");
  dict.addWord("add");
  dict.addWord("badd");
  dict.addWord("dad");
  dict.addWord("mad");

  console.log("=========");

  console.log(dict.search("a.d") === true);
  console.log(dict.search("pad") === false);
  console.log(dict.search("bad") === true);
  console.log(dict.search("b") === false);
  console.log(dict.search(".ad") === true);
  console.log(dict.search("b..") === true);
  console.log(dict.search("b..d") === true);
}
{
  const dict = new WordDictionary();

  console.log("=========");

  console.log(dict.search(".at") === false);
  dict.addWord("bat");
  console.log(dict.search(".at") === true);
}
{
  const dict = new WordDictionary();

  const inputA = [
    "addWord",
    "addWord",
    "addWord",
    "addWord",
    "search",
    "search",
    "addWord",
    "search",
    "search",
    "search",
    "search",
    "search",
    "search",
  ];
  const inputB = [
    "at",
    "and",
    "an",
    "add",
    "a",
    ".at",
    "bat",
    ".at",
    "an.",
    "a.d.",
    "b.",
    "a.d",
    ".",
  ];
  const expectd = [
    null,
    null,
    null,
    null,
    false,
    false,
    null,
    true,
    true,
    false,
    false,
    true,
    false,
  ];
  const result = inputA.map((action, i) => dict[action](inputB[i]));

  function zip(a, b) {
    let i = -1;
    const ret = [];
    while (++i < a.length) {
      ret.push([a[i], b[i]]);
    }

    return ret;
  }

  console.log("=========");
  console.log(JSON.stringify(zip(inputA, inputB)));
  console.log(
    JSON.stringify(result),
    JSON.stringify(expectd),
    JSON.stringify(result) === JSON.stringify(expectd)
  );
  console.log("=========");
}
