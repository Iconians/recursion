// 9. Three-Sum Problem
// Write a recursive function to find all unique triplets in an array that sum to zero.
// You must return an array of arrays where each subarray contains a valid triplet.
//
// Example Test Cases:
// console.log(threeSum([-1, 0, 1, 2, -1, -4]));
// Expected Output: [[-1, -1, 2], [-1, 0, 1]]
// console.log(threeSum([0, 1, 1])); // Output: []
// console.log(threeSum([0, 0, 0])); // Output: [[0, 0, 0]]
// this is a crazy function was trying to figure out to pair it down a bit without affecting the time and space
// complexity
// ist function
function threeSum(arr: number[]) {
  arr.sort((a, b) => a - b);
  // start of third function
  const twoSumRecursive = (
    arr: number[],
    fixedIdx: number,
    left: number,
    right: number,
    memo: number[][]
  ) => {
    if (left >= right) {
      return;
    }
    let currentSum = arr[fixedIdx] + arr[left] + arr[right];

    if (currentSum === 0) {
      memo.push([arr[fixedIdx], arr[left], arr[right]]);
      left += 1;
      right -= 1;

      while (left < right && arr[left] === arr[left - 1]) {
        left += 1;
      }

      while (left < right && arr[right] === arr[right + 1]) {
        right -= 1;
      }
      twoSumRecursive(arr, fixedIdx, left, right, memo);
    } else if (currentSum < 0) {
      twoSumRecursive(arr, fixedIdx, left + 1, right, memo);
    } else {
      twoSumRecursive(arr, fixedIdx, left, right - 1, memo);
    }
  };
  // start of second function
  const findTriplets = (arr: number[], index: number, memo: number[][]) => {
    if (index >= arr.length - 2) {
      return memo;
    }

    if (index === 0 || arr[index] !== arr[index - 1]) {
      twoSumRecursive(arr, index, index + 1, arr.length - 1, memo);
    }

    findTriplets(arr, index + 1, memo);
    return memo;
  };

  return findTriplets(arr, 0, []);
}

console.log(threeSum([-1, 0, 1, 2, -1, -4]));
// console.log(threeSum([0, 1, 1])); // Output: []
// console.log(threeSum([0, 0, 0])); // Output: [[0, 0, 0]]

// 10. Rock, Paper, Scissors (Generate All Possible Outcomes)
// Write a recursive function that generates all possible outcomes of a game of Rock, Paper, Scissors for n rounds.
// Each round has three choices: "rock", "paper", or "scissors".
// The function should return an array of arrays, where each inner array represents a sequence of moves.
//
// Example Test Cases:
// console.log(rockPaperScissors(2));
// Expected Output: [
//   ["rock", "rock"], ["rock", "paper"], ["rock", "scissors"],
//   ["paper", "rock"], ["paper", "paper"], ["paper", "scissors"],
//   ["scissors", "rock"], ["scissors", "paper"], ["scissors", "scissors"]
// ]
// console.log(rockPaperScissors(1));
// Expected Output: [["rock"], ["paper"], ["scissors"]]

function rockPaperScissors(
  n: number,
  memo: string[][] = [["rock"], ["paper"], ["scissors"]]
) {
  let arr: string[][] = [];
  const choices = ["rock", "paper", "scissors"];
  if (n === 1) {
    return memo;
  }

  for (let i = 0; i < memo.length; i++) {
    for (let choice of choices) {
      arr.push([...memo[i], choice]);
    }
  }
  memo = arr;
  return rockPaperScissors(n - 1, memo);
}

// console.log(rockPaperScissors(1));
// console.log(rockPaperScissors(2));
