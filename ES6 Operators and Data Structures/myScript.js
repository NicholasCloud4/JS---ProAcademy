// let person = ["Bruce", "Wayne", 30, []];
// let [firstName, lastName, age,] = person;

// console.log(firstName);
// console.log(gender);


// var employee = {
//     name: "Jack",
//     age: 30,
//     gender: "Male",
//     workDetails: {
//         company: "JOKER",
//         Experience: 10
//     }
// }

// let { name, gender, workDetails: { company, Experience } } = employee;
// console.log(company);

// let x = 120;
// let y = 130;

// let obj = { x: 10, y: 20 };

// ({ x, y } = obj);
// console.log(x, y);


// let arr = [10, 20, 30];
// console.log(...arr);


// let newArray = [100, 23, ...arr];
// console.log(newArray);


// function addition(num1, num2) {
//     return num1 + num2;
// }

// console.log(addition(...arr))

// let arr1 = [10, 20, 30];
// let arr2 = [40, 50, 60];
// let combineArr = [...arr1, ...arr2];
// console.log(combineArr);


// let arr = [10, 20, 30];
// console.log(...arr);

// let numbers = [10, 15, 20, 25, 30];
// let [a, b, ...others] = numbers;
// console.log(numbers);


// let num = {
//     x: 10,
//     y: 12,
//     z: 13,
//     u: 17,
// }

// let { x, y, ...letters } = num;
// console.log(num);


// function addNumbers(...num) {
//     let sum = 0;
//     for (let i = 0; i < num.length; i++) {
//         sum = sum + num[i];
//     }

//     return sum;
// }

// console.log(addNumbers(20, 30, 40, 50));


// let a = 100;
// let b = "Height not defined";

// let height;

// height = a ?? b;
// console.log(height);


// let students = ['John', 'Merry', 'Steve', 'Mark', 'Sarah', 'Mike'];
// let str = 'Hello from JavaScript';

// for (let item of students) {
//     console.log("student name is " + item)
// }

// for (let string of str) {
//     console.log(string)
// }


// function countStringLength(str) {
//     let count = 0;
//     for (let items of str) {
//         console.log(items)
//         count++;
//     }
//     console.log(count);
// }

// countStringLength(str);


// let user = {
//     name: "John",
//     age: 30,
//     occupation: "Teacher",
//     gender: "Male"
// }


// let properties = Object.keys(user)
// console.log(properties);

// for (let prop of properties) {
//     console.log(prop)
// }
// console.log(properties.length);

// let values = Object.values(user);
// console.log(values);

// for (let value of values) {
//     console.log(value)
// }
// console.log(values.length);

// let entries = Object.entries(user);
// console.log(entries);

// for (let [key, value] of entries) {
//     console.log(key, value)
// }

// let cities = new Set(["London", "New York", "Mumbai", "London", "Delhi"]);
// console.log(cities);

// let randomData = new Set([4, true, "Hello", null]);
// console.log(randomData);

// let str = new Set(new String("Hello"));
// console.log(str);



// let names = ['John', 'Mark', 'Merry', 'Mark', 'Steve', 'John'];

// let namesSet = new Set(names);

// let uqNamesArray = [...namesSet];
// console.log(uqNamesArray);

// console.log(namesSet);

// for (let name of namesSet) {
//     console.log(name)
// }

// let question = new Map();

// question.set("question", 'In which year ES6 was released?')
//     .set(1, 2009)
//     .set(2, 2013)
//     .set(3, 2015)
//     .set(4, 2018)
//     .set("correct", 3)
//     .set(true, 'Your answer is correct.')
//     .set(false, 'The answer you entered is wrong');

// console.log(question);

// let ques = question.get("question");
// console.log(ques);
// console.log(question.get(1));
// console.log(question.get(2));
// console.log(question.get(3));
// console.log(question.get(4));

// let ans = parseInt(prompt('Please provide your option for the answer.'));

// let isCorrect = ans === question.get("correct");
// console.log(question.get(isCorrect));
// console.log(ans);

// let myString = 'Javascript is the best';
let myString = 'Hey there! How are you doing today';


// console.log(myString[0]);
// console.log(myString[5]);

console.log(myString.slice);

// console.log(myString.lastIndexOf('s'));


// console.log(myString.lastIndexOf(" "));

// console.log(myString.slice(18))


// let emp1 = { name: 'John', empCode: 'BLR1122P', gender: 'Male' };
// let emp2 = { name: 'Mark', empCode: 'NYC1322C', gender: 'Male' };
// let emp3 = { name: 'Merry', empCode: 'LON4321P', gender: 'Female' };


// function printDetails(emp) {
//     let employeeLocation = getLocation(emp.empCode.slice(0, 3))
//     console.log(employeeLocation);
// }


// function getLocation(locationCode) {
//     let location;
//     switch (locationCode) {
//         case "BLR":
//             location = "Bangalore";
//             break;
//         case "NYC":
//             location = "New York";
//             break;
//         case "LON":
//             location = "London";
//             break;
//         default:
//             location = "Unknown location"
//     }
//     return location;
// }



// printDetails(emp1);
// printDetails(emp2);
// printDetails(emp3);



// let str = "Hello this is a new string";
// str.replace("Hello", "Hi");

// console.log(str);



// let myString = 'Javascript is the best';

// let myStr = myString.split(" ");
// console.log(myStr);


// function formatName(fullName) {
//     let names = fullName.split(" ");
//     let formattedNames = [];

//     for (let name of names) {
//         let formatted = name[0].toUpperCase() + name.slice(1);
//         formattedNames.push(formatted);
//     }
//     console.log(formattedNames.join(" "));

// }

// formatName('Merry Ann Jordan');


let names = ["John", "Merry", "Steve", "Mark", "Sarah", "Mike"];

names.splice(1, 2)

console.log(names);

