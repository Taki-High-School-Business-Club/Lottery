class Lot {
  constructor(elems) {
    this.elems = elems;
  }

  getRandomElement(num) {
    
  }

  getExceptions() {
    let exceptions = new Array();
    for (let i = 0; i < elems.length; i++) {
      if (elems[i].status == Status.excluded || elems[i].status == Status.marked) {
        exceptions.push(elems[i]);
      }
    }
    return exceptions;
  }

  static getRandomInteger(min, max) {
    return Math.random() * (max - min) + min;
  }

  static getRandomIntegerArray(min, max, amount, exception) {
    if (max - min < amount - exception.length) {
      throw new Error("与えられた値が不正です");
    }
    
    let array = new Array();
    for (let i = 0; i < amount; i++) {
      let n = Lot.getRandomInteger(min, max);
      if (!exception.includes(n) && !array.includes(n)) {
        array.push(n);
      } else {
        i--;
      }
    }

    return array;
  }
}
