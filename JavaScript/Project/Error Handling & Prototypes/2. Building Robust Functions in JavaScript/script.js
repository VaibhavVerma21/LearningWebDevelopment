function getPerson(object){
    try{
        let name = object.name;
        let age = object.age;
        if(name===undefined || age===undefined){
            throw new Error;
        }
        return `Name: ${name}, Age: ${age}`;
    } catch(e){
        return "Invalid parameter type";
    }
}

console.log(getPerson({name: 'Mithun', age: 20}));
console.log(getPerson({name: 'Mithun'}));
console.log(getPerson(['name', 'Mithun']));