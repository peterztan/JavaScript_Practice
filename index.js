const CustomSLL = require("./CustomSLL.js");
const CustomDLL = require("./CustomDLL.js");

const seasons = new CustomSLL;

const inputList = [
    "Spring",
    "Summer",
    "Autumn",
    "Winter"
];

inputList.forEach(season => {
    seasons.addToTail(season);
})

seasons.printList();

seasons.addToHead("Bogus Season");

seasons.printList();

seasons.removeHead();
seasons.printList();

const subway = new CustomDLL;

const opList = [
    "Stop 1",
    "Stop 2",
    "Stop 3",
    "Stop 4"
]

opList.forEach(newStop => {
    subway.addToHead(newStop);
});

subway.printList();

subway.addToHead("Anacostia Station");
subway.addToTail("Certified Bogus Station");
subway.addToTail("Grand Central Station");

subway.printList();

subway.removeHead();
subway.removeTail();
subway.removeByData("Stop 4");

subway.printList();