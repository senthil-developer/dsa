class MyNode<T> {
  value: T;
  next: MyNode<T> | null;

  constructor(value: T) {
    this.value = value;
    this.next = null;
  }
}

class MyLinkedList<T> {
  private _size: number;
  head: MyNode<T> | null;
  tail: MyNode<T> | null;

  constructor(val: T | null) {
    if (val === null) {
      this.head = null;
      this.tail = null;
      this._size = 0;
    } else {
      this.head = new MyNode<T>(val);
      this.tail = this.head;
      this._size = 1;
    }
  }

  push(value: T): boolean {
    const node = new MyNode(value);

    if (!this.head) {
      this.head = node;
      this.tail = this.head;
    } else {
      this.tail!.next = node;
      this.tail = node;
    }

    this._size++;
    return true;
  }

  pop(): MyNode<T> | null {
    if (!this.head) {
      return null;
    }

    let temp = this.head;
    let pre: MyNode<T> | null = null;

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

  unshift(val: T): boolean {
    const node = new MyNode(val);

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

  shift(): MyNode<T> | null {
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

  getFirst(): MyNode<T> | null {
    return this.head;
  }

  getLast(): MyNode<T> | null {
    return this.tail;
  }

  get(index: number): MyNode<T> | null {
    if (index < 0 || index >= this._size) {
      return null;
    }

    let temp = this.head;
    for (let i = 0; i < index; i++) {
      temp = temp!.next;
    }

    return temp;
  }

  set(index: number, val: T): boolean {
    const temp = this.get(index);

    if (temp) {
      temp.value = val;
      return true;
    }
    return false;
  }

  insert(index: number, val: T): boolean {
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

    const node = new MyNode<T>(val);
    const prevNode = this.get(index - 1);

    if (prevNode) {
      node.next = prevNode.next;
      prevNode.next = node;
      this._size++;
      return true;
    }

    return false;
  }

  clear(): void {
    this.head = null;
    this.tail = null;
    this._size = 0;
  }

  size(): number {
    return this._size;
  }
}
