import LinkedListNode from './LinkedList/LinkedListNode';
import Comparator from './Utils/Comparator';

/**
 * Lista Ligada
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
   * Adiciona um elemento no inicio (head) da lista ligada
   * @param value
   * @returns {LinkedList}
   */
  prepend(value) {
    /*
    Adiciona um novo item e seta
    como referencia de seu next o head atual
    */
    const newNode = new LinkedListNode(value, this.head);
    /* Seta o novo nó como head */
    this.head = newNode;

    /* Se não tem o tail então o novo nó será o novo tail */
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
    /* cria um novo objeto com o next null */
    const newNode = new LinkedListNode(value);

    /* Se não tem um head então o novo nó será o head e o tail */
    if (!this.head) {
      this.head = newNode;
      this.tail = newNode;
      return this;
    }

    /* Se não cair na condição acima, significa que tem um head
    * logo, seta o novo nó como referência de próximo para o tail atual*/
    this.tail.next = newNode;
    /* Seta o novo nó como novo tail */
    this.tail = newNode;
    return this;
  }

  /**
   *
   * @param value
   * @returns {null}
   */
  delete(value) {
    /* Se não tem um head, não tem elementos
    * então retorna null
    */
    if (!this.head) {
      return null;
    }
    /* inicializa a variavel deletedNode para usar no while */
    let deletedNode = null;
    /* Enquanto a lista tiver um head e o valor passado no parâmetro
    * for igual ao valor do head...*/
    while(this.head && this.compare.equal(this.head.value, value)) {
      /* deletedNode será o head atual*/
      deletedNode = this.head;
      /* seta o head como o próximo item*/
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
