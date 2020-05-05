/**
 * @see {https://leetcode.com/problems/path-sum-iii/}
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
 * @param {number} sum
 * @return {number}
 */
var pathSum = function (root, sum) {
  function checkSum(node, currSum) {
    if (!node) {
      return 0;
    }
    return (
      (currSum === sum ? 1 : 0) +
      (node.left ? checkSum(node.left, currSum + node.left.val) : 0) +
      (node.right ? checkSum(node.right, currSum + node.right.val) : 0)
    );
  }
  function subTree(node) {
    if (!node) {
      return 0;
    }
    return checkSum(node, node.val) + subTree(node.left) + subTree(node.right);
  }
  return subTree(root);
};
