// Inheritance between function constructors
// Person - Parent class

let Person = function (name, gender, birthYear) {
    this.name = name;
    this.gender = gender;
    this.birthYear = birthYear;
}

Person.prototype.calcAge = function () {
    let age = new Date().getFullYear - this.birthYear;
    console.log(age);
}

let joker = new Person("Joker", "Male", 1999);
console.log(joker);


//Employee function constructor
//this = harley
// Employee - Child class
let Employee = function (name, gender, birthYear, empId, salary) {
    Person.call(this, name, gender, birthYear);
    this.empId = empId;
    this.salary = salary;
}
Employee.prototype = Person.prototype;

Employee.prototype.calcSalary = function () {
    return this.salary * 12;
}
Employee.prototype.empDetails = function () {
    console.log(this.name);
    console.log(this.empId);
}

let harley = new Employee("Harley", "Female", 2000, 7, 15.75)
console.log(harley);