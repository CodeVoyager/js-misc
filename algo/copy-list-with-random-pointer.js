/**
 * @see{https://leetcode.com/problems/copy-list-with-random-pointer/}
 */

/**
 * // Definition for a Node.
 * function Node(val, next, random) {
 *    this.val = val;
 *    this.next = next;
 *    this.random = random;
 * };
 */

/**
 * @param {Node} head
 * @return {Node}
 */
var copyRandomList = function (head) {
  if (!head) {
    return head;
  }
  const map = new Map();
  let sourceNode = head;
  let targetNode;

  while (sourceNode) {
    map.set(sourceNode, new Node(sourceNode.val));
    sourceNode = sourceNode.next;
  }

  map.set(null, null);

  sourceNode = head;

  while (sourceNode) {
    targetNode = map.get(sourceNode);
    targetNode.random = map.get(sourceNode.random);
    targetNode.next = map.get(sourceNode.next);

    sourceNode = sourceNode.next;
  }

  return map.get(head);
};
