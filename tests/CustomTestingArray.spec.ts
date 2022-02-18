class TestingArray {
  constructor(size) {
    this.size = size;
  }

  initialize() {
    const randomGenArray = [];
    while (randomGenArray.length < this.size) {
      const randomNumber = Math.floor(Math.random() * this.size);
      randomGenArray.push(randomNumber);
    }
    return randomGenArray;
  }
}

module.exports = TestingArray;
