function ageInDays(object) {
    const fullName = `${object.firstName} ${object.lastName}`;
    const ageInDays = object.age * 365;

    return function() {
        console.log(`The person's full name is ${fullName} and their age in days is ${ageInDays}.`);
    }
}


const details = {
    firstName: "Vaibhav",
    lastName: "Verma", 
    age: 17
}
const logFunction = ageInDays(details);
logFunction();