class Lot {
  constructor(elems) {
    this.elems = elems;
  }

  getRandomElements(num) {
    let array = [];
    const exps = this.getExceptionIndexArray();
    const resultIndexes = Lot.getRandomIntegerArray(0, this.elems.length - 1, exps);

    for (let i = 0; i < resultIndexes.length; i++) {
      array.push(elems[resultIndexes[i]]);
    }
  }

  getExceptionIndexArray() {
    let exceptions = [];
    for (let i = 0; i < this.elems.length; i++) {
      if (this.elems[i].status == Status.excluded || this.elems[i].status == Status.marked) {
        exceptions.push(i);
      }
    }
    return exceptions;
  }

  static getRandomInteger(min, max) {
    return Math.random() * (max - min) + min;
  }

  static getRandomIntegerArray(min, max, amount, exceptions) {
    if (max - min < amount - exceptions.length) {
      throw new Error("与えられた値が不正です");
    }
    
    let array = [];
    for (let i = 0; i < amount; i++) {
      let n = Lot.getRandomInteger(min, max);
      if (!exceptions.includes(n) && !array.includes(n)) {
        array.push(n);
      } else {
        i--;
      }
    }

    return array;
  }
}
