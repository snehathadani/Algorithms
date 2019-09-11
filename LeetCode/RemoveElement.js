/*
Given an array nums and a value val, remove all instances of that value in-place and return the new length.

Do not allocate extra space for another array, you must do this by modifying the input array in-place with O(1) extra memory.

The order of elements can be changed. It doesn't matter what you leave beyond the new length.
Given nums = [3,2,2,3], val = 3,
our function should return length = 2, with the first two elements of nums being 2.
It doesn't matter what you leave beyond the returned length.
*/

let removeElement = (nums, val) => {
    let inserAt= 0;
    for (i=0; i<nums.length; i++) {
        if(nums[i] !== val) {
            nums[inserAt] = nums;
            inserAt++
        }
    }
    return inserAt;
}

let nums = [3,2,2,3];
let val = 3;
removeElement(nums,val);