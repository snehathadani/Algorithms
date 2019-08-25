//write a function that takes a string as input.The string can contain four types of brackets {}, [], (), ||. Your function should retrun a boolean indicating whether or not the string is balanced
//function balancedBrackets(string) 
//the test I am failing is Input: {{||[]||}} where my output is 0 and desired output is 1
function balancedBrackets(string) {
    const brackets = string.split('');
    let stack = [];

    for (let i = 0; i < brackets.length; i++) {
        console.log(stack);
        if (brackets[i] === '{' || brackets[i] === '[' || brackets[i] === '(' || brackets[i] === '|') {
            if (brackets[i] !== '|')
                stack.push(brackets[i]);
            else {
                if (stack[stack.length - 1] === '|') {
                    stack.pop() //its a close for the pipe since top of stack is |
                } else {
                    stack.push(brackets[i]) // its an open for the pipe
                }
            }
        } else if (brackets[i] === '}' || brackets[i] === ']' || brackets[i] === ')') {
            const openBracket = stack.pop();
            if (openBracket === '{' && brackets[i] !== '}') {
                return false;
            }
            if (openBracket === '[' && brackets[i] !== ']') {
                return false;
            } if (openBracket === '(' && brackets[i] !== ')') {
                return false;
            }
        }
    }
    return stack.length === 0;
}

balancedBrackets(" {{|[]|}}");