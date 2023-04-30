function convertToNumber(string){
    try{
        if(isNaN(Number(string))){
            throw new Error;
        }
        return Number(string);
    } catch(e){
        return "Invalid number";
    }
}
console.log(convertToNumber("123"));
console.log(convertToNumber("abc"));