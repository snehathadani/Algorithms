/* Given a 32-bit signed integer, reverse digits of an integer.
Example 1:

Input: 123
Output: 321

Example 2:

Input: -123
Output: -321

Example 3:

Input: 120
Output: 21

*/
let reverse = (x)=> {
    let result = [];
    let isNegative = false;
    if(x<0) {
        x= x*-1;
        isNegative=true;
    }
    while(x>0) {
        const lastDigit = x%10;
        x= Math.floor(x/10);
        result= result*10 + lastDigit;
    }
    if(isNegative) {
        result= result*-1;
    }
    return result;
}

let x= 6789
reverse(x);