function double(array) {
    for(let i=0; i<array.length; i++) {
        array[i] = array[i] * 2;
    }
    return array;
}

function doubleArray(array, doubleFunction) {
    return doubleFunction(array);
}

let arr = [1, 2, 3, 4, 5];
let newArr = doubleArray(arr, double);
console.log(newArr);