//   💡 **Q6.** Given an integer array nums, return true if any value appears at
//   least twice in the array, and return false if every element is distinct.
//   **Example 1:** Input: nums = [1,2,3,1]

const containsDuplicate = nums => {
  const numsSort = nums.sort((a, b) => a - b);

  for (let i = 1; i < numsSort.length; i++) {
    if (numsSort[i] === numsSort[i - 1]) {
      return true;
    } else {
      return false;
    }
  }
};

console.log(containsDuplicate([1, 2, 3, 1]));

// TC: O(logn)
// SC: O(1)
