import {PrimeNumber} from './modificacionClase/PrintNumber';

const instanciaPrimeNumber = PrimeNumber.getPrimeNumberInstance();
const lista:number[] = instanciaPrimeNumber.nPrimos(5);

console.log(lista);

