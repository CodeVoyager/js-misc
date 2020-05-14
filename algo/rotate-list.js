/**
 * @see{https://leetcode.com/problems/rotate-list/}
 */

 //

//  Runtime: 52 ms, faster than 98.81% of JavaScript online submissions for Rotate List.
//  Memory Usage: 35.5 MB, less than 100.00% of JavaScript online submissions for Rotate List.

/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @param {number} k
 * @return {ListNode}
 */
var rotateRight = function (head, k) {
  if (!head || !head.next || !k) {
    return head;
  }

  let len = 0;
  let fast = head;
  let slow = head;

  while (fast) {
    ++len;
    fast = fast.next;
  }

  k = k >= len ? k % len : k;

  fast = head;

  while (k > 0) {
    fast = fast.next;
    --k;
  }

  while (fast.next) {
    slow = slow.next;
    fast = fast.next;
  }

  fast.next = head;
  head = slow.next;
  slow.next = null;

  return head;
};
