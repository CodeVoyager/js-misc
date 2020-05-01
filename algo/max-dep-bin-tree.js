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
    return 0
  }
  let maxLevel = 1;
  function goDeeper(node, level) {
    if (node) {
      if (!node.left && !node.right) {
        maxLevel = level > maxLevel ? level : maxLevel;
      }
      goDeeper(node.left, level + 1);
      goDeeper(node.right, level + 1);
    }
  }
  goDeeper(root, 1);

  return maxLevel;
};
