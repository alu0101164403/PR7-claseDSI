import 'mocha';
import {expect} from 'chai';
import {PrimeNumber} from '../src/modificacionClase/PrintNumber';


describe('Test ejercicio modificacion', () => {
  const instanciaPrimeNumber1 = PrimeNumber.getPrimeNumberInstance();
  const instanciaPrimeNumber2 = PrimeNumber.getPrimeNumberInstance();

  it('Se comprueba que se crea un objeto de la clase', () => {
    expect(instanciaPrimeNumber1 instanceof PrimeNumber).to.be.true;
  });
  it('Se comprueba que se crea una unica instancia', () => {
    expect(instanciaPrimeNumber1 === instanciaPrimeNumber2).to.be.true;
  });
  it('Se comprueba el metodo nPrimos()', () => {
    expect(instanciaPrimeNumber1.nPrimos(4)).to.be.equal([2, 3, 5, 7]);
  });
  it('Se comprueba el metodo nPrimosRango()', () => {
    // eslint-disable-next-line max-len
    // expect(instanciaPrimeNumber1.nPrimosRango(6, 20)).to.be.equal([7, 11, 15]);
  });
  it('Se comprueba que la clase es iterable', () => {
    // expect(instanciaPrimeNumber1.).to.be.equal();
  });
});
