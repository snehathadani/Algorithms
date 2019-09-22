//helper function called swap 
//Quicksort o (n log n)

let swap = (arr,to,from)=> {
    let temp = arr[from];
    arr[from]= arr[to];
    arr[to]=temp;
}
//helper function partition
let partition = (arr, l, r) => {
    //let pivot be the first element in the array
    let pivot = arr[l];
    //i will move as it finds an element smaller than the pivot
    let i = l+1;
    //i and j will start at the same position while j increments everytime, i will increment only when it finds an element smaller than the pivot
    for(j=l+1; j<= r; j++) {
        if(arr[j]<pivot) {
            swap(arr,j,i)
            i=i+1;
        }
    }
    //new pivot will be the newly partitioned by the i
    swap(arr,l,i-1)
    return i-1;
}

let choosePivot= (arr,l,r)=> {
    return l;
}

let quickSort= (arr, l,r)=> {
    if (l>= r) {
        return arr;
    }
    //make pivot first
    let i = choosePivot(arr,l,r)
    swap(arr,l,i)
    let j= (partition(arr,l,r)); console.log(j, arr);
    console.log(j,arr);
    quickSort(arr,l,j-1);
    quickSort(arr,j+1,r)
}
let array= [3,8,2,5,1,4,7,6]
quickSort(array,0,array.length-1);
console.log(array);