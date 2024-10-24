class Person {
    constructor(name, birthYear, gender) {
        this.name = name;
        this.birthYear = birthYear;
        this.gender = gender;
    }
    calcAge() {
        console.log(new Date().getFullYear - this.birthYear);
    }
}

class Employee extends Person {
    constructor(name, birthYear, gender, empId, salary) {
        super(name, birthYear, gender)
        this.empId = empId;
        this.salary = salary;
    }

    calcSalary() {
        return this.salary * 12;
    }
    empDetail() {
        console.log(this.name + " " + this.empId)
    }
}

let bond = new Employee("James Bond", 1900, "Male", "007", 100000);
console.log(bond);

bond.empDetail();