// 1. Factorial of a Number
// Write a recursive function to compute the factorial of a given number n.
// Factorial of n (denoted as n!) is defined as: n! = n * (n-1) * (n-2) * ... * 1
// Base case: 0! = 1
//
// Example Test Cases:
// console.log(factorial(5)); // Output: 120
// console.log(factorial(0)); // Output: 1

const factorial = (n: number, memo: Record<number, number> = {}): number => {
  if (n === 0) return 1;
  if (memo[n]) return memo[n];
  return (memo[n] = n * factorial(n - 1, memo));
};

// console.log(factorial(5)); // Output: 120
// console.log(factorial(0)); // Output: 1

// 2. Sum of an Array
// Write a recursive function to calculate the sum of all numbers in an array.
//
// Example Test Cases:
// console.log(sumArray([1, 2, 3, 4])); // Output: 10
// console.log(sumArray([])); // Output: 0
// console.log(sumArray([5])); // Output: 5

function sumArray(arr: number[], memo = 0): number {
  if (!arr.length) {
    return memo;
  } else {
    const lastElement = arr.pop();
    if (lastElement !== undefined) {
      memo += lastElement;
      return sumArray(arr, memo);
    }
  }
  return memo;
}

// console.log(sumArray([1, 2, 3, 4])); // Output: 10
// console.log(sumArray([])); // Output: 0
// console.log(sumArray([5])); // Output: 5

// 3. Reverse a String
// Write a recursive function that reverses a given string.
//
// Example Test Cases:
// console.log(reverseString("hello")); // Output: "olleh"
// console.log(reverseString("racecar")); // Output: "racecar"
// console.log(reverseString("abc")); // Output: "cba"

function reverseString(str: string, memo = "") {
  if (!str.length) {
    return memo;
  } else {
    memo += str[str.length - 1];
    console.log(memo);
    return reverseString(str.slice(0, -1), memo);
  }
}

// console.log(reverseString("hello")); // Output: "olleh"
// console.log(reverseString("racecar")); // Output: "racecar"
// console.log(reverseString("abc")); // Output: "cba"

// 4. Check if a String is a Palindrome
// Write a recursive function to check if a string is a palindrome (reads the same forward and backward).
//
// Example Test Cases:
// console.log(isPalindrome("racecar")); // Output: true
// console.log(isPalindrome("hello"));   // Output: false
// console.log(isPalindrome("a"));       // Output: true

const checkPalindrome = (str: string, left: number, right: number) => {
  if (left >= right) return true;
  if (str[left] !== str[right]) return false;
  return checkPalindrome(str, left + 1, right - 1);
};

function isPalindrome(str: string) {
  const stripStr = str.replace(/[^a-z0-9]/gi, "").toLowerCase();
  return checkPalindrome(stripStr, 0, stripStr.length - 1);
}

// console.log(isPalindrome("racecar")); // Output: true
// console.log(isPalindrome("hello")); // Output: false
// console.log(isPalindrome("a")); // Output: true
// console.log(isPalindrome("A man, a plan, a canal, Panama")); // output true

// 5. Compute the N-th Fibonacci Number
// Write a recursive function to compute the nth Fibonacci number.
// The Fibonacci sequence is defined as:
// F(0) = 0, F(1) = 1, F(n) = F(n-1) + F(n-2)
//
// Example Test Cases:
// console.log(fibonacci(6)); // Output: 8
// console.log(fibonacci(0)); // Output: 0
// console.log(fibonacci(1)); // Output: 1

function fibonacci(n: number, memo: Record<number, number> = {}) {
  if (n === 0) return 0;
  if (n === 1) return 1;
  if (memo[n]) return memo[n];

  memo[n] = fibonacci(n - 1, memo) + fibonacci(n - 2, memo);
  return memo[n];
}

// console.log(fibonacci(6)); // Output: 8
// console.log(fibonacci(0)); // Output: 0
// console.log(fibonacci(1)); // Output: 1

// 6. Flatten a Nested Array
// Write a recursive function to flatten an array that contains nested arrays into a single-level array.
//
// Example Test Cases:
// console.log(flattenArray([1, [2, [3, 4], 5], 6])); // Output: [1, 2, 3, 4, 5, 6]
// console.log(flattenArray([1, [2, [3, [4, [5]]]]])); // Output: [1, 2, 3, 4, 5]
// console.log(flattenArray([])); // Output: []
type NestedArray = number | NestedArray[];
function flattenArray(arr: NestedArray, memo: number[] = []) {
  if (!Array.isArray(arr)) {
    memo.push(arr);
    return memo;
  }

  if (!arr.length) {
    return memo;
  }

  const num = arr.shift() as number;
  if (Array.isArray(num)) {
    flattenArray(num, memo);
  } else {
    memo.push(num);
  }
  return flattenArray(arr, memo);
}

// console.log(flattenArray([1, [2, [3, 4], 5], 6])); // Output: [1, 2, 3, 4, 5, 6]
// console.log(flattenArray([1, [2, [3, [4, [5]]]]])); // Output: [1, 2, 3, 4, 5]
// console.log(flattenArray([])); // Output: []

// 7. Count the Number of Occurrences of a Value in an Array
// Write a recursive function that counts how many times a given value appears in an array.
//
// Example Test Cases:
// console.log(countOccurrences([1, 2, 3, 4, 2, 2, 5], 2)); // Output: 3
// console.log(countOccurrences([1, 1, 1, 1, 1], 1)); // Output: 5
// console.log(countOccurrences([1, 2, 3, 4, 5], 6)); // Output: 0

function countOccurrences(arr: number[], value: number, memo = 0) {
  if (!arr.length) return memo;

  const [firstEl, ...rest] = arr;
  if (firstEl === value) {
    memo++;
  }

  return countOccurrences(rest, value, memo);
}

// console.log(countOccurrences([1, 2, 3, 4, 2, 2, 5], 2)); // Output: 3
// console.log(countOccurrences([1, 1, 1, 1, 1], 1)); // Output: 5
// console.log(countOccurrences([1, 2, 3, 4, 5], 6)); // Output: 0

// 8. Find the Maximum Number in an Array
// Write a recursive function that finds and returns the maximum value in an array.
//
// Example Test Cases:
// console.log(findMax([1, 5, 3, 9, 2])); // Output: 9
// console.log(findMax([7, 7, 7, 7])); // Output: 7
// console.log(findMax([-1, -2, -3, -4])); // Output: -1

function findMax(arr: number[], memo = -Infinity) {
  if (!arr.length) return memo;

  const [num, ...rest] = arr;
  if (num > memo) memo = arr[0];

  return findMax(rest, memo);
}

console.log(findMax([1, 5, 3, 9, 2])); // Output: 9
console.log(findMax([7, 7, 7, 7])); // Output: 7
console.log(findMax([-1, -2, -3, -4])); // Output: -1
