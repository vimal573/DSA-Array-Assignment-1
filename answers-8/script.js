// **Q8.** You have a set of integers s, which originally contains all the numbers from 1 to n. Unfortunately, due to some error, one of the numbers in s got duplicated to another number in the set, which results in repetition of one number and loss of another number.

// You are given an integer array nums representing the data status of this set after the error.

// Find the number that occurs twice and the number that is missing and return them in the form of an array.

// **Example 1:**
// Input: nums = [1,2,2,4]
// Output: [2,3]

var findErrorNums = function (nums) {
  const n = nums.length;
  const totalSum = (n * (n + 1)) / 2;

  const numSet = new Set(nums);
  let setSum = 0;
  numSet.forEach(num => (setSum += num));

  const numSum = nums.reduce((curr, acc) => curr + acc);

  return [numSum - setSum, totalSum - setSum];
};

console.log(findErrorNums([1, 2, 2, 4]));


// TC: O(n)
// SC: O(1)