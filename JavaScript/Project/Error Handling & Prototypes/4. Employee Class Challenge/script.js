class Employee{
    #salary;
    constructor(name, position, salary){
        this.name = name;
        this.position = position;
        this.#salary = salary;
    }
    getSalary(){
        return this.#salary;
    }
}
let employee = new Employee("Ramesh", "CEO", "150000");
console.log(employee.getSalary());