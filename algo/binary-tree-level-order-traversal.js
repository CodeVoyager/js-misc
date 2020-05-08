/**
 * @see {https://leetcode.com/problems/binary-tree-level-order-traversal/}
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
 * @return {number[][]}
 */
var levelOrder = function (root) {
  if (!root) {
    return [];
  }

  const share = { levels: [] };

  function readLevel(node, share, level) {
    if (!node) {
      return;
    }

    if (level === share.levels.length) {
      share.levels.push([]);
    }

    share.levels[level].push(node.val);

    readLevel(node.left, share, level + 1);
    readLevel(node.right, share, level + 1);
  }

  readLevel(root, share, 0);

  return share.levels;
};
