// test('', () => {});
import Comparator from '../../src/Utils/Comparator';

describe('Ao comparar com equals dois números..', () => {

  const comparator = new Comparator();

  test('Deve comparar dois inteiros iguais', () => {
    expect(comparator.equal(2,2)).toBeTruthy();
  });

  test('Deve comparar dois inteiros iguais em formato string', () => {
    expect(comparator.equal('3','3')).toBeTruthy();
  });

  test('Deve retornar false para dois números diferentes em formato string', () => {
    expect(comparator.equal('4','5')).toBeFalsy();
  });

  test('Deve retornar false para dois números diferentes em formato number', () => {
    expect(comparator.equal(4,5)).toBeFalsy();
  });

});

describe('Ao comparar com lessThan dois números..', () => {

  const comparator = new Comparator();

  test('Deve retornar verdadeiro quando o primeiro numero for menor que o segundo', () => {
    expect(comparator.lessThan(2,3)).toBeTruthy();
  });

  test('Deve retornar verdadeiro quando o primeiro numero for menor que o segundo e ambos forem string', () => {
    expect(comparator.lessThan('2','3')).toBeTruthy();
  });

  test('Deve retornar false quando o primeiro numero for maior que o segundo', () => {
    expect(comparator.lessThan(4,3)).toBeFalsy();
  });

  test('Deve retornar false quando o primeiro numero for igual ao segundo', () => {
    expect(comparator.lessThan(2,2)).toBeFalsy();
  });

});

describe('Ao comparar com graterThan dois números..', () => {

  const comparator = new Comparator();

  test('Deve retornar verdadeiro quando o primeiro numero for maior que o segundo', () => {
    expect(comparator.greaterThan(4,3)).toBeTruthy();
  });

  test('Deve retornar false quando o primeiro numero for igual ao segundo', () => {
    expect(comparator.greaterThan(2,2)).toBeFalsy();
  });

  test('Deve retornar false quando o primeiro numero for menor que o segundo', () => {
    expect(comparator.greaterThan(1,2)).toBeFalsy();
  });

});

describe('Ao comparar com lessThanOrEqual dois números..', () => {

  const comparator = new Comparator();

  test('Deve retornar verdadeiro quando o primeiro numero for menor que o segundo', () => {
    expect(comparator.lessThanOrEqual(4,5)).toBeTruthy();
  });

  test('Deve retornar verdadeiro quando o primeiro numero for igual ao segundo', () => {
    expect(comparator.lessThanOrEqual(4,4)).toBeTruthy();
  });

  test('Deve retornar false quando o primeiro numero for maior que o segundo', () => {
    expect(comparator.lessThanOrEqual(4,2)).toBeFalsy();
  });


});

describe('Ao comparar com greaterThanOrEqual dois números..', () => {

  const comparator = new Comparator();

  test('Deve retornar verdadeiro quando o primeiro numero for maior que o segundo', () => {
    expect(comparator.greaterThanOrEqual(8,5)).toBeTruthy();
  });

  test('Deve retornar verdadeiro quando o primeiro numero for igual ao segundo', () => {
    expect(comparator.greaterThanOrEqual(4,4)).toBeTruthy();
  });

  test('Deve retornar false quando o primeiro numero for menor que o segundo', () => {
    expect(comparator.greaterThanOrEqual(4,8)).toBeFalsy();
  });

});

