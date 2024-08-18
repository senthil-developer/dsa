class Node {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}

class LinkedList {
  constructor(val) {
    if (val === null) {
      this.head = null;
      this.tail = null;
      this._size = 0;
    } else {
      this.head = new Node(val);
      this.tail = this.head;
      this._size = 1;
    }
  }

  push(value) {
    const node = new Node(value);

    if (!this.head) {
      this.head = node;
      this.tail = this.head;
    } else {
      this.tail.next = node;
      this.tail = node;
    }

    this._size++;
    return true;
  }

  pop() {
    if (!this.head) {
      return null;
    }

    let temp = this.head;
    let pre = null;

    while (temp.next) {
      pre = temp;
      temp = temp.next;
    }

    if (pre) {
      this.tail = pre;
      this.tail.next = null;
    } else {
      this.head = null;
      this.tail = null;
    }

    this._size--;
    return temp;
  }

  unshift(val) {
    const node = new Node(val);

    if (!this.head) {
      this.head = node;
      this.tail = this.head;
    } else {
      node.next = this.head;
      this.head = node;
    }

    this._size++;
    return true;
  }

  shift() {
    if (!this.head) {
      return null;
    }

    const temp = this.head;
    this.head = this.head.next;
    temp.next = null;
    this._size--;

    if (this._size === 0) {
      this.tail = null;
    }

    return temp;
  }

  getFirst() {
    return this.head;
  }

  getLast() {
    return this.tail;
  }

  get(index) {
    if (index < 0 || index >= this._size) {
      return null;
    }

    let temp = this.head;
    for (let i = 0; i < index; i++) {
      temp = temp.next;
    }

    return temp;
  }

  set(index, val) {
    const temp = this.get(index);

    if (temp) {
      temp.value = val;
      return true;
    }
    return false;
  }

  insert(index, val) {
    if (index < 0 || index > this._size) {
      return false;
    }

    if (index === 0) {
      this.unshift(val);
      return true;
    }

    if (index === this._size) {
      this.push(val);
      return true;
    }

    const node = new Node(val);
    const prevNode = this.get(index - 1);

    if (prevNode) {
      node.next = prevNode.next;
      prevNode.next = node;
      this._size++;
      return true;
    }

    return false;
  }

  clear() {
    this.head = null;
    this.tail = null;
    this._size = 0;
  }

  size() {
    return this._size;
  }
}
