/*
The count-and-say sequence is the sequence of integers with the first five terms as following:

1.     1
2.     11
3.     21
4.     1211
5.     111221

1 is read off as "one 1" or 11.
11 is read off as "two 1s" or 21.
21 is read off as "one 2, then one 1" or 1211.

Given an integer n where 1 ≤ n ≤ 30, generate the nth term of the count-and-say sequence.

Note: Each term of the sequence of integers will be represented as a string.

 

Example 1:

Input: 1
Output: "1"

Example 2:

Input: 4
Output: "1211"

*/
//first create the 1st line
//after getting the first line '1' second line should count the digit and keep track of that counter
//if the digit is the same then counter must be increased by 1
//if the digit is different then change the counter and addit preciding the numberif
var countAndSay = function (n) {
    let currentLine = '1';
    if (n === 1) {
        return currentLine;
    }

    for (i = 1; i < n; i++) {
        let character = currentLine[0];
        let count = 0;
        let newCurrentLine = '';
        //go over all the digits on the current line to get the next line
        for (j = 0; j <= currentLine.length; j++) {
            //for the 1st line, character (1) === cuurentLine[0](1) so count =1. hence we get the 2nd line 11
            //for the 3rd line, character(1)=== currenbtline[0](1) & currenLine[1](1) so count for two 1s = 21
            if (character === currentLine[j]) {
                count++;
            } else {
                //to create 4th line: newCurrentLine ('')+ count(1) + character (2) & newCurrentLine('')+count(1)+character(1)=1211
                newCurrentLine = newCurrentLine + count + character;
                count = 1;
                character = currentLine[j]
            }
        }
        newCurrentLine = newCurrentLine + count + currentLine[j - 1];
        currentLine = newCurrentLine;
    }
    return currentLine;

}