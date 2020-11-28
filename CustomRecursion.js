const recursiveFactorial = (n) => {
    if (n === 0) {
      //this is the base case: returns a value without self-call
      return 1;
    } else if (n > 0) {
      //this is the recursive case: acts and self-calls
      return n * recursiveFactorial(n - 1);
    }
  }
  
const iterativeFactorial = (n) => {
    result = 1;
    while(n > 0) {
        result *= n;
        n -= 1;
    }
    return result;
}
  
  
  
  
  
module.exports = {
    recursiveFactorial,
    iterativeFactorial
};