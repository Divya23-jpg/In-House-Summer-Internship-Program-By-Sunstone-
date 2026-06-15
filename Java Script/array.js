
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


// ! indexof()
    // show index of an element .
    //  If element is not present so gives -1.
    console.log(fruits.indexOf("Banana"));
    console.log(fruits.indexOf("Watermelon"));


// ! join
    // Join elememt with any num,special cgaracter or anything
    console.log(fruits.join("@@"));


// ! Slice
    // Element batayega us range k exclude last value
    console.log(fruits.slice(1,3))


// ! Splice
    // Element batayega us range k include last  value
    // console.log(fruits.splice(1,3))




// ! looping in Array

    // for loop
    console.log("For loop:")
    for(let i =0;i<fruits.length;i++){
        
        console.log(fruits[i]);
    }

console.log('\n');

    // for of loop
    console.log("For of loop:")
    for(let f of fruits){
        console.log(f);
    } 
console.log('\n');

    // for each 
    console.log("For each loop:")
    fruits.forEach(function(i){
        console.log(i);
    })




// ! Advance method in array

// ! map

    // sare element par condition apply krta h
    console.log("MAP function")
// ? using function
    array=[1,2,3,4]
    const double=array.map(function(x){
        return x*2;
    });
    console.log(array);
    console.log(double);


// ? without function
    console.log('\n');
    const double_demo=array.map(x=>x*2);
    console.log(array);
    console.log(double_demo);

console.log('\n');

// ! filter
    // tumhari consition karega jo bhi element condition me pass  hoga voh new array me jayega
      console.log("FILTER  function")
    const even=array.filter(function(x){
        return x%2==0;
    });
     console.log(array);
    console.log(even);
 
console.log('\n');
    
    const even_demo=array.filter(x=> x%2==0);
    console.log(array);
    console.log(even_demo);


console.log('\n');

// ! reduce
    // sare element  ko ek variable me convert krdega

    console.log("REDUCE function")
    const sum=array.reduce(function(sum,x){
        return sum+x;
    },0);
    console.log(array);
    console.log(sum);

console.log('\n');

    const sum_demo=array.reduce((sum,x)=> sum+x,50); 
    // 50 is  a default value means sum=50 initial value
    console.log(array);
    console.log(sum_demo);


console.log('\n');
    const sum_demo2=array.reduce((sum,x)=> sum+x);
    console.log(array);
    console.log(sum_demo2);



// ! find
    // jaise  he condition true hue than return 
console.log('\n');
console.log("Find function")
    const f= array.find(function(x){
        return x==3;
    });
    console.log(array)
    console.log(f)

console.log('\n');
    const f_demo=array.find(x=> x==3);

    console.log(array)
    console.log(f_demo)



// ! some
    // batata hai ki condition elements satisfy kr rha h ya nhi
console.log('\n');
console.log('Some function');
    const s=array.some(function(x){
        return x>3;
    });

    console.log(array)
    console.log(s)

console.log('\n');
    const s_demo=array.some(x=> x>3);
    console.log(array)
    console.log(s_demo)


// ! every 
    // batata hai ki sare  elements condition  satisfy kr rha h ya nhi

console.log('\n');
console.log('EVERY function');
    const e=array.every(function(x){
        return x>5;
    });

    console.log(array)
    console.log(e)

console.log('\n');
    const e_demo=array.every(x=> x>5);
    console.log(array)
    console.log(e_demo)