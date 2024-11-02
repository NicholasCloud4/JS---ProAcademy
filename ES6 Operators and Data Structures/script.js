'use strict'
/****************************************************************
 * DESTRUCTURING ARRAYS
 ****************************************************************/

//DESTRUCTURING SYNTAX FOR ARRAYS 
/*let person = ['John', 'Smith', 28, ['London', 'UK']];

let[firstName, lastName, age, [city, country]] = person;
console.log(firstName);
console.log(lastName);
console.log(age);
console.log(city);
console.log(country);

//DESTRUCTURING WILL NOT DESTROY THE ORIGINAL ARRAY
console.log(person);

//WE SHOULD ALWAYS USE A VALID VARIABLE NAME WHILE DESTRUCTURING
//let[123, 456, 10] = person;

//A SIMPLE USE CASE OF ARRAY DESTRUCTURING
function returnTopperStudents(){
    return ['Mark', 'Steve', 'Mery', 'John', 'Sarah'];
}

let[topper1, topper2, topper3] = returnTopperStudents();
console.log(topper1);
console.log(topper2);
console.log(topper3);
*/



/****************************************************************
 * DESTRUCTURING OBJECTS
 ****************************************************************/
 /*var employee = {
    name: 'Steve',
    lastName: 'Clark',
    age: 28,
    gender: 'Male',
    Area: ['London', 'UK'],
    workDetails:{Experience: 5, company: 'Google'},
}

//DESTRUCTURING SYNTAX FOR OBJECTS
//WE CAN PROVIDE ALIAS NAME FOR THE VARIABLES
//BUT WE STILL NEED TO REFERENCE THE PROPERTY WHICH WE WANT TO DESTRUCTURE
let{name: firstName, age: a, gender: gen, lastName='Smith', workDetails: {Experience: exp,  company}} = employee;
console.log(firstName);
console.log(a);
console.log(gen);
console.log(lastName);
console.log(exp, company);

//MUTATING VARIABLE VALUE
let x = 110;
let y = 120;

let obj = {x: 10, y: 20};

({x, y} = obj);
console.log(x, y);

//DESTRUCTURING OBJECT RETURNED BY A FUNCTION
function returnObj(){
    return {id: 101, userName: 'JS'};
}
let{id, userName} = returnObj();
console.log(id, userName);

//DESTRUCTING NESTED AARAY OF AN OBJECT
let{Area: [city, country]} = employee;
console.log(city, country);
*/





/****************************************************************
 * THE SPREAD OPERATOR
 ****************************************************************/

//EXPANDING ARRAYS
/*let arr = [10, 20, 30];
//console.log(arr[0], arr[1], arr[2]);
console.log(...arr);

//EXPANDING A STRING
let str = 'Hello';
console.log(...str);

//USECAE 1: COPYING ARRAY INTO ANOTHER ARRAY
//let newArray = [100, 23, arr[0], arr[1], arr[2]];
let newArray = [100, 23, ...arr];
console.log(newArray);

//USECASE 2: PASSING ELEMENTS OF AN ARRAY AS AN ARGUMENT
function addition(num1, num2, num3){
    return num1 + num2 + num3;
}
let sum = addition(...arr);
console.log(sum);

//USECASE 3: COMBINING TWO OR MORE ARRAYS INTO A SINGLE ARRAY
let arr1 = [12, 14, 16];
let arr2 = [20, 40];

let arr3 = [...arr1, 10, 30, ...arr2];
console.log(arr3);
*/

/****************************************************************
 * THE REST PATTERN AND REST PARAMETER
 ****************************************************************/
//SPREAD OPERATOR
/*let arr = [10, 20, 30];
console.log(...arr);

//DESTRUCTURING OF ARRAYS
let numbers = [10, 15, 20, 25, 30];
let[a, b, ...others] = numbers;//REST PATTERN ON ARRAY
console.log(a, b, others);

//REST PATTERN ON OBJECT
let num = {x: 10, y: 12, z: 13, u: 17};
let{x, y, ...obj} = num;
console.log(x, y, obj);

//REST PARAMETER
function addNumbers(num1, num2, ...num){
    let sum = num1 + num2;
    for(let i = 0; i < num.length; i++){
        sum += num[i];
    }
    return sum;
}
console.log(addNumbers(20, 30));
console.log(addNumbers(20, 30, 40));
console.log(addNumbers(20, 30, 40, 50));
*/



/****************************************************************
 * TNULLISH COALESCING OPERATOR
 ****************************************************************/

