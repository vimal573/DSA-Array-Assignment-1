// 💡 **Q3.** Given a sorted array of distinct integers and a target value, return the index if the target is found. If not, return the index where it would be if it were inserted in order.
// You must write an algorithm with O(log n) runtime complexity.

// **Example 1:**
// Input: nums = [1,3,5,6], target = 5
// Output: 2

const searchInsert = (nums, target) => {
  let start = 0;
  let end = nums.length;

  while (start <= end) {
    let mid = (start + end) / 2;

    if (nums[mid] === target) {
      return mid;
    } else if (target > nums[mid]) {
      start = mid + 1;
    } else {
      end = mid - 1;
    }

    return end;
  }
};

console.log(searchInsert([1, 3, 5, 6], 5));

// TC: O(log n)
// SC: O(1)
