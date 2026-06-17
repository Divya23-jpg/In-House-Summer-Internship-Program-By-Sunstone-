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
// For name only
// const adults=users.filter(users=>users.age>=18).map(users=>users.name);
console.log(adults,'\n');

// ! 5. Count Total Character

console.log("5. Count Total Character");
const word=["hello","world","javascript"]

// ? Using map() and reduce()
// const total=word.map(words=>words.length).reduce((sum,wordr)=>sum+wordr,0);

// ? using reduce() only
const total=word.reduce((sum,word)=>sum+word.length,0)
console.log("Total Words:",total,"\n")


// ! 6. Square of Even number
console.log("6. Square of Even number");
const nums=[1,2,3,4,5,6,7,8];
const even_square=nums.filter(nums=> nums%2==0).map(nums=>nums*nums);
console.log("Square of even number:",even_square,"\n")


// ! 7.Total salary of Employee
console.log("7.Total salary of Employee");
const emp=[
    {name:"A",salary:30000},
    {name:"B",salary:50000},
    {name:"C",salary:40000},
]

const total_salary=emp.reduce((sum,ts)=> sum+ts.salary,0)
console.log("Total salary",total_salary,"\n")


// !  8.Names of Passed student

console.log("8.Names of Passed student");
pass=40;
const stu=[
    {name:"A",marks:35},
    {name:"B",marks:75},
    {name:"C",marks:45},
    {name:"D",marks:25}
]

const passed_stu= stu.filter(stu=>stu.marks>pass).map(stu=>stu.name);
console.log("Passed student name:",passed_stu,"\n")


// ! 9.Average Students
console.log("9.Average Students")
const marks=[80,90,70,60];
const average=marks.reduce((sum,mark)=> sum+mark,0)/marks.length
console.log("Average:",average,"\n")


// ! 10.Count Occurenece of elements
const fruits=["apple","banana","apple","orange","banana","apple"];

const c=fruits.reduce((sum,i)=>sum[i]+i,0);
console.log(c)