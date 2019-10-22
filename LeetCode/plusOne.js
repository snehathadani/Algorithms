/*
Given a non-empty array of digits representing a non-negative integer, plus one to the integer.

The digits are stored such that the most significant digit is at the head of the list, and each element in the array contain a single digit.

You may assume the integer does not contain any leading zero, except the number 0 itself.

Example 1:

Input: [1,2,3]
Output: [1,2,4]
Explanation: The array represents the integer 123.

Example 2:

Input: [4,3,2,1]
Output: [4,3,2,2]
Explanation: The array represents the integer 4321.

*/
var plusOne = function(digits){
    let result = [];
    let carry = 1;
    for(i=digits.length-1; i>=0; i--){
        let newDigit = digits[i] + carry;
        if(newDigit>=10){
            result.unshift(newDigit-10);
            carry=1;
        } else{
            result.unshift(newDigit);
            carry=0;
        }
        
    }
    //this is for the case 999+1 after unshifting 000 place 1 that is a carry on the left
    if(carry===1){
        result.unshift(1);
    }
    return result;
}