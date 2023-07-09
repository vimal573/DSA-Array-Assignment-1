// 💡 **Q7.** Given an integer array nums, move all 0's to the end of it while maintaining the relative order of the nonzero elements.

// Note that you must do this in-place without making a copy of the array.

// **Example 1:**
// Input: nums = [0,1,0,3,12]
// Output: [1,3,12,0,0]

const moveZeroes = nums => {
  let count = 0;

  //   if (nums.length === 1) return nums;

  for (let i = 0; i < nums.length; i++) {
    if (nums[i] !== 0) {
      nums[count] = nums[i];
      count++;
    }
  }

  for (let i = count; i < nums.length; i++) {
    nums[i] = 0;
  }

  return nums;
};

console.log(moveZeroes([1, 0]));

// TC: O(n)
// SC: O(1)
