/**
 * Recursion has two fundamental aspects: the base case and the recursive step.

  When using iteration, we rely on a counting variable and a boolean condition.
  For example, when iterating through the values in a list,
  we would increment the counting variable until it exceeded the length of the dataset.

  Recursive functions have a similar concept, which we call the base case.
  The base case dictates whether the function will recurse, or call itself. Without a base case,
  it’s the iterative equivalent to writing an infinite loop.
 *
 */

const recursiveFactorial = n => {
  if (n === 0) {
    //this is the base case: returns a value without self-call
    return 1;
  } else if (n > 0) {
    //this is the recursive case: acts and self-calls
    return n * recursiveFactorial(n - 1);
  }
};

const iterativeFactorial = n => {
  result = 1;
  while (n > 0) {
    result *= n;
    n -= 1;
  }
  return result;
};

module.exports = {
  recursiveFactorial,
  iterativeFactorial,
};
