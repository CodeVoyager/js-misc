/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root
 * @return {boolean}
 */
var isMirror = function (t1, t2) {
  if (t1 === null && t2 === null) {
    return true;
  }
  if (t1 === null || t2 === null) {
    return false;
  }

  return (
    t1.val === t2.val &&
    isMirror(t1.right, t2.left) &&
    isMirror(t1.left, t2.right)
  );
};
var isSymmetric = function (root) {
  return isMirror(root, root);
};

/************************* */

var isSymmetric = function (root) {
  const arr = [];

  arr.push(root);
  arr.push(root);
  while (arr.length) {
    const n1 = arr.pop();
    const n2 = arr.pop();
    if (!n1 && !n2) {
      continue;
    }
    if (!n1 || !n2) {
      return false;
    }
    if (n1.val !== n2.val) {
      return false;
    }
    arr.push(n1.left);
    arr.push(n2.right);
    arr.push(n1.right);
    arr.push(n2.left);
  }

  return true;
};


const a = new Map();
const key = { a: 34 };
const key2 = { a: 367 };

a.get('abs');
a.set('abs', 45);
a.set(key, 1);
a.set(key2, 2);

console.log(a.get(key), a.get(key2));
