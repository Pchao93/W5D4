// Basecase when start === end, return start
//range(0,0) = [0]
//[range(2, 2) = [2]
//range(0, 2) = [0. 1. 2]
//range(2, 7) = [2, 3, 4, 5, 6, 7]

function range(start, end) {
  let straightForward = true;
  if (start === end) {
    return [end];
  }
  if (start < end) {
    return [start].concat(range(start + 1, end));
  } else {
    return [start].concat(range(start - 1, end));
  }
}

function sumRec(arr) {
  if (arr.length <= 1) {
    return arr[0] ? arr[0] : 0;
  }
  return arr[0] + sumRec(arr.slice(1));
}

function exponent(base, exp) {
  if (exp === 0) {
    return 1;
  }
  return base *  exponent(base, exp - 1);
}

function dumbExponent(base, exp) {
  if (exp === 0) {
    return 1;
  } else if (exp === 1) {
    return base;
  } else if (exp % 2 === 0) {
    return exponent(base, exp / 2) * exponent(base, exp / 2);
  } else {
    return base * (exponent(base, (exp - 1) / 2 ) * (exponent(base, (exp - 1) / 2 )));
  }
}

function fib(n) {
  if (n === 1 ) {
    return 1;
  } else if (n === 0) {
    return 0;
  }
  return fib(n-1) + fib(n-2);

}

function deeeeeeeeepDup(array) {
  const result = [];

  for (let i = 0; i < array.length; i++) {
    if (Array.isArray(array[i])) {
      result[i] = deeeeeeeeepDup(array[i]);
    } else {
      result[i] = array[i];
    }
  }
  return result;
}

// a = [
//   [1, 2, 3, 4, [[[]]]],
//   1,
//   3,
//   [3],
//   []
// ];

function bsearch(array, target) {

  const middle = Math.floor(array.length / 2);
  // console.log(middle);
  if (array[middle] === target) {
    return middle;
  } else if (array.length === 0) {
    return -1;
  } else if (array[middle] > target) {
    return bsearch(array.slice(0, middle), target);
  } else {
    return  middle + bsearch(array.slice(middle), target);
  }
}

// a = [1, 2, 3, 4, 5, 6, 7, 8, 9];

function mergesort(arr) {
  // return arr if length <= 1
  //break array down into halves
  //merge those halves
  if (arr.length <= 1) {
    return arr;
  }
  const middle = Math.floor(arr.length / 2);
  const left = arr.slice(0, middle);
  const right = arr.slice(middle);
  return merge(mergesort(left), mergesort(right));
}

function merge(arr1, arr2) {
  //takes two sorted arrays, and merges them into one sorted array
  // console.log("merge!");
  // console.log((!arr1.length === 0) && (!arr2.length === 0));

  const result = [];
  while (arr1.length > 0 && arr2.length > 0) {
    // console.log("merging!");
    if (arr1[0] > arr2[0]) {
      result.push(arr2.shift());
    } else {
      result.push(arr1.shift());
    }
  }
  return result.concat(arr1).concat(arr2);

}

// a = [9, 8, 7, 6, 5, 4, 3, 2, 1]



function subsets(arr) {

  if (arr.length === 0) {
    return [arr];
  }
  // } else if (arr.length === 1) {
  //   return [[], [1]];
  // }

  const lastEl = arr[arr.length - 1];

  const oldSubs = subsets(arr.slice(0, (arr.length - 1)));
  // console.log(oldSubs);
  // const newSubs = oldSubs.map(el => el += [lastEl]);
  const newSubs = oldSubs.map(el => {
    // console.log("dumb");
    // console.log(el.slice(0).concat([lastEl]));
    return el.slice(0).concat([lastEl]);
  });

  // console.log(newSubs);
  return oldSubs.concat(newSubs);
}

a = [1, 2, 3];
b = [];
c = [1];




//
