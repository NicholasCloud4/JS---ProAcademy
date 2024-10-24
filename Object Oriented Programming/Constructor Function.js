// Constructor Function
let Person = function(name, gender, birthYear){
    this.name = name;
    this.gender = gender;
    this.birthYear = birthYear; 
    // this.calcAge = function (){
    //     let age = new Date().getFullYear() - this.birthYear;
    //     console.log("age: ", age);
    // }
}
Person.prototype.calcAge = function(){
    let age = new Date().getFullYear() - this.birthYear;
    console.log("age: ", age);
}

let john = new Person("John", "Male", 2000);
console.log(john)
john.calcAge();

console.log();
let rex = new Person("Rex", "Male", 2001);
console.log(rex)
rex.calcAge(); 

// Every object we create in JavaScript is directly or 
// indirectly an instance of object constructor

let mark = {
    name: "Mark",
    birthYear: 1992,
    gender: "male"
}
mark.hasOwnProperty("name");

console.log(mark)

// let mark = new Object()  - empty object
