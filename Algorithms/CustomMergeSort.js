const CustomMergeSort = inputArray => {
    const length = inputArray.length;
    if (length === 1) {
        return inputArray;
    }

    const mid = Math.floor(length/2);
    const leftArray = inputArray.slice(0, mid);
    const rightArray = inputArray.slice(mid, length);

    return CustomMerge(CustomMergeSort(leftArray), CustomMergeSort(rightArray));
}

const CustomMerge = (leftArray, rightArray) => {
    const sortedArray = [];
    while (leftArray.length > 0 && rightArray.length > 0) {
        leftArray[0] < rightArray[0]
        ? sortedArray.push(leftArray[0]) && leftArray.shift()
        : sortedArray.push(rightArray[0]) && rightArray.shift();
    }
    return sortedArray.concat(leftArray).concat(rightArray);
}

module.exports = CustomMergeSort;