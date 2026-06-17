// ! 1.Convert name to upper case

console.log(" 1. Convert name to upper case")
const name=["gagan","ishan","yogesh"]

const upper=name.map(name=>name.toUpperCase())
console.log(upper,"\n")
// Output: [ 'GAGAN', 'ISHAN', 'YOGESH' ]


// ! 2 Extract Product name
console.log("2. Extract Product name")
const products=[
    {id:1,name:"Laptop"},
    {id:2,name:"Phone"},
    {id:3,name:"Tablet"}
];

const name_list=products.map(products=> products.name);
console.log(name_list,"\n");

// Output: [ 'Laptop', 'Phone', 'Tablet' ]

// ! 3. Filter Long Word

console.log(" 3. Filter Long Word");
const words=["apple","banana","cat","elephant","dog"];
const long_words=words.filter(words=>words.length>5);
console.log(long_words,"\n");
//  Output:[ 'banana', 'elephant' ]


// ! 4.Filter Adults
console.log("4.Filter Adults");
const users=[
    {name:"A",age:16},
    {name:"B",age:22},
    {name:"C",age:19},
]

const adults=users.filter(users=>users.age>=18);
console.log(adults);