/*let a = 0;
let b = 'Height not defined';
let height;

//height = (a == null || a == undefined) ? b : a;

//NULISH COALESCING OPERATOR RETURNS THE VALUE OF ITS FIRST OPERAND
//IF IT IS NEITHER NULL NOR UNDEFINED. OTHERWISE, IT RETURNS THE VALUE OF 
//ITS SECOND OPERAND

//NULISH COALESCING OPERATOR IS A BINARY OPERATOR

//IT IS USED TO HANDLE NULL OR UNDEFINED VALUES
// height = a ?? b;
// console.log(height);

//OR OPERATOR RETURNS THE FIRST TRUTHY VALUE
//Truthy value - Everything except (0, '', null, undefined, false)
height = a ?? b;
console.log(height);*/

/****************************************************************
 * JAVASCRIPT FOR...OF LOOP
 ****************************************************************/

//let students = ['John', 'Merry', 'Steve', 'Mark', 'Sarah', 'Mike'];

//let str = 'Hello from JavaScript';

//SYNTAX OF FOR...OF LOOP
/*for(variable of itterable){

}*/
//LOOP OVER AN ARRAY USING FOR...OF
/*for(let item of students){
    console.log('Student name: ' + item);
}

console.log('-------------------------------')

//LOOP OVER AN ARRAY USING FOR LOOP
for(let i = 0; i < students.length; i++){
    console.log('Student name: ' + students[i]);
}

//LOOPING OVER A STRING USING FOR...OF LOOP
for(let s of str){
    console.log(s);
}

//MAPS, SETS..*/

//WRITE A FUNCTION TO COUNT THE LENGTH OF A STRING 
//WITHOUT USING LENGTH PROPERTY.

/*function countStringLength(str){
    let count = 0;
    for(let s in str){
        count++;
    }
    return count;
}
console.log(countStringLength(str));
console.log(str.length);
*/






/****************************************************************
 * ES6 ENHANCEMENTS IN OBJECT LITERAL SYNTAX
 ****************************************************************/
/*let workingDays = ['Mon', 'Tue', 'Wed', 'Thu', 'Fri'];

let shift = {
    [workingDays[0]]: '10AM - 7PM',
    [workingDays[1]]: '10AM - 7PM',
    [workingDays[2]]: '10AM - 7PM',
    [10 + 20]: '10AM - 7PM',
    Fri: '10AM - 7PM',
}

//1. VARIABLES ARE ASSIGNED IMPLICITELY TO THE PROPERTIED WITH SAME NAME
//IF WE ARE NOT ASSIGNING ANY VALUE TO THAT PROPERT EXPLICITELY

//2. ENHANCEMENT IN THE WAY WE CREATE METHODS FOR AN OBJECT

//3. JAVASCRIPT EXPRESSIONS CAN BE USED AS A PROPERTY FOR AN OBJECT
let employee = {
    id: 101,
    name: 'John',
    birthYear: 1990,
    workingDays,
    shift,

    calculateAge(){
        let age = 2021 - this.birthYear;
        console.log(age);
    }
}
console.log(employee);
employee.calculateAge();
*/


/****************************************************************
 * OPTIONAL CHAINING IN JAVASCRIPT
 ****************************************************************/
/*let user = {
    name: 'john',
    age: 28,
    gender: 'Male',
    hobbies: null,
    contact: {
        phone: 9988776655,
        email: 'john@somemail.com',
        address: {
            street: '10th Main Street',
            area: 'Abbey Wood',
            city: 'London',
            country: 'UK'
        }
    }
}
console.log(user.name);
console.log(user.birthYear);
console.log(user.contact.phone);
console.log(user.contact.city);
console.log(user.contacts?.city?.name);
//console.log(user.hobbies.x);
*/
/*if(user.contact.city === null || user.contact.city === undefined){
    console.log(undefined)
}else{
    console.log(user.contact.city.name);
}*/
//user.contacts.city?.name


//USECASE OF OPTIONAL CHAINING
/*let text = document.querySelector('h2')?.innerText;
console.log(text);*/



/****************************************************************
 * HOW TO LOOP OVER OBJECTS IN JAVASCRIPT
 ****************************************************************/
