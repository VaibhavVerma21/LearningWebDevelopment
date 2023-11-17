function manipulateString(string) {
    let stringUpper = string.toUpperCase();
    return function logString(){
        console.log("The manipulated string is:", stringUpper);
    }
}

let str = "Yo, hello i am someone."
let printFunction = manipulateString(str);
printFunction();