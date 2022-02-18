const swap = require('./CustomSwap');

const quickSort = (array, leftBound = 0, rightBound = array.length - 1) => {
  if (leftBound < rightBound) {
    const pivotIndex = partition(array, leftBound, rightBound);
    quickSort(array, leftBound, pivotIndex - 1);
    quickSort(array, pivotIndex, rightBound);
  }
  return array;
};

//returns the index position for the pivot
const partition = (array, leftIndex, rightIndex) => {
  const pivot = array[Math.floor((rightIndex + leftIndex) / 2)];

  while (leftIndex <= rightIndex) {
    //moves pointer towards pivot from the left
    while (array[leftIndex] < pivot) {
      leftIndex++;
    }
    //moves pointer towards pivot from the right
    while (array[rightIndex] > pivot) {
      rightIndex--;
    }
    if (leftIndex <= rightIndex) {
      swap(array, leftIndex, rightIndex);
      leftIndex++;
      rightIndex--;
    }
  }
  return leftIndex;
};

module.exports = {
  partition,
  quickSort,
};
