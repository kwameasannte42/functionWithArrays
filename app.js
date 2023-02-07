//4 & 5

var myArray = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

function myArgs(x, y) {
    x.push(y);
    return x
}

let answer = myArgs(["Hello", 11], 12);
console.log(answer);


console.log(myArgs(myArray, 14));



//6

function newArr(arr) {
    arr.splice(1,2);
    return arr;
}

let result = newArr([1, 2, 3, 4, 5]);
console.log(result);

console.log(newArr(myArray))


//7

function sliceArray(arr1) {
    let slicedArray = arr1.slice(1, 3);
    return slicedArray;
}

let final = sliceArray([1, 2, 3, 4, 5]);
console.log(final);

console.log(sliceArray(myArray))