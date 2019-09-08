//O(n^2) for inversion
function inversion(nums){
    let result= 0;
    for(i=0; i<nums.length; i++){
        for (j= i+1; j<nums.length-1; j++){
            if(nums[i]>nums[j]) {
                result++;
                
            } 

        }
    }
    return result;
}