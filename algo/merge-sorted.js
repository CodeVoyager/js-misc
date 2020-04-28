/**
 * @see {https://leetcode.com/problems/merge-two-sorted-lists/}
 */

/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 */
var mergeTwoLists = function (l1, l2) {
  if (l1 && l2) {
    if (l1.val <= l2.val) {
      const curr = l1;

      if (l1.next) {
        curr.next = mergeTwoLists(l1.next, l2);
      } else {
        curr.next = l2;
      }

      return curr;
    } else {
      const curr = l2;

      if (l2.next) {
        curr.next = mergeTwoLists(l1, l2.next);
      } else {
        curr.next = l1;
      }

      return curr;
    }
  } else {
    if (l1) {
      return l1;
    }
    return l2;
  }
};
