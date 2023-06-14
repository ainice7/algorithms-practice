function ListNode(val, next) {
  this.val = val === undefined ? 0 : val;
  this.next = next === undefined ? null : next;
}

function LinkedList() {
  this.head = null;
  this.length = 0;
}

LinkedList.prototype.addToTheEnd = function (value) {
  let node = new ListNode(value); //creating the node using class Node

  if (this.length === 0) {
    this.head = node; // If there are no nodes
    // node variable will be the first and head node in the list
  } else {
    let current = this.head;

    while (current.next) {
      current = current.next;
    }

    current.next = new ListNode(value);
  }

  this.length++;
};

/**
 * @param {ListNode} head
 * @return {ListNode}
 */
var reverseList = function (head) {
  if (head === null || head.next === null) {
    return head
  }
  const newHead = reverseList(head.next);
  head.next.next = head;
  head.next = null;
  return newHead;
};

const list = new LinkedList();
list.addToTheEnd(1)
list.addToTheEnd(2)
list.addToTheEnd(3)
list.addToTheEnd(4)
console.log(JSON.stringify(reverseList(list.head)));