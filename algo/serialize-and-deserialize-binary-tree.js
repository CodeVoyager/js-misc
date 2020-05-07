/**
 * @see {https://leetcode.com/problems/serialize-and-deserialize-binary-tree/submissions/}
 */

function TreeNode(val) {
  this.val = val;
  this.left = this.right = null;
}

/**
 * Encodes a tree to a single string.
 *
 * @param {TreeNode} root
 * @return {string}
 */
var serialize = function (root) {
  function serializeRec(node) {
    if (!node) {
      return [];
    }

    const data = [node.val];
    const left = serializeRec(node.left);
    const right = serializeRec(node.right);

    data.push(left);
    data.push(right);

    return data;
  }

  if (root && root.val !== null && root.val !== undefined) {
    return JSON.stringify(serializeRec(root));
  }

  return JSON.stringify([]);
};

/**
 * Decodes your encoded data to tree.
 *
 * @param {string} data
 * @return {TreeNode}
 */
var deserialize = function (data) {
  const input = JSON.parse(data);

  if (!input.length) {
    return null;
  }

  const root = new TreeNode();

  function deserializeRec(node, data) {
    if (!data || !data.length) {
      return null;
    }
    node.val = data[0];

    node.left = deserializeRec(new TreeNode(), data[1]);
    node.right = deserializeRec(new TreeNode(), data[2]);

    return node;
  }

  deserializeRec(root, input);

  return root;
};
