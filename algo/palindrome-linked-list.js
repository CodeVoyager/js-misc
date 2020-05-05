/**
 * @see {https://leetcode.com/problems/palindrome-linked-list/}
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
 * @return {boolean}
 */
var isPalindrome = function (head) {
  let fast = head;
  let slow = head;
  let tmp;
  let prev = tmp;
  if (!head || !head.next) {
    return true;
  }
  while (fast && fast.next) {
    fast = fast.next.next;

    tmp = slow.next;
    slow.next = prev;
    prev = slow;
    slow = tmp;
  }

  if (fast.next) {
    slow = slow.next;
  }

  while (slow.val === prev.val) {
    if (slow.next === null) {
      return true;
    }
    slow = slow.next;
    prev = prev.next;
  }

  return false;
};