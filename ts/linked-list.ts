class MyNode {
  head: number;
  next: MyNode | null;

  constructor(value: number) {
    this.head = value;
    this.next = null;
  }
}

class MyLinkedList {
  private _size: number;
  head: MyNode | null;
  tail: MyNode | null;
  constructor(val: number | null) {
    if (val === null) {
      this.head = null;
      this.tail = null;
      this._size = 0;
      return;
    }
    this.head = new MyNode(val);
    this.tail = this.head;
    this._size = 1;
  }

  push(value: number): boolean {
    const node = new MyNode(value);

    if (!this.head) {
      this.head = node;
      this.tail = this.head;
      this._size++;
      return true;
    }

    this.tail!.next = node;
    this.tail = node;
    this._size++;
    return true;
  }

  pop(): MyNode | null {
    if (!this.head) {
      return null;
    }

    let temp = this.head;
    let pre: MyNode | null = this.head;

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

  unshift(val: number): boolean {
    const node = new MyNode(val);

    if (!this.head) {
      this.head = node;
      this.tail = this.head;
      this._size++;
      return true;
    }

    node.next = this.head;
    this.head = node;
    this._size++;
    return true;
  }

  shift(): MyNode | null {
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

  getFirst(): MyNode | null {
    if (!this.head) {
      return null;
    }
    return this.head;
  }

  getLast(): MyNode | null {
    if (!this.tail) {
      return null;
    }
    return this.tail;
  }

  get(index: number): MyNode | null {
    if (index < 0 || index >= this._size) {
      return null;
    }

    let temp = this.head;
    for (let i = 0; i < index; i++) {
      temp = temp!.next;
    }

    return temp;
  }

  set(index: number, val: number): boolean {
    const temp = this.get(index);

    if (temp) {
      temp.head = val;
      return true;
    }
    return false;
  }

  insert(index: number, val: number): boolean {
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

    const node = new MyNode(val);
    const temp = this.get(index - 1);

    node.next = temp!.next;
    temp!.next = node;
    this._size++;
    return true;
  }

  clear(): void {
    this.head = null;
    this._size = 0;
  }

  size(): number {
    return this._size - 1;
  }
}

const myList = new MyLinkedList(1);

myList.push(2);
myList.push(3);
myList.push(42);
console.log(myList);
