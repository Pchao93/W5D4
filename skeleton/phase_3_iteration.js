
Array.prototype.bubbleSort = function () {

  let sorted = false;
  const array = this.slice(0);

  while (!sorted) {
    sorted = true;
    // loop through from 0 to length
    // each element compare to the next
    // perform the swap, change flag
    // repeat as needed
    for (let i = 0; i < array.length - 1; i++) {

      if (array[i] > array[i + 1]) {
        let temp1 = array[i];
        array[i] = array[i + 1];
        array[i + 1] = temp1;
        sorted = false;
      }
    }
  }
  return array;
};

a = [9, 8, 7, 6, 5, 4, 3, 2, 1];

String.prototype.substrings = function() {
  //treat this as it if was going to be a string
  //#nested loops
  let subs = [];

  for (let i = 0; i < this.length; i++) {
    for (let j = i + 1; j < this.length + 1; j++) {
      subs.push(this.slice(i, j));
    }
  }
  return subs;
};





// "dfg";
