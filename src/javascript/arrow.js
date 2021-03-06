// Defining a function in ES6

function add(a,b) {
    return a+b;
}
console.log("Add function")
console.log(add(1,2));
console.log("*******************\n\n")

// Arrow function
const add_arrow = (a,b) => {
    return a+b
};

const empty_func =  () => {
    return "HELLO"
}

console.log(empty_func())
console.log("Add arrow function")
console.log(add_arrow(1,2))
console.log("*******************\n\n")

// implicit return

const message = () => 'This is a message'

console.log(message())
// By default intialize all variables to consts

console.log("*******************\n\n")

// Deconstructing variables from objects, arrays
const msg = "message"
let integer = 1
let str = 'string'
let arr = [1, '2',2,34,1.05]
let obj = { key: {innerKey: 2}, 
            arr: [] }

let developer = {
    'firstName': 'Tharun',
    lastName: 'Sikhinam',
    developer: true,
    age: 25,
}

developer.firstName = "ABC"
//destructure developer object
const { firstName, lastName } = developer;
console.log(firstName); // returns 'Nathan'
console.log(lastName); // returns 'Sebhastian'
console.log(developer); // returns the object

const arr = [1,2,3,4,5]

const [one,two] = arr

console.log(one,two)