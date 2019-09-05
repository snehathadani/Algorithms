/* 
PSEUDOCODE
C= output[length=n*]
A= 1st sorted array [n/2]
B= 2nd sorted array [n/2]
i=1
j=1
for k = 1 to n
ifA(i)<B(j)
C(k) = A(i)
i++
else [B(j)<A(i)]
C(k)=B(j)
j++
*/

function mergeSort(arr) {
    if (arr.length <= 1) {
        return arr;
    } 
    let c = [];
    let leftSorted = [];
    let rightSorted = [];
    let middle = Math.floor(arr.length / 2);
    let leftArr = arr.slice(0, middle);
    let rightArr = arr.slice(middle);
    let i = 0;
    let j = 0;
    
  
    leftSorted = mergeSort(leftArr);
    rightSorted = mergeSort(rightArr);

    console.log(leftSorted, rightSorted);
    
    while (i < leftSorted.length || j < rightSorted.length) {
        if (i === leftSorted.length) { // finish with the left and now start with the rightSorted elements
            c.push(rightSorted[j])
            j = j + 1;
        }
        else if (j === rightSorted.length) {
            c.push(leftSorted[i]);
            i = i + 1;
        } else {
            if (leftSorted[i] < rightSorted[j]) {
                c.push(leftSorted[i]);
                i = i + 1;
            } else {
                c.push(rightSorted[j]);
                j = j + 1;
            }
        }
    }
    console.log(c);
    return c;
}

let arr = [4, 1, 3, 2];
mergeSort(arr);