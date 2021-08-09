const middle = function(array) {
  let newArray = [];
  if (array.length >= 3) {
    if (array.length % 2 === 0) {
      let mid1 = array.length / 2;
      let mid2 = mid1 - 1;
      newArray.push(array[mid2], array[mid1]);
    } else {
      let midIndex = (array.length - 1) / 2;
      newArray.push(array[midIndex]);
    }
  }
  return newArray;
};

module.exports = middle;

/*
Mid index for odd number of elements:
3 elements = index 1
5 elements = index 2
7 elements = index 3
9 elements = index 4
11 elements = index 5
13 elements = index 6
15 elements = index 7

Right number = (left number - 1) / 2

Mid indexes for even number of elements:
4 elements = 1, 2
6 elements = 2, 3
8 elements = 3, 4
10 elements = 4, 5
12 elements = 5, 6
14 elements = 6, 7

One index is length/2, other is length/2 - 1
*/