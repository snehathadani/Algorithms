/*
Determine whether an integer is a palindrome. An integer is a palindrome when it reads the same backward as forward.
Example 1:

Input: 121
Output: true

Example 2:

Input: -121
Output: false
Explanation: From left to right, it reads -121. From right to left, it becomes 121-. Therefore it is not a palindrome.

Example 3:

Input: 10
Output: false
Explanation: Reads 01 from right to left. Therefore it is not a palindrome.

*/
 let isPalindrome= (x)=> {
    let result = 0;
    let originalNum= x;
     if (x<0) {
         return false;
     } 

         while(x>0) {
         let lastDigit = x%10;
         x= Math.floor(x/10);
         result= result *10+lastDigit
     } return result === originalNum;
 
}
 let x= 101;
 let y =987;
 isPalindrome(x);