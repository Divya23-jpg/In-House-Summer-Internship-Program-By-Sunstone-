// function add(x,y){
//     return x+y;
// }


// console.log(add(10,6))
// console.log(add("10",6))




// function greet(name){
//     console.log("Welcom " + name);
//     return "HELLLOOOOO"    // if return not defined than undefined will show in output with console value
// }

// function user(a){
//     return console.log(a("Divya"))
// }

// user(greet);



// Function  Parameter and argument

// function Expression


// const hy=function greet(){
//     console.log("Helooo")
// }
// console.log(hy)



// ! High order function

const numbers=[1,2,3,4,5];
const t=function(num){
    return num*3;
}
const triplet=numbers.map(function(num){
    return num*3;
})
const tripletdemo=numbers.map(t);
console.log(tripletdemo);

console.log(triplet);