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


const hy=function (){
    console.log("Helooo")
}
// console.log(hy)



// ! High order function

// * 1.map()
const numbers=[1,2,3,4,5];
const t=function(num){
    return num*3;
}
const triplet=numbers.map(function(num){
    return num*3;
})
// const tripletdemo=numbers.map(t);
// console.log(tripletdemo);




// // * 1.filter()

const even=numbers.filter(function (num){
    return num%2===0;
})
// console.log(even);


// * 1.reduce()
const total=numbers.reduce(function (sum,num){
    return sum+num;
},0);


// This 0 is initial value
// console.log(total);



// Arrrow function
//! 1 Function Example
const minus= (a,b) =>{
    return a-b;
}
// console.log(minus(5,4));

//! 2 Function Example
const thrice=x => x*x*x;
// console.log(thrice(2))


// Arrow function with parameters

const double=numbers.map(num=> num*2);
// console.log(double);

// ! Hoisting 
    // Default behavior 
    // *    var undefines
    // *    let,const Reference error



// ! Closures

function outer(){
    let count=0;
    // Inner function will not work if we dont call outer function
    function inner(){
    count++;
    console.log(count);
}
return inner;
}

const counter=outer();
// * const c=inner() Not work
counter();
counter();




function create_bank(initial_balance){
    // Parent b
    let b=initial_balance;
    console.log("Initial amount::",b);
    return {
         deposit(amount){
            // child 
            b+=amount;
            console.log("Deposit amount::",amount);
            console.log("Total amount after deposit",b);
        },
    
        withdraw (amount){
            b-=amount;
            console.log("Withdraw amount",amount);
            console.log("Total amount after withdraw",b);
        },

      
    };
}

// const bank_account=create_bank(1000);
// bank_account.deposit(500);
// bank_account.withdraw(200);


// ! Anomous function
function multiplier(factor){
    // anomous function because function without its name
    return function(number){
        return factor*number;
    }
}

const mul=multiplier(3);
console.log(mul(10));