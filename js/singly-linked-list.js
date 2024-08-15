class Node {
  constructor(value) {
    this.head = value;
    this.next = null;
  }
}

class LinkedList {
  #size;
  constructor(val) {
    if (!val) {
      this.head = null;
      this.tail = null;
      this.#size = 0;
      return;
    }
    this.head = new Node(val);
    this.tail = this.head;
    this.#size = 1;
  }

  push(value) {
    const node = new Node(value);

    if (!this.head) {
      this.head = node;
      this.tail = this.head;
      this.#size++;
      return true;
    }

    this.tail.next = node;
    this.tail = node;
    this.#size++;
    return true;
  }

  pop() {
    if (!this.head) {
      return null;
    }

    let temp = this.head;
    let pre = this.head;

    while (temp.next) {
      pre = temp;
      temp = pre.next;
    }

    this.tail = pre;

    this.tail.next = null;
    this.#size--;

    if (this.#size === 0) {
      this.head = null;
      this.tail = null;
    }

    return temp;
  }

  unshift(val) {
    const node = new Node(val);

    if (!this.head) {
      this.head = node;
      this.tail = this.head;
      this.#size++;
      return true;
    }

    node.next = this.head;
    this.head = node;
    this.#size++;
    return true;
  }

  shift() {
    if (!this.head) {
      return null;
    }

    const temp = this.head;
    this.head = this.head.next;
    temp.next = null;
    this.#size--;

    if (this.#size === 0) {
      this.tail = null;
    }

    return temp;
  }

  getFirst() {
    if (!this.head) {
      return null;
    }
    return this.head;
  }

  getLast() {
    if (!this.tail) {
      return null;
    }
    return this.tail;
  }

  get(index) {
    if (index < 0 || index >= this.#size) {
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
      temp.head = val;
      return true;
    }
    return false;
  }

  insert(index, val) {
    if (index < 0 || index > this.#size) {
      return false;
    }

    if (index === 0) {
      this.unshift(val);
      return true;
    }

    if (index === this.#size) {
      this.push(val);
      return true;
    }

    const node = new Node(val);
    const temp = this.get(index - 1);

    node.next = temp.next;
    temp.next = node;
    this.#size++;
    return true;
  }

  clear() {
    this.head = null;
    this.#size = 0;
  }

  size() {
    return this.#size - 1;
  }
}
