function deconstruct(array){
    let [a, b, ...rest] = array;
    return [a, b, rest[rest.length-1]];
}

console.log(deconstruct([1,2,3,4,5]));