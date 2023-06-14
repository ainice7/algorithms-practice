var MyQueue = function () {
  this.firstStack = [];
  this.secondStack = [];
};

/**
 * @param {number} x
 * @return {void}
 */
MyQueue.prototype.push = function (x) {
  this.firstStack.push(x);
};

/**
 * @return {number}
 */
MyQueue.prototype.pop = function () {
  if (this.secondStack.length === 0) {
    while (this.firstStack.length) {
      this.secondStack.push(this.firstStack.pop())
    }
  }
  return this.secondStack.pop();
};

/**
 * @return {number}
 */
MyQueue.prototype.peek = function () {
  if (this.secondStack.length === 0) {
    while (this.firstStack.length) {
      this.secondStack.push(this.firstStack.pop())
    }
  }
  return this.secondStack[this.secondStack.length - 1] || 'Queue is empty';
};

/**
 * @return {boolean}
 */
MyQueue.prototype.empty = function () {
  return !this.firstStack.length && !this.secondStack.length
};



var obj = new MyQueue()
obj.push(1)
obj.push(2)
obj.push(3)
var param_2 = obj.pop()
var param_3 = obj.peek()
var param_4 = obj.empty()
