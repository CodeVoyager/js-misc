/**
 * @see {https://leetcode.com/problems/subtree-of-another-tree/}
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
 * @param {TreeNode} s
 * @param {TreeNode} t
 * @return {boolean}
 */
var isSubtree = function (s, t) {
  function find(node, share) {
    if (!node) {
      return;
    }

    if (node.val === share.value) {
      share.nodes.push(node);
    }

    find(node.left, share);
    find(node.right, share);
  }

  function compare(leftSide, rightSide) {
    if (!leftSide && !rightSide) {
      return true;
    }
    if (!leftSide) {
      return false;
    }
    if (!rightSide) {
      return false;
    }

    if (leftSide.val !== rightSide.val) {
      return false;
    }

    return (
      compare(leftSide.left, rightSide.left) &&
      compare(leftSide.right, rightSide.right)
    );
  }

  const share = { value: t.val, nodes: [] };

  find(s, share);

  if (!share.nodes.length) {
    return false;
  }

  return share.nodes.some((node) => compare(node, t));
};
