import DoublyLinkedListNode from './DoublyLinkedList/DoublyLinkedListNode';
import Comparator from './Utils/Comparator';

/**
 * Lista Duplamente ligada
 */
export default class DoublyLinkedList {
  /**
   * @param {Function} [ComparatoFunction]
   */
  constructor(comparatorFunction) {
    /** @var DoublyLinkedListNode */
    this.head = null;
    /** @var DoublyLinkedListNode */
    this.tail = null;
    this.compare = new Comparator(comparatorFunction);
  }

  /**
   * Adiciona um elemento no início (head) da lista duplamente ligada
   * @param {*} value
   * @returns {DoublyLinkedList}
   */
  prepend(value){
    /**
     * Faz com que o novo nó seja o head
     */
    const newNode = new DoublyLinkedListNode(value, this.head);

    /**
     * Se já existe um head, logo não pode ser mais o head
     * faça dessa forma então esse elemento como referência de
     * previous (anterior) do head e marque esse novo nó como head
     */
    if (this.head) {
      this.head.previous = newNode;
    }
    this.head = newNode;

    /**
     * Se não há tail (cauda) ainda faremos então
     * desse novo nó o tail.
     */
    if (!this.tail) {
      this.tail = newNode;
    }

    return this;
  }

  /**
   * Adiciona um novo elemento ao final (tail)
   * @param value
   * @returns {DoublyLinkedList}
   */
  append(value) {
    /**
     * Cria uma nova instância da classe auxiliar
     * com o valor recebido no parâmetro
     * @type {DoublyLinkedListNode}
     */
    const newNode = new DoublyLinkedListNode(value);
    /**
     * Se não há head
     * significa que também não há tail, logo
     * o novo nó será o head
     * o novo nó será o tail
     */
    if (!this.head) {
      this.head = newNode;
      this.tail = newNode;
      return this;
    }
    /**
     * caso não caia na condição acima
     * significa que já existe um head
     * logo o novo nó será adicionado como referência (next)
     * do nó de tail
     */
    this.tail.next = newNode;
    /**
     * a referência de anterior (previous) do novo nó
     * será o tail atual
     */
    newNode.previous = this.tail;
    /**
     * o novo nó é setado como tail
     */
    this.tail = newNode;
    return this;
  }

  /**
   *
   * @param {*} value
   * @returns {null}
   */
  delete(value) {
    /**
     * se não há head então retorna null,
     * pois logicamente se não há elemento no início, não haverá
     * mais elementos a serem excluídos
     */
    if (!this.head) {
      return null;
    }

    let deletedNode = null;
    /**
     * variavel inicializada para servir de referencia
     * para o while logo abaixo,
     * inicia com o head, pois ele sempre é o primeiro.
     */
    let currentNode = this.head;

    /**
     * Enquanto tiver valor em currentNode
     */
    while (currentNode) {
      if (this.compare.equal(currentNode.value, value)) {
        deletedNode = currentNode;

        if (deletedNode === this.head) {
          this.head = deletedNode.next;
          if (this.head) {
            this.head.previous = null;
          }

          if (deletedNode === this.tail) {
            this.tail = null;
          }
        } else if (deletedNode === this.tail) {
          this.tail = deletedNode.previous;
          this.tail.next = null;
        } else {
          const previousNode = deletedNode.previous;
          const nextNode = deletedNode.next;

          previousNode.next = nextNode;
          nextNode.previous = previousNode;
        }
      }

      currentNode = currentNode.next;
    }
    return deletedNode;
  }

  /**
   *
   * @param value
   * @param callback
   * @returns {((value?: any) => IteratorResult<T>) | ((value?: any) => Promise<IteratorResult<T>>) | DoublyLinkedListNode | LinkedListNode | *|null}
   */
  find({ value = undefined, callback = undefined }) {
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
    if (!this.tail) {
      return null;
    }

    if (this.head === this.tail) {
      const deletedTail = this.tail;
      this.head = null;
      this.tail = null;
      return deletedTail;
    }

    const deletedTail = this.tail;

    this.tail = this.tail.previous;
    this.tail.next = null;

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
      this.head.previous = null;
    } else {
      this.head = null;
      this.tail = null;
    }
    return deletedHead;
  }

  /**
   *
   * @returns {Array}
   */
  toArray() {
    const nodes = [];

    let currentNode = this.head;
    while (currentNode) {
      nodes.push(currentNode);
      currentNode = currentNode.next;
    }
    return nodes;
  }

  /**
   *
   * @param values
   * @returns {DoublyLinkedList}
   */
  fromArray(values) {
    values.forEach((value) => this.append(value));
    return this;
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
   * @returns {DoublyLinkedList}
   */
  reverse() {
    let currNode = this.head;
    let prevNode = null;
    let nextNode = null;

    while (currNode) {
      nextNode = currNode.next;
      currNode.next = prevNode;
      prevNode = currNode;
      currNode = nextNode;
    }

    this.tail = this.head;
    this.head = prevNode;

    return this;
  }


}
