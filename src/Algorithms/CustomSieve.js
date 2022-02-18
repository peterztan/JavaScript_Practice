/**
 * Sieve of Eratosthenes:
 * This algorithm provides a set of steps for finding all prime numbers up to a given limit.
 * The sieve first assumes that all numbers from {2 ... n} are prime numbers, then go through and mark
 * them as non-prime numbers.
 *
 * How it works:
 * 1. Creates a sorted list of all integers from 2 to n.
 * 2. Begins at the smallest number (2).
 * 3. Mark all multiples of 2 up to n as non-prime.
 * 4. Move to the next non-marked number and repeat steps 2 and 3 until the whole list has been covered.
 *
 * Run Time Complexity: O(n log(log n));
 */

const sieveOfEratosthenes = limit => {
  // Handle edge cases
  if (limit <= 1) {
    return [];
  }
  // Create the output
  const output = new Array(limit + 1).fill(true);
  // Mark 0 and 1 as non-prime
  output[0] = false;
  output[1] = false;

  // Iterate up to the square root of the limit
  for (let i = 2; i < Math.pow(limit, 0.5); i++) {
    if (output[i] === true) {
      // Mark all multiples of i as non-prime
      for (let j = Math.pow(i, 2); j <= limit; j = j + i) {
        output[j] = false;
      }
    }
  }

  // Remove non-prime numbers
  return output.reduce((primes, current, index) => {
    if (current) {
      primes.push(index);
    }
    return primes;
  }, []);
};