/*let user = {
    name: 'John',
    age: 20,
    occupation: 'Teacher',
    gender: 'Male'
}

//LOOPING OVER OBJECT PROPERTY NAMES
//KEYS METHOD WILL RETURN AN ARRAY
//THAT ARRAY WILL CONTAIN ALL THE PROPERTIES OF PASSED OBJECT AS ITS ELEMENT
let properties = Object.keys(user);
console.log(properties);
console.log(properties.length);

for(let prop of properties){
    console.log(prop);
}

//LOOPING OVER OBJECT'S PROPERTY VALUES
//VALUES METHOD RETURNS AN ARRAY
//THAT ARRAY WILL CONTAIN ALL THE PROPERTIES VALUES OF PASSED OBJECT AS ITS ELEMENT
let value = Object.values(user);
console.log(value);

for(let val of value){
    console.log(val);
}

//LOOPING OVER BOTH PROPERTY NAME & PROPERTY VALUE
let entries = Object.entries(user);
console.log(entries);

for(let [key, val] of entries){
    console.log(`${key}: ${val}`);
}
*/



/****************************************************************
 * WHAT ARE SETS IN JAVASCRIPT
 ****************************************************************/
//CREATING A NEW SET
/*let cities = new Set(['London', 'New York', 'Mumbai', 'London', 'Delhi']);
console.log(cities);

let randomData = new Set([12, true, 'Hello', null]);
console.log(randomData);

//STRING IS AN ITTERABLE
let str = new Set(new String('Hello'));
console.log(str);

//SIZE - RETURNS NUMBER OF ENTRIES A SET HAS
console.log(cities.size);

//HAS() - RETURN TRUE IF THE PASSED ITEM IS PRESENT IN SET OTHERWISE RETURNS FALSE
console.log(cities.has('London'));
console.log(cities.has('Tokyo'));

//ADD() - ADD ELEMENTS TO A SET
cities.add('Tokyo');
console.log(cities);

//DELETE - DELETE AN ENTRY FROM THE SET
cities.delete('Delhi');
console.log(cities);

//CLEAR - DELETE ALL ENTRIES FROM THE SET
// cities.clear();
// console.log(cities);

//LOOPING OVER SETS
for(let city of cities){
    console.log(city);
}

//1. REMOVE DUPLICATE VALUES FROM AN ARRAY
let names = ['John', 'Mark', 'Merry', 'Mark', 'Steve', 'John'];
let namesSet = new Set(names);
let uqNamesArray = [...namesSet];
console.log(uqNamesArray);

//2. COUNTING NUMBER OF UNIQUE CHARACHTERS IN A STRING
let str1 = 'This is a string';
let strSet = new Set(str1);
console.log(strSet.size);
*/


/****************************************************************
 * WHAT ARE MAPS IN JAVASCRIPT
 ****************************************************************/
//CREATING A MAP
/*let question = new Map();

//SET() - ADD ENTRIES TO A MAP
question.set('question', 'In which year ES6 was released?')
.set(1, 2009)
.set(2, 2013)
.set(3, 2015)
.set(4, 2018)
.set('correct', 3)
.set(true, 'Your answer is correct.')
.set(false, 'The answer you entered is wrong');

console.log(question);

//RETRIVING VALUE FROM A MAP
let ques = question.get('question');
console.log(ques);
console.log(question.get(1));
console.log(question.get(2));
console.log(question.get(3));
console.log(question.get(4));

//PROMPT USER TO ENTER ANSWER
// let ans = parseInt(prompt('Please provide your option for the answer.'));
// let isCorrect = ans === question.get('correct');//2 === 3
// console.log(question.get(isCorrect));

//OTHER USEFUL METHODS OF A MAP
//HAS() - RETURNS TRUE IF A MAP HAS A CERTAIN KEY. ELSE RETURNS FALSE
console.log(question.has('correct'));
console.log(question.has('wrong'));

//SIZE - RETURNS NUMBER OF ENTRIES WHICH A MAP HAS
console.log(question.size);

//DELETE - DELETES AN ENTRY IN MAP WITH A GIVEN KEY
question.delete(4);
console.log(question);

//CLEAR - IT DELETES ALL THE ENTRIES FROM A MAP
question.clear();
console.log(question);


//A MAP IS AN ITTERABLE
*/




/****************************************************************
 * CREATING MAPS FROM ARRAYS AND OBJECTS
 ****************************************************************/
/*let user = new Map([
    ['name', 'John'],
    ['age', 28],
    ['gender', 'Male'],
    ['occupation', 'Teacher']
]);
// user.set('name', 'John');
// user.set('age', 28);

console.log(user);*/

