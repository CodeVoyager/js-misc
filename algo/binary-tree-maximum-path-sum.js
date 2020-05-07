/**
 * @see {https://leetcode.com/problems/binary-tree-maximum-path-sum/}
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
var maxPathSum = function (root) {
  const ret = { max: -Infinity };

  function subMax(node, share) {
    if (!node) {
      return 0;
    }
    let left = node.left ? subMax(node.left, share) : 0;
    let right = node.right ? subMax(node.right, share) : 0;

    left = left >= 0 ? left : 0;
    right = right >= 0 ? right : 0;

    share.max = Math.max(share.max, left + right + node.val);

    return (node.val += Math.max(left, right));
  }

  subMax(root, ret);

  return ret.max;
};
