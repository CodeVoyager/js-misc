/**
 * @see {https://leetcode.com/problems/intersection-of-two-linked-lists/}
 */

/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */

/**
 * @param {ListNode} headA
 * @param {ListNode} headB
 * @return {ListNode}
 */
var getIntersectionNode = function (headA, headB) {
  const map = new Map();

  while (headA) {
    map.set(headA, true);
    headA = headA.next;
  }

  while (headB) {
    if (map.has(headB)) {
      return headB;
    }

    headB = headB.next;
  }

  return null;
};

// ------------------- Two pointers

/**
 * @param {ListNode} headA
 * @param {ListNode} headB
 * @return {ListNode}
 */
var getIntersectionNode = function (headA, headB) {
  if (headA && headB) {
    let nodeA = headA;
    let nodeB = headB;

    while (nodeA || nodeB) {
      if (!nodeA && nodeB) {
        nodeA = headB;
      }
      if (!nodeB && nodeA) {
        nodeB = headA;
      }
      if (nodeA === nodeB) {
        return nodeA;
      }
      nodeA = nodeA.next;
      nodeB = nodeB.next;
    }
  }


  return null;
};