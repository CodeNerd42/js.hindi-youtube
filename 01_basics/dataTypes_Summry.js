// Primitive

//  7 types : String, Number, BigInt, Boolean, Undefined, Null, Symbol

const score = 100; // number
const scoreValue = 100.5; // number
const bigIntValue = 1234567890123456789012345678901234567890n; // BigInt
const firstName = "Priyanshu"; // string
const isLoggedIn = true; // boolean
const isLoggedOut = false; // boolean
const temp = null; // null
const undefinedVariable = undefined; // undefined
const uniqueSymbol = Symbol("unique"); // symbol

const secondSymbol = Symbol("unique"); // symbol, different from the first one

console.log(uniqueSymbol=== secondSymbol); // false, symbols are unique



// Reference OR Non-Primitive

// Arrays, Objects, Functions

const heroes = ["Batman", "Superman", "Spiderman"]; // Array

let user = {
    name: "Priyanshu",
    age: 21,
    isLoggedIn: true,
    address: {
        city: "Lucknow",
        state: "Uttar Pradesh",
        country: "India"
    }
}

const add = function (a, b) {
    console.log(`Adding ${a} and ${b}`);
    
    return a + b;

}

console.log(typeof temp);


console.log(add(2, 3)); // Function

console.log(typeof add); // function
console.log(typeof heroes); // object (arrays are objects in JS)
console.log(typeof user); // object
console.log(typeof uniqueSymbol); // string


