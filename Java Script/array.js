
// !using array literal

let Fruits=["Apple","Banana","Orange"];

// !using array Constructor
let fruits=new Array("Apple","Banana","Orange","Lichi","Mango");

// console.log("Using Array literal :",Fruits)
// console.log("Using Array Constructor:",fruits)

// ! Access Element using Indexing
console.log("Using Array Constructor:",fruits);
console.log(fruits[0]);

// ! length
    // Size of array
console.log(fruits.length);

// ! push
    // add element in  a last in an array
    fruits.push("Watermelon");
    console.log("after Push element :",fruits);

// ! pop
    // delete  element from  a last in an array
     fruits.pop("Watermelon");
    console.log("after pop element :",fruits);

// ! unshift()
    // Add element in a staring
    fruits.unshift("Grapes");
    console.log("After unshift",fruits);

// ! shift()
 // delete  element in a staring
    fruits.shift();
    console.log("After shift",fruits);

// ! includes
    // Check element is available or not
    console.log(fruits.includes("Apple"));
    console.log(fruits.includes("Grapes"));


