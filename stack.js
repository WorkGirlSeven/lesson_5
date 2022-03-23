class Helper {
  constructor(value) {
    this.value = value;
    this.nextValue = null;
  }
}

class Stack {
  constructor(maxSize = 10) {
    this.top = null;
    this.size = 0;
    this.maxSize = maxSize;
    this.isCorrect()
  }
  
  isCorrect() {
    const isCorrectValue = Number.isFinite(this.maxSize) && this.maxSize > 0;
    
    if (!isCorrectValue) {
      throw new Error('Введите корректное число!')
    }
  }
  
  push(elem) {
    if (this.size === this.maxSize) {
      throw new Error('Стек переполнен!')
    }
    
    let helper = new Helper(elem);
    helper.nextValue = this.top;
    this.top = helper;
    this.size++;
  }
  
  pop() {
    if (this.isEmpty()) {
      throw new Error('Стек пустой!')
    }
    
    let topElement = this.top.value;
    this.top = this.top.nextValue;
    this.size--;
    
    return topElement;
  }
  
  peek() {
    if (!this.size) {
      return null;
    }
    
    return this.top.value;
  }
  
  isEmpty() {
    return !this.size;
  };
  
  toArray() {
    let arr = [];
    let current = this.top;
    
    while (current) {
      arr = [...arr, current];
      current = current.nextValue;
    }
    
    return arr;
  }
  
  static fromIterable(iterable) {
    if (typeof iterable[Symbol.iterator] !== 'function') {
      throw new Error('Данный объект не итерируемый!')
    }
    
    let stack = new Stack(iterable.size);
    
    for (let item of iterable) {
      stack.push(item);
    }
    
    return stack;
  }
}

module.exports = {Stack};

