class LinkList {
  constructor(value) {
    this.value = value;
    this.next = null;
    this.head = null;
  }
  getFirst() {
    return this.head;
  }
  getLast() {
    if (this.head === null) {
      return null;
    } else {
      let current = this.head;
      while (current.next != null) {
        current = current.next;
      }
      return current;
    }
  }
  clear() {
    this.head = null;
  }
  printNodes() {
    let current = this.head;
    while (current != null) {
      console.log(current.value);
      current = current.next;
    }
  }
}

class Node {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}

const list = new LinkList();
list.head = new Node("first");
list.head.next = new Node("second");
list.head.next.next = new Node("third");

list.printNodes();
// console.log(list.getFirst().value);
// console.log(list.getLast().value);
