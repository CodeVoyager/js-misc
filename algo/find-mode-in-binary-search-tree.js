/**
 * @see {https://leetcode.com/problems/find-mode-in-binary-search-tree}
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
var findMode = function (root) {
  if (!root) {
    return [];
  }
  function traverse(node, share) {
    if (!node) {
      return;
    }

    traverse(node.left, share);

    if (share.prev !== null) {
      if (node.val === share.prev) {
        share.count += 1;
      } else {
        share.count = 1;
      }
    }

    if (share.count > share.maxCount) {
      share.maxCount = share.count;
      share.ns.length = 0;
      share.ns.push(node.val);
    } else if (share.count === share.maxCount) {
      share.ns.push(node.val);
    }

    share.prev = node.val;

    traverse(node.right, share);
  }

  const share = { ns: [], count: 1, prev: null, maxCount: 0 };

  traverse(root, share);

  return share.ns;
};
