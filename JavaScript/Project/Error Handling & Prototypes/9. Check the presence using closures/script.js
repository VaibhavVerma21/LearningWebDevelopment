function numberChecker(array){
    return (element) => {
        return new Set(array).has(element);
    }
}

let arr = [1,2,3,4,5];
let checkNumber = numberChecker(arr);
console.log(checkNumber(3));
console.log(checkNumber(6));