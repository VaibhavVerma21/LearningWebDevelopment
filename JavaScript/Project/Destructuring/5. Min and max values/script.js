function maxAndMin(array){
    return {"Max": Math.max(...array), "Min": Math.min(...array)};
}

console.log(maxAndMin([5, 2, 7, 1, 9]));