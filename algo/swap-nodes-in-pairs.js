/**
 * @see {https://leetcode.com/problems/swap-nodes-in-pairs/}
 */

/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @return {ListNode}
 */
var swapPairs = function (head) {
  if (!head || !head.next) {
    return head;
  }
  const newHead = head.next;
  let nodeA = head;
  let nodeB = head.next;
  let prev;

  while (nodeA && nodeB) {
    nodeA.next = nodeB.next;
    nodeB.next = nodeA;

    if (prev) {
      prev.next = nodeB;
    }

    prev = nodeA;

    nodeB = nodeA.next && nodeA.next.next;
    nodeA = nodeA.next;
  }

  return newHead;
};
