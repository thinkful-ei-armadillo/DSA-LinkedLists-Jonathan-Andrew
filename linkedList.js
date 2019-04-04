class _Node {
  constructor(value, next) {
    this.value = value;
    this.next = next;
  }
}

class LinkedList {
  constructor() {
    this.head = null;
  }

  insertFirst(item) {
    this.head = new _Node(item, this.head);
  }

  insertLast(item) {
    if (this.head === null) {
      this.insertFirst(item);
    } else {
      let tempNode = this.head;
      while (tempNode.next !== null) {
        tempNode = tempNode.next;
      }
      tempNode.next = new _Node(item, null);
    }
  }

  insertAt(item, pos) {
    let currNode = this.head;
    let previousNode = this.head;
    let i = 0;

    if (pos === 0) {
      this.head = new _Node(item, this.head);
      return;
    }

    while (i !== pos) {
      if (currNode.next === null) {
        return console.log('Index does not exist');
      }
      previousNode = currNode;
      currNode = currNode.next;
      i++;
    }
    previousNode.next = new _Node(item, currNode);
  }

  insertAfter(item, keyValue) {
    let currNode = this.head;

    while (currNode.value !== keyValue) {
      if (currNode.next !== null) {
        currNode = currNode.next;
      }
    }
    currNode.next = new _Node(item, currNode.next);
  }

  insertBefore(item, keyValue) {
    let currNode = this.head;
    let previousNode = this.head;

    while (currNode.value !== keyValue) {
      if (currNode.next !== null) {
        previousNode = currNode;
        currNode = currNode.next;
      }
    }
    previousNode.next = new _Node(item, currNode);
  }

  find(item) {
    let currNode = this.head;

    if (!this.head) {
      return null;
    }

    while (currNode.value !== item) {
      if (currNode.next === null) {
        return null;
      } else {
        currNode = currNode.next;
      }
    }
    return currNode;
  }

  remove(item) {
    if (!this.head) {
      return null;
    }
    if (this.head.value === item) {
      this.head = this.head.next;
      return;
    }

    let currNode = this.head;
    let previousNode = this.head;

    while ((currNode !== null) && (currNode.value !== item)) {
      currNode = currNode.next;
      previousNode = currNode;
    }
    if (currNode === null) {
      console.log('Item not found');
      return;
    }
    previousNode.next = currNode.next;
  }

}


function main() {
  let SLL = new LinkedList();
  SLL.insertFirst('Apollo');
  SLL.insertLast('Boomer');
  SLL.insertLast('Helo');
  SLL.insertLast('Husker');
  SLL.insertLast('Starbuck');
  SLL.insertLast('Tauhida');
  SLL.remove('Tauhida');
  SLL.insertBefore('Athena', 'Boomer');
  SLL.insertAfter('Hotdog', 'Helo');
  SLL.insertAt('Kat', 3);
  console.log(JSON.stringify(SLL));
}

main();

//group review
function insertInSortedOrder(SLL, item) {
  // input: C --> D --> M --> N insert E
  // output: C --> D --> E --> M --> N
  let node = SLL.head;
  let previousNode = SLL.head;
  while (node !== null) {
    if (node.value > item) {
      previousNode = node;
      node = node.next;
    }
  }
  previousNode.next = new _Node(item, node);
}