//CONVERT AN OBJECT INTO A MAP
/*let customer = {
    id: 101,
    name: 'Mark',
    gender: 'Male',
    city: 'London'
}

//1. USER OBJECT.ENTRIES() TO CREATE AN ARRAY FROM THE OBJECT
let customerArray = Object.entries(customer);

//2. PASSED THAT ARRAY TO THE CONSTRUCTOR OF THE MAP
let customerMap = new Map(customerArray)
// console.log(customerMap);

//CONVERTING A MAP INTO AN ARRAY
// let x = [...customerMap];
// console.log(x);

//CONVERING A MAP INTO AN ARRAY WITH ONLY KEYS
// let y = [...customerMap.keys()];
// console.log(y);

//CONVERTING A MAP INTO AN ARRAY WITH ONLY VALUES
// let z = [...customerMap.values()];
// console.log(z);

// let u = [...customerMap.entries()];
// console.log(u);

//LOOPING OVER MAPS
for(let [key, value] of customerMap){
    console.log(`Value for key ${key} is ${value}`);
}
*/




/****************************************************************
 * JAVASCRIPT STRING METHODS & PROPERTIES - PART 1
 ****************************************************************/
//let myString = 'Javascript is the best';
//let myString = 'Hey there! How are you doing today';


//WE CAN EXTRACT A CHARACTER FROM A STRING USING ITS INDEX
/*console.log(myString[0]);
console.log(myString[5]);
console.log('Hello'[2]);

//LENGTH - RETURNS THE TOTAL NUMBER OF CHARACTERS IN A STRING
let charCount = myString.length;
console.log(charCount);
console.log('Hello'.length);*/

//indexOf() - RETURNS THE INDEX OF FIRST OCCURANCE OF A CHARACTER
//BOTH indexOf() & lastIndexOf() RETURNS -1 IF THE GIVEN CHARACTER IS NOT FOUND IN STRING
//BOTH indexOf() & lastIndexOf() ARE CASE SENSITIVE


/*console.log('------INDEXOF--------');
console.log(myString.indexOf('s'));
console.log(myString.indexOf('u'));
console.log(myString.indexOf('S'));
console.log(myString.indexOf('best'));

console.log('------LASTINDEXOF--------');
//lastIndexOf() - RETURNS THE INDEX OF LAST OCCURANCE OF A CHARACTER
console.log(myString.lastIndexOf('s'));
console.log(myString.lastIndexOf('u'));
console.log(myString.lastIndexOf('S'));
*/

//SLICE() - EXTRACTS A SUBSTRING FROM A STRING
/*let substring = myString.slice(11);
console.log(substring);
console.log(myString.slice(11, 16));
console.log(myString.slice(-4));
console.log(myString.slice(5, -3));
*/

//FIND THE FIRST WORD FROM A STRING
/*let index = myString.indexOf(' ');
let firstWord = myString.slice(0, index);
console.log(firstWord);

//FIND THE LAST WORD FROM A STRING
let lIndex = myString.lastIndexOf(' ') + 1;
let lastWord = myString.slice(lIndex);
console.log(lastWord);*/

/*let emp1 = {name: 'John', empCode: 'BLR1122P', gender: 'Male'};
let emp2 = {name: 'Mark', empCode: 'NYC1322C', gender: 'Male'};
let emp3 = {name: 'Merry', empCode: 'LON4321P', gender: 'Female'};

function printDetails(emp){
    let employeeLocation = getLocation(emp.empCode.slice(0, 3));
    let employeeType = emp.empCode.slice(-1) === 'P' ? 'Permanent' : 'Contractor';
    console.log(`${emp.name} is working from ${employeeLocation} office and he/she is a ${employeeType} employee.`);
}

function getLocation(locationCode){
    let location;

    switch(locationCode){
        case 'BLR':
            location = 'Bangalore';
            break;
        case 'NYC':
            location = 'New York';
            break;
        case 'LON':
            location = 'London';
            break;
        default:
            location = 'Unknown location'
    }
    return location;
}
printDetails(emp1);
printDetails(emp2);
printDetails(emp3);
*/



/****************************************************************
 * JAVASCRIPT STRING METHODS & PROPERTIES - PART 2
 ****************************************************************/
//let myString = 'Javascript is the best';

//toUpperCase() - CONVERTS ALL LETTERS OF A STRING TO UPPERCASE
//toULowerCase() - CONVERTS ALL LETTERS OF A STRING TO LOWERCASE

/*let toUpper = myString.toUpperCase();
console.log(toUpper);

let toLower = myString.toLowerCase();
console.log(toLower);

//WRITE A FUNCTION WHICH WILL UPDATE THE LETTER CASE IN A WORD
//1. FIRST LETTER OF THE WORD SHOULD BE IN UPPER CASE
//2. REST ALL OTHER LETTERS SHOULD BE IN LOWER CASE

function updateCase(word){
    let lower = word.toLowerCase();//welcome
    let updatedWord = lower[0].toUpperCase() + lower.slice(1);
    console.log(updatedWord);
}
updateCase('welCOme')
updateCase('HELLO')
updateCase('steve')


//johnsmith@gmail.com
//JohnSmith@Gmail.Com

let emailInDB = 'johnsmith@gmail.com';
let emailUser = 'JohnSmith@Gmail.Com';

if(emailUser.toLowerCase() === emailInDB){
    //WRITE LOGIC TO LOGIN THE USER
    console.log('You are logged in.')
}else{
    console.log('Email does not exist in our records')
}
*/

