const swap = require("./CustomSwap");

const customQuickSort = (array, leftBound = 0, rightBound = array.length - 1) => {
    if (leftBound < rightBound) {
        const pivotIndex = customPartition(array, leftBound, rightBound);
        customQuickSort(array, leftBound, pivotIndex - 1);
        customQuickSort(array, pivotIndex, rightBound);
    }
    return array;
}

//returns the index position for the pivot
const customPartition = (array, leftIndex, rightIndex) => {
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
}

module.exports = {
    customPartition,
    customQuickSort
};

const quizArray = [11, 0, 22, 34, 33];

console.log(customPartition(quizArray, 0, 2));