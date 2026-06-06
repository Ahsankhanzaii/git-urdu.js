// Primitive 

// 7 Types : Number, String, Bolean, Null, Undefined, Symbol, BigInt 

const score = 100
const scoreValue = 100.3

const isLoggedIn = false
const outsideTemp = null
let userEmai;


const id = Symbol('123')
const anotherId = Symbol('123')

// console.log(id === anotherId);

// const bigNumber = 34567678597900n

// console.log(typeof bigNumber);



// Reference (Non Premitive)
// Array, Objects, Functions

const heros = ["chipaMan", "sparrow", "jawadWorld",];
let myObj = {
  name: "Ahsan",
  age: 15

}

const myFunction = function() {
    console.log("hello World");
    
}
// console.log(typeof heros);
// **********************************************************

// stack (Premitive), Heap (Non Premitive)

let myName = "Ahsan"

let anotherName = myName
anotherName = "Ahsankhan"
 
// console.log(anotherName);
// console.log(myName);

let userOne = {
    email : "ahsanGooogle.com",
    user : "user@ybl" ,
}

let userTwo = userOne
userTwo.email = "anusgoogle.com"

console.log(userOne.email);
console.log(userTwo.email);





