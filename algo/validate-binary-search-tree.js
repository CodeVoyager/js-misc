/**
 * @see {https://leetcode.com/problems/validate-binary-search-tree/}
 */

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
var isValidBST = function (root) {
  if (!root) {
    return true;
  }
  if (root.left && root.val <= getMax(root.left, root.left.val)) {
    return false;
  }
  if (root.right && root.val >= getMin(root.right, root.right.val)) {
    return false;
  }

  return isValidBST(root.left) && isValidBST(root.right);
};

function getMax(root, max) {
  if (!root) {
    return max;
  } else {
    return Math.max(
      max,
      getMax(root.left, root.val),
      getMax(root.right, root.val)
    );
  }
}
function getMin(root, min) {
  if (!root) {
    return min;
  } else {
    return Math.min(
      min,
      getMin(root.right, root.val),
      getMin(root.left, root.val)
    );
  }
}
