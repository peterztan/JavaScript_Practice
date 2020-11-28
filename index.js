// const CustomSLL = require("./CustomSLL.js");
// const CustomDLL = require("./CustomDLL.js");
// const MinHeap = require("./CustomMinHeap.js");
// const bubbleSort = require("./CustomBubbleSort.js");
const TestingArray = require("./CustomTestingArray.js");
const {customQuickSort, customPartition} = require("./CustomQuickSort.js");

// const seasons = new CustomSLL;

// const inputList = [
//     "Spring",
//     "Summer",
//     "Autumn",
//     "Winter"
// ];

// inputList.forEach(season => {
//     seasons.addToTail(season);
// })

// seasons.printList();

// seasons.addToHead("Bogus Season");

// seasons.printList();

// seasons.removeHead();
// seasons.printList();

// const subway = new CustomDLL;

// const opList = [
//     "Stop 1",
//     "Stop 2",
//     "Stop 3",
//     "Stop 4"
// ]

// opList.forEach(newStop => {
//     subway.addToHead(newStop);
// });

// subway.printList();

// subway.addToHead("Anacostia Station");
// subway.addToTail("Certified Bogus Station");
// subway.addToTail("Grand Central Station");

// subway.printList();

// subway.removeHead();
// subway.removeTail();
// subway.removeByData("Stop 4");

// subway.printList();

// const testHeap = new MinHeap;
// const valuesToAdd = [14, 15, 36, 28, 38, 30];

// valuesToAdd.forEach(value => {
//     testHeap.add(value);
// })

// console.log(testHeap);
// console.log(bubbleSort(valuesToAdd));

const randomGenArray = new TestingArray(100).initialize();
console.log(randomGenArray);
const sortedArray = customQuickSort(randomGenArray);
console.log(sortedArray);