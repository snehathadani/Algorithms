/*
Given an integer array nums, find the contiguous subarray (containing at least one number) which has the largest sum and return its sum.

Example:

Input: [-2,1,-3,4,-1,2,1,-5,4],
Output: 6
Explanation: [4,-1,2,1] has the largest sum = 6.

*/
var maxSubArray = function(nums) {
    let maxSum= nums[0];
    let maxsoFar= maxSum;
    
    for (i=0; i<nums.length; i++) {
       maxSum= Math.max(maxSum + nums[i], nums[i]);
        maxsoFar= Math.max(maxSum, maxsoFar);
    }
    return maxsoFar;

};

let nums= [1];
maxSubArray(nums);