function uniqueItems(array){
    return new Set(array);
}

let arr = [1, 2, 2, 3, 4, 4, 5, 6, 6, 7, 8, 8, 9];
let set = uniqueItems(arr)
console.log(set);