class DNode<T> {
  value: T;
  next: DNode<T> | null;
  prev: DNode<T> | null;

  constructor(value: T) {
    this.value = value;
    this.next = null;
    this.prev = null;
  }
}

class MyDoublyLinkedList<T> {
  private _size: number;
  head: DNode<T> | null;
  tail: DNode<T> | null;
  constructor(val: T | null) {
    if (val === null) {
      this.head = null;
      this.tail = null;
      this._size = 0;
    } else {
      this.head = new DNode<T>(val);
      this.tail = this.head;
      this._size = 1;
    }
  }

  push(value: T): boolean {
    const node = new DNode(value);

    if (!this.head) {
      this.head = node;
      this.tail = this.head;
    } else {
      this.tail!.next = node;
      node.prev = this.tail;
      this.tail = node;
    }
    this._size++;
    return true;
  }

  pop(): DNode<T> | null {
    if (!this.tail) {
      return null;
    }

    const temp = this.tail;

    if (this._size === 1) {
      this.head = null;
      this.tail = null;
    } else {
      this.tail = temp!.prev;

      if (this.tail) {
        this.tail.next = null;
      }
      temp.prev = null;
    }
    this._size--;
    return temp;
  }

  unshift(val: T): boolean {
    const node = new DNode(val);

    if (!this.head) {
      this.head = node;
      this.tail = this.head;
    } else {
      node.next = this.head;
      this.head.prev = node;
      this.head = node;
    }
    this._size++;
    return true;
  }

  shift(): DNode<T> | null {
    if (!this.head) {
      return null;
    }

    const temp = this.head;

    if (this._size === 1) {
      this.head = null;
      this.tail = null;
    } else {
      this.head = this.head.next;
      if (this.head) {
        this.head.prev = null;
      }
      temp.next = null;
    }
    this._size--;
    return temp;
  }

  getFirst(): DNode<T> | null {
    return this.head;
  }

  getLast(): DNode<T> | null {
    return this.tail;
  }

  get(index: number): DNode<T> | null {
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

    const node = new DNode<T>(val);
    const prev = this.get(index - 1);
    const next = prev!.next;

    prev!.next = node;

    next!.prev = node;

    node.prev = prev;

    node.next = next;

    this._size++;
    return true;
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
