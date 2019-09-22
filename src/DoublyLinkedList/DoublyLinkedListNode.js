/**
 * Classe Auxiliar do DoublyLinkedList
 */
export default class DoublyLinkedListNode {
  /**
   *
   * @param value
   * @param next
   * @param previous
   */
  constructor(value, next = null, previous = null) {
    this.value = value;
    this.next = next;
    this.previous = previous;
  }

  /**
   *
   * @param callback
   * @returns {string}
   */
  toString(callback) {
    return callback ? callback(this.value) : `${this.value}`;
  }
}
