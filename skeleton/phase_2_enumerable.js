Array.prototype.myEach = function (callback) {

  for (let i = 0; i < this.length; i++) {
    callback(this[i]);
  }
};

Array.prototype.myMap = function (callback) {
  const result = [];
  for (let i = 0; i < this.length; i++) {
    result[i] = callback(this[i]);
  }
  return result;
};

Array.prototype.myReduce = function (callback, start) {
  let sum = start;
  let i = 0;
  if (start === undefined) {
    sum = this[0];
    i++;
  }
  while (i < this.length) {
    sum = callback(sum, this[i]);
    i ++;
  }
  return sum;
};

const cb = el => el * 2;

const cb2 = (acc, el) => acc + el;
