/**
 * https://leetcode.com/problems/kth-smallest-element-in-a-bst/
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
 * @param {number} k
 * @return {number}
 */
var kthSmallest = function (root, k) {
  const share = { vals: [] };

  function traverse(node, share) {
    if (!node) {
      return;
    }
    if (share.vals.length >= k) {
      return;
    }

    traverse(node.left, share);
    share.vals.push(node.val);
    traverse(node.right, share);
  }

  traverse(root, share);

  return share.vals[k - 1];
};
