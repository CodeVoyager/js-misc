/**
 * @see {https://leetcode.com/problems/remove-nth-node-from-end-of-list/}
 */

/**
 * Definition for singly-linked list.
 */
function ListNode(val) {
    this.val = val;
    this.next = null;
}

ListNode.prototype.toString = function() {
    let values = [];
    let n = this.next;
    if (this.val != undefined) {
        values.push(this.val);
        while (n !== null) {
            values.push(n.val);
            n = n.next;
        }
    }

    return values.join("->");
};

/**
 * @param {ListNode} head
 * @param {number} n
 * @return {ListNode}
 */
var removeNthFromEnd = function(head, n) {
    const res = new ListNode(0);
    res.next = head;
    let a = res;
    let b = res;
    let i = -1;
    while (++i <= n && b) {
        b = b.next;
    }
    while (b) {
        b = b.next;
        a = a.next;
    }

    a.next = a.next.next;

    return res.next;
};
var removeNthFromEnd = function(head, n) {
    const ns = [];
    let next = head;

    while (next) {
        ns.push(next);
        next = next.next;
    }

    const i = ns.length - n;

    if (i - 1 < 0) {
        return head.next;
    } else {
        ns[i - 1].next = ns[i + 1] ? ns[i + 1] : null;
    }

    return head;
};

{
    let l1 = new ListNode(1);
    l1.next = new ListNode(2);
    l1.next.next = new ListNode(3);
    l1.next.next.next = new ListNode(4);
    l1.next.next.next.next = new ListNode(5);

    let expected = new ListNode(1);
    expected.next = new ListNode(2);
    expected.next.next = new ListNode(3);
    expected.next.next.next = new ListNode(5);

    let result = removeNthFromEnd(l1, 2);

    console.log((result || "").toString(), " ", (expected || "").toString());
}
{
    let l1 = new ListNode(1);
    l1.next = new ListNode(2);
    l1.next.next = new ListNode(3);

    let expected = null;

    let result = removeNthFromEnd(l1, 4);

    console.log((result || "").toString(), " ", (expected || "").toString());
}
{
    let l1 = new ListNode(1);
    l1.next = new ListNode(2);

    let expected = new ListNode(2);

    let result = removeNthFromEnd(l1, 2);

    console.log((result || "").toString(), " ", (expected || "").toString());
}
{
    let l1 = new ListNode(1);

    let expected = null;

    let result = removeNthFromEnd(l1, 1);

    console.log((result || "").toString(), " ", (expected || "").toString());
}
