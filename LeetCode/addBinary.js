/*
Given two binary strings, return their sum (also a binary string).

The input strings are both non-empty and contains only characters 1 or 0.

Example 1:

Input: a = "11", b = "1"
Output: "100"

Example 2:

Input: a = "1010", b = "1011"
Output: "10101"

*/
*/
var addBinary = function(a, b) {
    a = a.split('')
    b = b.split('')
    
    //make a and b of same length
    if (a.length > b.length) {
        diff = a.length - b. length
        for (i = 0; i < diff; i++) {
            b.unshift('0')
        }
    } else {
        diff = b.length - a.length
        for (i = 0; i < diff; i++) {
            a.unshift('0')
        }
    }
     carry = 0;
     result = []
     for( i = a.length-1; i >= 0; i--) {
         aDigit = parseInt(a[i], 10)
         bDigit = parseInt(b[i], 10)
         newDigit = aDigit + bDigit + carry
         if(newDigit >= 2) {
             result.unshift((newDigit % 2).toString())
             carry = 1
         } else {
             result.unshift(newDigit.toString())
             carry = 0
         }
     }
     //if there is a carry when all digits are done add a 1 at the end
     if(carry === 1) {
         result.unshift('1')
     }
     return result.join('')   
};