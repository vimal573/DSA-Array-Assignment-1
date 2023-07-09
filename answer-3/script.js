// 💡 **Q3.** Given a sorted array of distinct integers and a target value, return the index if the target is found. If not, return the index where it would be if it were inserted in order.
// You must write an algorithm with O(log n) runtime complexity.

// **Example 1:**
// Input: nums = [1,3,5,6], target = 5
// Output: 2

const searchInsert = (nums, target) => {
  let start = 0;
  let end = nums.length - 1;

  while (start < end) {
    const mid = Math.floor((start + end) / 2);

    if (target > nums[mid]) {
      start = mid + 1;
    } else {
      end = mid;
    }
  }
  return end;
};

console.log(searchInsert([1, 3, 5, 6], 6));

// TC: O(log n)
// SC: O(1)
