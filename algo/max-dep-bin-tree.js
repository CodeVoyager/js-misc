/**
 * @see {https://leetcode.com/problems/maximum-depth-of-binary-tree/}
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
 * @return {number}
 */
var maxDepth = function (root) {
  if (!root) {
    return 0;
  }
  let share = { max: 1 };
  function goDeeper(node, level, share) {
    if (node) {
      if (!node.left && !node.right) {
        share.max = level > share.max ? level : share.max;
      }
      goDeeper(node.left, level + 1, share);
      goDeeper(node.right, level + 1, share);
    }
  }
  goDeeper(root, 1, share);

  return share.max;
};
