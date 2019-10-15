/*
Write a function that receives an arithmetic expression as a string. Some examples of valid expressions are:

[+, 23, -8, -67]
[-, 89, 5, -9, 16]
[x, 23, 22, -1, 0]
[+, [-, 1, 4], [+, 98, 3, -56], [x, 1, 6, 15]]

Your function should evaluate the given expression and return the resulting value. +, -, and x are the only operations you need to consider.

For example, the first expression [+, 23, -8, -67] asks us to sum the values 23, -8, and -67. Our function would return an answer of -52.

The second expression [-, 89, 5, -9, 16] asks us to take the first operand, 89, and subtract from it 5, -9, and then 16 for a result of 77.

The third expression [x, 23, 22, -1] asks us to multiply 23, 22, and -1. Our function would return an answer of -506.

The last expression [+, [-, 1, 4], [+, 98, 3, -56], [x, 1, 6, 15]] asks us to sum the result of the nested expressions. Once all of the nested expressions are evaluated, it becomes [+, -3, 45, 90] for a final answer of 132.
*/


function evaluateExpression (arr) {
    console.log(arr);
    //take ou the first operator of the array
    if(Array.isArray(arr)) {
        const operator = arr.shift();
        console.log(operator);
        switch(operator) {
            case '+': {
                return arr.reduce((a,b) => evaluateExpression(a) + evaluateExpression(b));
            }
            case '-': {
                return arr.reduce((a,b) => evaluateExpression(a) - evaluateExpression(b))
            }
            case 'x': {
                return arr.reduce((a,b) => evaluateExpression(a) * evaluateExpression(b), 1)
            }
        } 
    } else {
        return arr;
    }
}

//console.log(evaluateExpression(['+', 23, -8, -67]))

evaluateExpression(['+', ['-', 1, 4], ['+', 98, 3, -56], ['x', 1, 2 ,3]])