import DoublyLinkedList from '../src/DoublyLinkedList';

let doublyLinkedList = null;

describe('Ao adicionar ao final da lista usando prepend..', () => {

  beforeEach(() => {
    doublyLinkedList = new DoublyLinkedList();
  })

  describe('Adicionando um elemento apenas..', () => {

    beforeEach(() => {
      doublyLinkedList.prepend('primeiro');
    });

    test('Deve ser o head', () => {
      expect(doublyLinkedList.head.value).toBe('primeiro')
    });

    test('Deve ser o tail', () => {
      expect(doublyLinkedList.tail.value).toBe('primeiro')
    });

    test('Next do head deve ser null', () => {
      expect(doublyLinkedList.head.next).toBeNull();
    });

    test('Previous do head deve ser null', () => {
      expect(doublyLinkedList.head.previous).toBeNull();
    });

    test('Next do tail deve ser null', () => {
      expect(doublyLinkedList.tail.next).toBeNull();
    });

    test('Previous do tail deve ser null', () => {
      expect(doublyLinkedList.tail.previous).toBeNull();
    });

  });

  describe('Adicionando dois elementos diferentes..', () => {
    beforeEach(() => {
      doublyLinkedList.prepend('primeiro');
      doublyLinkedList.prepend('segundo');
    });
  });

  describe('Adicionando três elementos diferentes..', () => {
    beforeEach(() => {
      doublyLinkedList.prepend('primeiro');
      doublyLinkedList.prepend('segundo');
      doublyLinkedList.prepend('terceiro');
    });
  });

});

