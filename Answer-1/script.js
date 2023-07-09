// **Q1.** Given an array of integers nums and an integer target, return indices of the two numbers such that they add up to target.
// You may assume that each input would have exactly one solution, and you may not use the same element twice.
// You can return the answer in any order.

// **Example:**
// Input: nums = [2,7,11,15], target = 9
// Output0 [0,1]

const findTwoSum = (nums, target) => {
  const numsMap = {};

  for (let i = 0; i <= nums.length; i++) {
    const currMapVal = numsMap[nums[i]];

    if (currMapVal >= 0) {
      return [currMapVal, i];
    } else {
      const numToFind = target - nums[i];
      numsMap[numToFind] = i;
    }
  }

  return null;
};

console.log(findTwoSum([2, 7, 11, 15], 9));

// TC: O(n)
// SC: O(1)
