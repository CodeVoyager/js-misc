/**
 * @see {https://leetcode.com/problems/binary-tree-inorder-traversal/}
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
 * @return {number[]}
 */
var inorderTraversal = function (root) {
  const share = { xs: [] };

  function inOrderRead(node, shr) {
    if (!node) {
      return;
    }

    inOrderRead(node.left, shr);
    shr.xs.push(node.val);
    inOrderRead(node.right, shr);
  }

  inOrderRead(root, share);

  return share.xs;
};

/**
 * @param {TreeNode} root
 * @return {number[]}
 */
var inorderTraversal = function (root) {
  const stack = [];
  const result = [];
  let node = root;

  while (node || stack.length) {
    while (node) {
      stack.push(node);
      node = node.left;
    }
    node = stack.pop();
    result.push(node.val);
    node = node.right;
  }

  return result;
};
