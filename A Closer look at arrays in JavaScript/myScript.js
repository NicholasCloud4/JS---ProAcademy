// let names = ["Batman", "Superman", "Spiderman", "Hulk", "Thor", "Robin"]
// console.log(names);

// let slicedNames = names.slice(2);
// console.log(slicedNames);

// let slicedNames2 = names.splice(1);
// console.log(slicedNames2);


// let data = [5, 7, 8, 9, 4]
// console.log(data.splice(2, 1, 11, 15))
// console.log(data)

// names.forEach(function (elem) {
//     console.log('Student name is ' + elem)
// })

// let birthYears = [1990, 1998, 2007, 1999, 2003];


// let ages2 = birthYears.map(function (elem, index, arr) {
//     console.log('Value of ' + index + ' is ' + elem);
//     return new Date().getFullYear() - elem;

// })

// console.log(ages2)
// console.log(birthYears)


// let transactions = [100, -20, -30, 60, 120, -100, 80, 20];
// console.log(transactions);
// transactions.filter(function (value, index, array) {
//     value >= 60 ? console.log(value) : null
// })


let numbers = [40, 5, 30, 10];
console.log(numbers);

let sumOfNum = numbers.reduce(function (acc, elem, index, arr) {
    return elem
})


console.log(sumOfNum)


let max = numbers.reduce(function (acc, elem, index, arr) {
    if (acc > elem) {
        return acc
    } else {
        return elem
    }
})

console.log(max)