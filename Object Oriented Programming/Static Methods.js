// Static Methods

/*class Person{
    constructor(name, birthYear, gender){
        this.name = name;
        this.birthYear = birthYear;
        this.gender = gender;
    }

    calcAge(){
        console.log(new Date().getFullYear - this.birthYear);
    }

    static greet(){
        console.log("HELLO" + this.name);
    }

    
}

let flash = new Person("Flash", 1999, "Male")
console.log(flash)

Person.greet();
*/

let Person = function (name, gender, birthYear) {
    this.name = name;
    this.gender = gender;
    this.birthYear = birthYear;
}
Person.prototype.calcAge = function () {
    let age = new Date().getFullYear() - this.birthYear;
    console.log(age)
}
Person.greet = function () {
    console.log("Have a nice day!")
}

let mark = new Person("Mark", "Male", 1995);
console.log(mark);
mark.calcAge();
Person.greet();
