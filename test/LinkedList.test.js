import LinkedList from '../src/LinkedList';

let linkedList = null;

describe('Ao adicionar ao final da lista usando prepend..', () => {

  beforeEach(() => {
    linkedList = new LinkedList();
  })

  describe('Adicionando um elemento apenas..', () => {

    beforeEach(() => {
      linkedList.prepend('primeiro');
    });

    test('Deve ser o head', () => {
      expect(linkedList.head.value).toBe('primeiro')
    });

    test('Não deve ter próximo', () => {
      expect(linkedList.head.next).toBeNull()
    });

    test('Deve ser o tail', () => {
      expect(linkedList.tail.value).toBe('primeiro')
    });

    test('Deve ser o head e o tail ao mesmo tempo', () => {
      expect(linkedList.tail.value).toBe('primeiro');
      expect(linkedList.head.value).toBe('primeiro');
    });
  });

  describe('Adicionando dois elementos..', () => {

    beforeEach(() => {
      linkedList.prepend('primeiro');
      linkedList.prepend('segundo');
    });

    test('O primeiro deve ser o tail', () => {
      expect(linkedList.tail.value).toBe('primeiro')
    });

    test('O segundo deve ser o head', () => {
      expect(linkedList.head.value).toBe('segundo')
    });

    test('O próximo do segundo (head) deve ser o primeiro', () => {
      expect(linkedList.head.next.value).toBe('primeiro')
    });
  });

  describe('Adicionando três elementos..', () => {

    beforeEach(() => {
      linkedList.prepend('primeiro');
      linkedList.prepend('segundo');
      linkedList.prepend('terceiro');
    });

    test('O terceiro deve ser o head', () => {
      expect(linkedList.head.value).toBe('terceiro')
    });

    test('O primeiro deve ser o tail', () => {
      expect(linkedList.tail.value).toBe('primeiro')
    });

    test('O próximo do terceiro (head) deve ser o segundo', () => {
      expect(linkedList.head.next.value).toBe('segundo')
    });

    test('O próximo do segundo deve ser o primeiro', () => {
      expect(linkedList.head.next.next.value).toBe('primeiro')
    });
  });

});

describe('Ao adicionar no início da lista usando append..', () => {

  beforeEach(() => {
    linkedList = new LinkedList();
  });

  describe('Adicionando um elemento apenas..', () => {

    beforeEach(() => {
      linkedList.append('primeiro');
    });

    test('Deve ser o head', () => {
      expect(linkedList.head.value).toBe('primeiro')
    });

    test('Não deve ter próximo', () => {
      expect(linkedList.head.next).toBeNull()
    });

    test('Deve ser o tail', () => {
      expect(linkedList.tail.value).toBe('primeiro')
    });

    test('Deve ser o head e o tail ao mesmo tempo', () => {
      expect(linkedList.tail.value).toBe('primeiro');
      expect(linkedList.head.value).toBe('primeiro');
    });
  });

  describe('Adicionando dois elementos..', () => {

    beforeEach(() => {
      linkedList.append('primeiro');
      linkedList.append('segundo');
    });

    test('O segundo deve ser o tail', () => {
      expect(linkedList.tail.value).toBe('segundo');
    });

    test('O primeiro deve ser o head', () => {
      expect(linkedList.head.value).toBe('primeiro');
    });

    test('O próximo do primeiro (head) deve ser o segundo', () => {
      expect(linkedList.head.next.value).toBe('segundo');
    });

    test('O segundo não deve ter próximo', () => {
      expect(linkedList.head.next.next).toBeNull();
    });


  });

  describe('Adicionando três elementos..', () => {

    beforeEach(() => {
      linkedList.append('primeiro');
      linkedList.append('segundo');
      linkedList.append('terceiro');
    });

    test('O primeiro deve ser o head', () => {
      expect(linkedList.head.value).toBe('primeiro')
    });

    test('O terceiro deve ser o tail', () => {
      expect(linkedList.tail.value).toBe('terceiro')
    });

    test('O próximo do primeiro (head) deve ser o segundo', () => {
      expect(linkedList.head.next.value).toBe('segundo')
    });

    test('O próximo do segundo deve ser o terceiro', () => {
      expect(linkedList.head.next.next.value).toBe('terceiro')
    });

    test('O terceiro não deve ter próximo', () => {
      expect(linkedList.head.next.next.next).toBeNull()
    });
  });

});

describe('Ao excluir um item usando delete..', () => {

  beforeEach(() => {
    linkedList = new LinkedList();
  });

  describe('Em um lista de um elemento apenas..', () => {

    beforeEach(() => {
      linkedList.append('primeiro');
    });

    test('Ao excluir deve retornar o head como null', () => {
      linkedList.delete('primeiro');
      expect(linkedList.head).toBeNull();
    });

    test('Ao excluir deve retornar o tail como null', () => {
      linkedList.delete('primeiro');
      expect(linkedList.tail).toBeNull();
    });
  });

  describe('Em um lista de dois elementos..', () => {

    beforeEach(() => {
      linkedList.append('primeiro');
      linkedList.append('segundo');
    });

    test('Ao excluir o primeiro deve retornar o head como segundo', () => {
      linkedList.delete('primeiro');
      expect(linkedList.head.value).toBe('segundo');
    });

    test('Ao excluir o segundo deve retornar o tail como primeiro', () => {
      linkedList.delete('segundo');
      expect(linkedList.tail.value).toBe('primeiro');
    });


  });

  describe('Em um lista de três elementos..', () => {

    beforeEach(() => {
      linkedList.append('primeiro');
      linkedList.append('segundo');
      linkedList.append('terceiro');
    });

    test('Ao excluir o primeiro deve retornar o head como segundo', () => {
      linkedList.delete('primeiro');
      expect(linkedList.head.value).toBe('segundo');
    });

    test('Ao excluir o segundo o próximo do primeiro deve ser o terceiro', () => {
      linkedList.delete('segundo');
      expect(linkedList.head.next.value).toBe('terceiro');
    });

    test('Ao excluir o terceiro deve retornar o tail como segundo', () => {
      linkedList.delete('terceiro');
      expect(linkedList.tail.value).toBe('segundo');
    });


  });


});

describe('Ao buscar um item usando find..', () => {});

describe('Ao excluir o último item (tail) usando deleteTail..', () => {});

describe('Ao excluir o primeiro item (head) usando deleteHead..', () => {});

describe('Ao Transformar um array em LinkedList usando fromArray..', () => {});

describe('Ao Transformar um LinkedList em Array usando toArray..', () => {});

describe('Ao Exibir um LinkedList usando toString..', () => {});

describe('Ao Reverter um LinkedList usando reverse..', () => {});
