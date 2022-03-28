/**
 * clase que representa una lista con numeros primos
 * esta clase tiene un atributo estatico para guardar una
 * instancia de la clase, por lo que para que no puedan
 * crearse multiples objetos se hizo el constructor privado
 */
export class PrimeNumber {
  // private listaPrimos: Set<number>;
  private listaPrimos: number[];
  private static primeNumberInstance: PrimeNumber;
  /**
   * constructor privado para que no se puedan crear objetos
   * distintos fuera de la clase, inciializa una lista vacia
   * que contendra los numeros primos que se pida
   */
  private constructor() {
    this.listaPrimos = [];
    // this.listaPrimos = new Set();
  }

  /**
   * metodo que crea y devuelve una instancia de la clase
   * @returns PrimeNumber
   */
  public static getPrimeNumberInstance(): PrimeNumber {
    if (!PrimeNumber.primeNumberInstance) {
      PrimeNumber.primeNumberInstance = new PrimeNumber();
    }
    return PrimeNumber.primeNumberInstance;
  }
  /**
   * metodo que devulve una lista con n numeros primos, para calcular los primos
   * comprueba que el numero evaluado no sea divisible por ningun primo anterior
   * y para ello se pone por defecto el primer primo que es 2
   * @param n number, cantidad de primeros numeros primos que se quiere obtener
   * @returns number[]
   */

  public nPrimos(n: number): number[] {
    if (n === 0) {
      return [];
    }
    this.listaPrimos.push(2);
    let esPrimo: boolean = true;
    let cont: number = 3;

    while (PrimeNumber.primeNumberInstance.listaPrimos.length <= n) {
      PrimeNumber.primeNumberInstance.listaPrimos.forEach((value) => {
        if ((cont % value) === 0) {
          esPrimo = false;
        }
      });
      if (esPrimo) {
        PrimeNumber.primeNumberInstance.listaPrimos.push(cont);
      }
      cont++;
      console.log(cont);
    }
    return PrimeNumber.primeNumberInstance.listaPrimos;
  }
  /*
  public nPrimosRango(inicioRango: number, finRango:number): number[] {
    let listaPrimosAntesRango: number[] = nPrimos(inicioRango);
    let cont: number = inicioRango;
    let esPrimo: boolean = true;

    while (cont <= finRango) {
      PrimeNumber.primeNumberInstance.listaPrimos.forEach((value) => {
        if ((cont % value) === 0) {
          esPrimo = false;
        }
      });
      if (esPrimo) {
        listaPrimosRango.push(cont);
      }
      cont++;
    }
    return listaPrimosRango;
  }*/
  /*
  [Symbol.iterator](): Iterator<number> {
      return this.listaPrimos.values();
    }
  */
}
