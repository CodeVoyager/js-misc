/**
 * @see https://leetcode.com/problems/add-two-numbers/
 */

function ListNode(val) {
    this.val = val;
    this.next = null;
}

ListNode.prototype.toString = function() {
    var values = [];
    var n = this.next;
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
 * More compact version
 *
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 */
var addTwoNumbers = function(l1, l2) {
    let nr = new ListNode(0);
    let carryOver = 0;
    const result = nr;
    while (nr) {
        nr.val = carryOver + (l1 ? l1.val : 0) + (l2 ? l2.val : 0);
        carryOver = 0;
        if (nr.val > 9) {
            carryOver = 1;
            nr.val = nr.val - 10;
        }
        l1 = l1 ? l1.next : null;
        l2 = l2 ? l2.next : null;

        if (l1 || l2 || carryOver) {
            nr.next = new ListNode(0);
        }

        nr = nr.next;
    }
    if (carryOver) {
        nr.next.val = carryOver;
    }
    return result;
};
/**
 * Original version
 *
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @returns {ListNode}
 */
// var addTwoNumbers = function(l1, l2) {
//     let vr;
//     let n1 = l1;
//     let n2 = l2;
//     let nr = new ListNode();
//     let carryOver = 0;
//     const result = nr;
//     while (n1 || n2) {
//         vr = carryOver;
//         carryOver = 0;
//         if (n1) {
//             vr += n1.val;
//         }
//         if (n2) {
//             vr += n2.val;
//         }
//         if (vr > 9) {
//             carryOver = 1;
//             vr = vr - 10;
//         }
//         nr.val = vr;
//         if (n1) {
//             n1 = n1.next;
//         }
//         if (n2) {
//             n2 = n2.next;
//         }
//         if (n1 || n2) {
//             nr.next = new ListNode();
//             nr = nr.next;
//         }
//     }
//     if (carryOver) {
//         nr.next = new ListNode(carryOver);
//     }

//     return result;
// };

/**
 * Example from LeetCode
 */
{
    let l1 = new ListNode(2);
    l1.next = new ListNode(4);
    l1.next.next = new ListNode(3);

    let l2 = new ListNode(5);
    l2.next = new ListNode(6);
    l2.next.next = new ListNode(4);

    let result = new ListNode(7);
    result.next = new ListNode(0);
    result.next.next = new ListNode(8);

    console.log(addTwoNumbers(l1, l2).toString(), result.toString());
}

/**
 * With zero within
 */
{
    let l1 = new ListNode(1);
    l1.next = new ListNode(0);
    l1.next.next = new ListNode(1);

    let l2 = new ListNode(2);
    l2.next = new ListNode(1);
    l2.next.next = new ListNode(2);

    let result = new ListNode(3);
    result.next = new ListNode(1);
    result.next.next = new ListNode(3);

    console.log(addTwoNumbers(l1, l2).toString(), result.toString());
}

/**
 * With one number is n-digit other (n-1) digit
 */
{
    let l1 = new ListNode(1);
    l1.next = new ListNode(2);
    l1.next.next = new ListNode(3);

    let l2 = new ListNode(3);
    l2.next = new ListNode(2);

    let result = new ListNode(4);
    result.next = new ListNode(4);
    result.next.next = new ListNode(3);

    console.log(addTwoNumbers(l1, l2).toString(), result.toString());
}

/**
 * Adding 0
 */
{
    let l1 = new ListNode(1);
    l1.next = new ListNode(2);
    l1.next.next = new ListNode(3);

    let l2 = new ListNode(0);

    let result = new ListNode(1);
    result.next = new ListNode(2);
    result.next.next = new ListNode(3);

    console.log(addTwoNumbers(l1, l2).toString(), result.toString());
}

/**
 * With carry over
 */
{
    let l1 = new ListNode(2);
    l1.next = new ListNode(1);
    l1.next.next = new ListNode(2);

    let l2 = new ListNode(9);
    l2.next = new ListNode(0);
    l2.next.next = new ListNode(1);

    let result = new ListNode(1);
    result.next = new ListNode(2);
    result.next.next = new ListNode(3);

    console.log(addTwoNumbers(l1, l2).toString(), result.toString());
}

/**
 * With carry over to n+1 digits
 */
{
    let l1 = new ListNode(9);
    l1.next = new ListNode(9);
    l1.next.next = new ListNode(9);

    let l2 = new ListNode(1);
    l2.next = new ListNode(1);
    l2.next.next = new ListNode(1);

    let result = new ListNode(0);
    result.next = new ListNode(1);
    result.next.next = new ListNode(1);
    result.next.next.next = new ListNode(1);

    console.log(addTwoNumbers(l1, l2).toString(), result.toString());
}
/**
 * Two zeroes
 */
{
    let l1 = new ListNode(0);

    let l2 = new ListNode(0);

    let result = new ListNode(0);

    console.log(addTwoNumbers(l1, l2).toString(), result.toString());
}
