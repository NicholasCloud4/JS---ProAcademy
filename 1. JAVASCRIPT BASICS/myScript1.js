

// function firstFunction() {
//     setTimeout(function () {
//         console.log("This is the first Function");
//     }, 1000)

// }

// function secondFunction() {
//     console.log("This is the second function");
// }

// firstFunction();
// secondFunction();


// function doHomeWork(subject, callback) {
//     console.log(`I started working on my ${subject} homework`);
//     callback();
// }

// function homeWorkFin() {
//     console.log("I finished my homework");
// }

// doHomeWork("science", homeWorkFin);

// //anonymous function
// doHomeWork("art", function () {
//     console.log("I finished my art homework");
// })


// let user = new Object();
// user.name = "Barry";
// user.age = 34;
// console.log(user);

// let user1 = {
//     name: "Joker",
//     age: 23
// }
// console.log(user1);


// let mobileDevice = {
//     brand: "Samsung",
//     model: "S10",
//     storage: 64,
//     processor: "Snapdragon 855",
//     color: "white",
//     display: "oled",
//     calling: function () {
//         console.log("Calling " + this.brand);
//     }

// }



// console.log(mobileDevice);
// mobileDevice.calling();
// mobileDevice.brand = "Apple";
// mobileDevice.model = "Iphone 14";
// console.log(mobileDevice);

// let nums = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

// nums.length = 4;
// console.log(nums);


// let i = 1;
// while (i < 10) {
//     i++
//     console.log(i++);
// }

// for (let i = 0; i < 10; i++) {
//     if (i === 5) {
//         continue;
//     }
//     console.log(i);
// }

// let i = 0;
// const user = ["a", "b", "c", "d", "e"];
// do {
//     console.log(user[i] + i++);
// } while (i < user.length);