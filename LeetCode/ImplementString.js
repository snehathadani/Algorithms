/*
Return the index of the first occurrence of needle in haystack, or -1 if needle is not part of haystack.

Example 1:

Input: haystack = "hello", needle = "ll"
Output: 2

Example 2:

Input: haystack = "aaaaa", needle = "bba"
Output: -1
*/
let implementString = (haystack, needle) => {
    if (haystack === needle) {
        return 0;
    }
    for (i = 0; i < haystack.length - needle.length; i++) {
        let k = 0;
        if (haystack[i] === needle[k]) {
            k++;
        }
        if (k === needle.length) {
            return i;
        }
    }
    return -1;
}