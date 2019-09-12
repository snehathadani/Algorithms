/* Given a sorted array and a target value, return the index if the target is found. If not, return the index where it would be if it were inserted in order.

You may assume no duplicates in the array.

Example 1:

Input: [1,3,5,6], 5
Output: 2

Example 2:

Input: [1,3,5,6], 2
Output: 1

Example 3:

Input: [1,3,5,6], 7
Output: 4
 */
var searchHelper = function (nums, left, right, target) {
    if (left === right) {
        if (target <= nums[left]) {// target is smaller than 0
            return left;} // return 0
        return left + 1; //0+1
    }
    mid = Math.floor((left + right) / 2);
    if (target === nums[mid]) {
        return mid;
    }
    if (target < nums[mid]) {
        return searchHelper(nums, 0, mid, target)
    }
    return searchHelper(nums, mid + 1, right, target)

}
var searchInsert = function (nums, target) {
    if (target < nums[0]) { //if the element is smaller than the smallest element it must be inserted at index 0
        return 0;
    }

    if (target > nums[nums.length - 1]) { //if the element is larger than the largest element it must be inserted at the index length
        return nums.length;
    }

    return searchHelper(nums, 0, nums.length - 1, target) //otherwise its somewhere in the middle so look for it

};
let nums = [1, 3, 5, 6];
let target = 5;
searchInsert(nums, target);