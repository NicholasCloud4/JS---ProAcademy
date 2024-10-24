// GETTER AND SETTERS
// Accessor properties are methods that gets or sets the value
// of an object property


//1. getter properties - read objects property value - get Keyword
//2. setter properties - set an objects property value - set Keyword

//Encapsulation - hide data from outside world
//set calculated value for a property

/*
let john = {
    name: "John",
    birthYear: 1990,
    AnnualSallary: 12000,

    get getName(){
        return "Mr." + this.name;
    },

    set setName(val){
        if(val.length < 2){
            alert("Name should be more than 1 character");
        }else{
            this.name = val;
        }
        
    }

}

console.log(john.getName);
john.setName = "Joker"
console.log(john.getName);

john.setName = "John Smith"
console.log(john.getName);
*/

class User {
    constructor(name, passWord, role){
        this.name = name;
        this.passWord = passWord;
        this.role = role;
    }

    set setPassWord(val){
        if(val.length < 4){
            console.log("Password needs to be at least 4 characters");
        } else{
            this.passWord = val;
        }
    }
}

let mark = new User("Mark", "pswrd123", "Admin");
console.log(mark);

mark.setPassWord = "a"

mark.setPassWord = "abcder"
console.log(mark)