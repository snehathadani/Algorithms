let decimaltoBinary = (decimal, base) => {
   let remainderStack= [];
   let remainder;
   let binaryString= '';
   //for baseconvertor digits = '0123456789ABCDEF';
   while (decimal>0) {
       remainder = Math.floor (decimal%base);
       remainderStack.push(remainder);
       decimal= Math.floor(decimal/base);

   }
    while(remainderStack.length !== 0) {
 //for baseconvertor baseString += digits[remStack.pop()];
     binaryString += remainderStack.pop().toString();
    }
    return binaryString;
}

let newNum=decimaltoBinary(10,2);
console.log(newNum);