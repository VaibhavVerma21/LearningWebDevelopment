class Car{
    constructor(company, model, year) {
        this.company = company;
        this.model = model;
        this.year = year;
    }
    getDescription() {
        return `This is a ${this.year} ${this.company} ${this.model}`;
    }
}
let car = new Car("Skoda", "Rapid", 2022);
console.log(car.getDescription());