//TRIMING SPACES BEFORE AND AFTER A STRING
/*let str = '  Hello   ';

//trimStart() - REMOVES SPACES FROM THE START OF A STRING
//trimEnd() - REMOVES SPACES FROM THE END OF A STRING
//trim() - REMOVES SPACES FROM THE START & END OF A STRING

console.log(str.trimStart());
console.log(str.trimEnd())
console.log(str.trim());*/

//REPLACING CHARACTERS / WORDS IN A STRING
/*let greet = 'Hey there. How are you doing today.';

// let str = greet.replace('.', '!');
//let str = greet.replaceAll('.', '!');
let str = greet.replace('HEY', 'Hello');
console.log(str);

//includes(), startsWith(), endsWith()
//includes() - RETURN TRUE IF A CHARACHTER OR A SUBSTRING IS PRESENT INSIDE A STRING
//startsWith() - RETURN TRUE IS A STRING STARTS WITH A GIVEN CHARACTER OR STRING
console.log(greet.includes('t'));
console.log(greet.startsWith('Hey theu'));
console.log(greet.endsWith('today.'));*/

/*let str = 'This is a string';

let str2 = new String('This is another string!')

console.log(str);
console.log(str2);

str.replace()//primitive string -> string object : Boxing
    //string object - primitive string : unboxing

*/



/****************************************************************
 * JAVASCRIPT STRING METHODS & PROPERTIES - PART 3
 ****************************************************************/
let myString = 'JavaScript is the best';
let anotherString = 'This-is-another-string';

//SPLIT() - SPLIT A STRING INTO MULTIPLE STRINGS BASED ON A DEVIDER 
//AND RETURNS AN ARRAY OF STRING
/*let strArray = myString.split(' ');
console.log(strArray);
let anotherArray = anotherString.split('-');
console.log(anotherArray);

//GET USERS FIRSNAME, MIDDLENAME & LASTNAME FROM HIS FULLNAME

function printNames(fullName){
    let [fName, mName, lName] = fullName.split(' ');
    console.log(fName);
    console.log(mName);
    console.log(lName);
}
printNames('John Martin Smith');
printNames('Merry Ann Jordan');*/

//JOIN() - JOINS THE STRING ELEMENTS OF AN ARRAY INTO SINGLE STRING

/*let strArray = ['My', 'name', 'is', 'John'];
let str = strArray.join('*');
console.log(str);*/

//FORMAT THE FIRST LETTER OF EACH NAME IN UPPER CASE
/*function formatNames(fullName){
    let formattedNames = [];
    let names = fullName.split(' ');
    for(let name of names){
        let formatted = name[0].toUpperCase() + name.slice(1);
        formattedNames.push(formatted);
    }
    let name = formattedNames.join(' ');
    console.log(name);
}
formatNames('merry ann jordan');
formatNames('john martin smith');*/

//PADDING METHODS - padStart() & padEnd()
//PADDING METHODS ADD A NUMBER OF CHARACTER TO A STRING UNTIL 
//THE STRING HAS A CERTAIN DESIRED LENGTH
/*console.log(myString.length);
console.log(myString.padStart(30, '*'));
console.log(myString.padEnd(30, '*'));

//MASK THE CREDIT/DEBIT CARD DETAILS
function maskCardNumber(cardNumber){
    //1. CONVERT CARD NUMBER INTO A STRING
    let cardStr = cardNumber + '';// 2 + '3' = 23

    //2. GET LAST 4 DIGITS FROM CARD NUMBER
    let last = cardStr.slice(-4);

    //3. MAST THE CARD NUMBER EXCEPT LAST 4 DIGIT
    let maskedCard = last.padStart(cardStr.length, '*');
    console.log(maskedCard);
}
maskCardNumber(1234543267548976);
maskCardNumber('564387659876123412');
*/

//REPEAT - REPEATS A STRING FOR A GIVEN NUMBER OF TIMES
console.log('Hello'.repeat(5));

//CONCAT - CONCATENATES TWO STRINGS
let str1 = 'Hello';
let str2 = 'World!'

let str = str2.concat(str1);
console.log(str);









