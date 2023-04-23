function extract(person){
    let {name, address} = person;
    let {street} = address;
    return {"Name": name, "Street": street}
}

const person ={
    name: "Vaibhav",
    age: 17,
    address: {
        street: "B8, Block B, Industrial Area",
        city: "Noida",
        state: "Uttar Pradesh",
    }
}
console.log(extract(person));