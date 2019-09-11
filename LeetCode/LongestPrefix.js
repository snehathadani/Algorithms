/*
Write a function to find the longest common prefix string amongst an array of strings.

If there is no common prefix, return an empty string "".
Example 1:

Input: ["flower","flow","flight"]
Output: "fl"

Example 2:

Input: ["dog","racecar","car"]
Output: ""
Explanation: There is no common prefix among the input strings.

*/
let longestCommonPrefix = (strs) =>{
    let prefix = "";
    if (strs.length === 0) {
        return prefix;
    } 
    for (i=0; i<strs[0].length; i++) {
        let character = strs[0][i];
        for (j=0; j<strs.length; j++) {
            if(strs[j][i] !== character) {
                return prefix;
                console.log(prefix);
            } 
        }
            prefix= prefix + character;
            console.log(prefix);
        
    }
    return prefix;
    console.log(prefix);
}
let strs= ["deog","deacecar","decar"]
longestCommonPrefix(strs);
