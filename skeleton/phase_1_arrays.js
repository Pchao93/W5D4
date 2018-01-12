// console.log("hello world!");

// myuniq

// Array.myUniq = (array) => {
//   const result = {};
//
//   array.forEach((el) => {
//     result[el] = 1;
//   });
//
//   return Object.keys(result);
//
// };

// a = [1, 2, 3, 4, 1, 2, 1, 2];


//
Array.prototype.myUniq = function() {
  const unique = {};

  console.log(this);
  for (let i = 0; i < this.length; i++) {
    unique[this[i]] = 1;
  }
  return Object.keys(unique).map(el => el/1 );
};


Array.prototype.uniq = function() {
  let uniqueArray = [];
  console.log(this);
  for (let i = 0; i < this.length; i++) {
    if (uniqueArray.indexOf(this[i]) === -1) {
      uniqueArray.push(this[i]);
    }
  }

  return uniqueArray;
};

// array.each_with_index do |el, idx|
//   array[1..-1].each_with_index do |el2, idx2|
//
//   end
// end

Array.prototype.twoSum = function() {
  const pairs = [];
  const seenNums = {};
  for (let i = 0; i < this.length; i++) {
    let target = 0 - this[i];
    if (seenNums[target] || seenNums[target] === 0) {
       pairs.push([seenNums[target], i]);
    }
    seenNums[this[i]] = i;
  }
  return pairs;
};

let a = [-1, 1, 0, 3, 4, -3, 34534543, 0];

let matrix = [
  [1, 2, 3],
  [5, 6, 7],
  [2, 4, 6],
];

Array.prototype.transpose = function () {
  const transposition = [];

  //for each column in the orginal matrix
  for (let i = 0; i < this[0].length; i++ ) {
    const newRow = [];
    //we want to turn that column into a row
    for (let j = 0; j < this.length; j++) {
    // ex. row 1 of the result will be made of the elements of column 1
    // row 1 result = c1 of r1 input, c1 of r2 input, c1 of r3 input
      newRow.push(this[j][i]);
    }
    transposition.push(newRow);
  }

  return transposition;
};
