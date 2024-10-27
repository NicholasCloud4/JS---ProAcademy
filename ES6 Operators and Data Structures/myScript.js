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


let students = ['John', 'Merry', 'Steve', 'Mark', 'Sarah', 'Mike'];
let str = 'Hello from JavaScript';

for (let item of students) {
    console.log("student name is " + item)
}

// for (let string of str) {
//     console.log(string)
// }


function countStringLength(str) {
    let count = 0;
    for (let items of str) {
        console.log(items)
        count++;
    }
    console.log(count);
}

countStringLength(str);



