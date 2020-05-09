/**
 * @see {https://leetcode.com/problems/merge-k-sorted-lists/}
 */

/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode[]} lists
 * @return {ListNode}
 */
var mergeKLists = function (lists) {
  if (lists.length < 2) {
    return lists[0] || null;
  }
  function mergeList(lists, l, r) {
    if (l === r) {
      return lists[l];
    }
    const m = l + Math.floor((r - l) / 2);
    let left = mergeList(lists, l, m);
    let right = mergeList(lists, m + 1, r);
    let newHead = new TreeNode();
    let current = newHead;

    if (!left && !right) {
      return null;
    }

    while (left || right) {
      if (left && right) {
        if (left.val <= right.val) {
          current.next = left;
          left = left.next;
        } else {
          current.next = right;
          right = right.next;
        }
      } else {
        if (!left) {
          current.next = right;
          right = right.next;
        } else if (!right) {
          current.next = left;
          left = left.next;
        }
      }

      current = current.next;
    }

    return newHead.next;
  }

  return mergeList(lists, 0, lists.length - 1);
};
