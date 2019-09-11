/*
Given an array of integers, return indices of the two numbers such that they add up to a specific target.

You may assume that each input would have exactly one solution, and you may not use the same element twice.
Given nums = [2, 7, 11, 15], target = 9,

Because nums[0] + nums[1] = 2 + 7 = 9,
return [0, 1].
*/

let twoSum = (nums, target)=> {
    let catche = new Map();
    for (i=0; i<nums.length; i++) {
        if (catche.has(target-nums[i])) {
            return [catche.get(target-nums[i]), i];
        } else {
            catche.set(nums[i], i);
        }
    }
    return [];
}

let nums= [1,2,3,4,5,6,7,78,8,8,8,8,9,9,9,2];
let target= 4;
twoSum(nums,target)