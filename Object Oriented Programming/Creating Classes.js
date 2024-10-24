// JavaScript Classes
//There are two ways to create a class in JavaScript:
// 2. using class expression as seen in the constrcutor function.js

// 1. Using the class keyword as seen below

class Person {
    constructor(name, gender, birthYear) {
        this.name = name;
        this.gender = gender;
        this.birthYear = birthYear;
        
        // this.calcAge = function(){
        //     console.log(new Date().getFullYear() - this.birthYear);

        // }
    }
    calcAge(){
        console.log(new Date().getFullYear() - this.birthYear)
    }
}

Person.prototype.greet = function(){
    console.log("Good Morning!!!" + this.name)
}



let john = new Person("John", "Male", 1990);
console.log(john);
john.calcAge();
john.greet();

let mary = new Person("Mary", "Female", 1995);
console.log(mary);

/*
1. classes cannot be hoisted
2. classes are first class citizens
3. classes are executed in STRICT mode 
*/