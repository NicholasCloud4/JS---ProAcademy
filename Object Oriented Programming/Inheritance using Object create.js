let person = {
    calcAge() {
        return new Date().getFullYear - this.birthYear;
    },

    personInit(name, birthYear, gender) {
        this.name = name;
        this.birthYear = birthYear;
        this.gender = gender;
    }
}

let employee = Object.create(person);
employee.employeeInit = function (name, birthYear, gender, empId, salary) {
    employee.personInit.call(this, name, birthYear, gender);
    this.empId = empId;
    this.salary = salary;
}

let sangtae = Object.create(employee)
sangtae.employeeInit("SangTae", 1999, "Male", "1212", 3433);
console.log(sangtae);