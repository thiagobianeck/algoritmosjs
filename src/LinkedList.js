import LinkedListNode from './LinkedList/LinkedListNode';
import Comparator from './Utils/Comparator';

/**
 *
 */
export default class LinkedList {
  /**
   *
   * @param comparatorFunction
   */
  constructor(comparatorFunction) {
    this.head = null;
    this.tail = null;
    this.compare = new Comparator(comparatorFunction);
  }

  /**
   * @description adiciona um elemento no inicio da lista ligada
   * @param value
   * @returns {LinkedList}
   */
  prepend(value) {
    const newNode = new LinkedListNode(value, this.head);
    this.head = newNode;

    if(!this.tail) {
      this.tail = newNode;
    }
    return this;
  }

  /**
   *
   * @param value
   * @returns {LinkedList}
   */
  append(value) {
    const newNode = new LinkedListNode(value);

    if (!this.head) {
      this.head = newNode;
      this.tail = newNode;
      return this;
    }

    this.tail.next = newNode;
    this.tail = newNode;
    return this;
  }

  /**
   *
   * @param value
   * @returns {null}
   */
  delete(value) {
    if (!this.head) {
      return null;
    }

    let deletedNode = null;

    while(this.head && this.compare.equal(this.head.value, value)) {
      deletedNode = this.head;
      this.head = this.head.next;
    }

    let currentNode = this.head;

    if (currentNode !== null) {
      while(currentNode.next) {
        if (this.compare.equal(currentNode.next.value, value)) {
          deletedNode = currentNode.next;
          currentNode.next = currentNode.next.next;
        } else {
          currentNode = currentNode.next;
        }
      }
    }

    if (this.compare.equal(this.tail.value, value)) {
      this.tail = currentNode;
    }

    return deletedNode
  }

  /**
   *
   * @param value
   * @param callback
   * @returns {((value?: any) => IteratorResult<T>) | ((value?: any) => Promise<IteratorResult<T>>) | LinkedListNode | *|null}
   */
  find({ value = undefined, callback = undefined }){
    if (!this.head) {
      return null;
    }

    let currentNode = this.head;

    while(currentNode) {
      if (callback && callback(currentNode.value)) {
        return currentNode;
      }

      if (value !== undefined && this.compare.equal(currentNode.value, value)) {
        return currentNode;
      }

      currentNode = currentNode.next;
    }

    return null;
  }

  /**
   *
   * @returns {null}
   */
  deleteTail() {
    const deletedTail = this.tail;

    if (this.head === this.tail) {
      this.head = null;
      this.tail = null;
      return deletedTail;
    }

    let currentNode = this.head;
    while(currentNode.next) {
      if (!currentNode.next.next) {
        currentNode.next = null;
      } else {
        currentNode = currentNode.next;
      }
    }

    this.tail = currentNode;

    return deletedTail;
  }

  /**
   *
   * @returns {null}
   */
  deleteHead() {
    if (!this.head) {
      return null;
    }

    const deletedHead = this.head;

    if (this.head.next) {
      this.head = this.head.next;
    } else {
      this.head = null;
      this.tail = null;
    }

    return deletedHead;
  }

  /**
   *
   * @param values
   * @returns {LinkedList}
   */
  fromArray(values) {
    values.forEach((value) => this.append(value));
    return this;
  }

  /**
   *
   * @returns {Array}
   */
  toArray() {
    const nodes = [];

    let currentNode = this.head;
    while(currentNode) {
      nodes.push(currentNode);
      currentNode = currentNode.next;
    }

    return nodes;
  }

  /**
   *
   * @param callback
   * @returns {string}
   */
  toString(callback) {
    return this.toArray().map((node) => node.toString(callback)).toString();
  }

  /**
   *
   * @returns {LinkedList}
   */
  reverse() {
    let currNode = this.head;
    let prevNode = null;
    let nextNode = null;

    while(currNode) {
      nextNode = currNode.next;
      currNode.next = prevNode;
      prevNode = currNode;
    }
    this.tail = this.head;
    this.head = prevNode;

    return this;
  }
}
