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
    previousNode.next = new _Node(item, this.head /* currNode */);
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

    while (currNode !== null && currNode.value !== item) {
      previousNode = currNode;
      currNode = currNode.next;
    }
    if (currNode === null) {
      console.log('Item not found');
      return;
    }
    previousNode.next = currNode.next;
  }
}

function isCycle(list) {
  let currNode = list.head;
  let fastNode = list.head;

  while (currNode !== fastNode || currNode !== null) {
    currNode = currNode.next;
    fastNode = fastNode.next.next;
  }
  if (currNode === null) {
    return 'There is no cycle';
  }
  return 'this is a cycle';
}

function display(sll) {
  let currNode = sll.head;
  let i = 0;
  while (currNode !== null) {
    console.log(i, currNode);
    i++;
    currNode = currNode.next;
  }
}

function size(sll) {
  let currNode = sll.head;
  let i = 0;
  while(currNode !== null){
    i++;
    currNode = currNode.next;
  }
  return i;
}

function isEmpty(sll){
  if(sll.head === null){
    return 'Empty';
  }
  return 'Not empty';
}

function findPrevious(sll, item){
  let currNode = sll.head;
  let prevNode = sll.head;

  if(sll.head === null){
    return 'Empty list';
  }

  if(sll.head.value === item){
    return 'No previous value';
  }

  while(currNode.value !== item){
    prevNode = currNode;
    currNode = currNode.next;
  }
  return prevNode;
}

function findLast(sll){
  let currNode = sll.head;

  while(currNode.next !== null){
    currNode = currNode.next;
  }
  return currNode;
}

function reverseList(sll) {
  let currNode = sll.head;
  let reverseHead = null;
  
  while (currNode !== null) {
    // keep the value from current node
    let tempNode = currNode.next;
    currNode.next = reverseHead;
    reverseHead = currNode;
    // assign current node to tempNode
    currNode = tempNode;
    
  }
  sll.head = reverseHead;
  return sll;
}

function findThirdFromEnd(sll) {
  let currNode = sll.head;

  while (currNode.next.next !== null) {
    currNode = currNode.next;
  }
  return currNode;
}

function middleOfList(sll) {
  let middleNodeTracker = sll.head;
  let fastNodeTracker = sll.head;

  while (fastNodeTracker.next !== null) {
    middleNodeTracker = middleNodeTracker.next;
    fastNodeTracker = fastNodeTracker.next.next;
  }
  return middleNodeTracker;
}


function main() {
  let SLL = new LinkedList();
  let cycleList = new LinkedList();

  cycleList.insertFirst('Apollo');
  cycleList.insertLast('Boomer');
  cycleList.insertLast('Husker');
  cycleList.insertLast('Starbuck');
  cycleList.insertAt('Helo', 3);
  isCycle(cycleList);

  SLL.insertFirst('Apollo');
  SLL.insertLast('Boomer');
  SLL.insertLast('Helo');
  SLL.insertLast('Husker');
  SLL.insertLast('Starbuck');
  //console.log(middleOfList(SLL));
  //SLL.insertLast('Tauhida');
  //SLL.remove('Tauhida');
  //findThirdFromEnd(SLL);
  // SLL.insertBefore("Athena", "Boomer");
  // SLL.insertAfter("Hotdog", "Helo");
  // SLL.insertAt("Kat", 3);
  //display(SLL);
  //console.log(size(SLL));
  //console.log(isEmpty(SLL));
  //console.log(findPrevious(SLL, 'Apollo'))
  //console.log(findLast(SLL));
  //reverseList(SLL);
  //console.log(JSON.stringify(SLL));
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
