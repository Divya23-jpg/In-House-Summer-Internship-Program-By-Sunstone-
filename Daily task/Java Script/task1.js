// ! 1.Student Average Calculator
    //  Calculate  average marks for all students 
    //  Returns an array containing student names and averages

const details=[{name:"John",marks:[80,90,85]},{name:"Emma",marks:[95,92,98]},{name:"John",marks:[60,70,65]}
]
const avg=details.map(student =>
    {
    const total=student.marks.reduce((sum,mark)=> sum+mark,0);
    return{
        name: student.name,
        average: total/student.marks.length
    };
});

console.log(avg);


// ! 2.Total revenue
    //  Find total Revenue from all sales 

sales_data=[{category:"Electronics",amount:500},{category:"Books",amount:100},{category:"Electronics",amount:300},{category:"Clothing",amount:200}];

const totalRevenue = sales_data.reduce((sum, item) => {
  return sum + item.amount;
}, 0);

console.log("Total Revenue:", totalRevenue);




// ! 3.Count words
    // Convert all words into lowercase
    // Count how many times the word "fox" appears.


const phrase= "The fox is quick. The fox is smart." ;
// * Convert into  lowercase
const lower=phrase.toLowerCase(phrase);
console.log(lower)

// Count number of fox in phrase
const count=phrase.split('fox').length-1;
console.log(count)


// ! 4. Employee Salary List 
    // Extract only employee salaries.  
    //  Find the total salary paid. 

emp_sales=[ 
{ name: "A", salary: 50000 }, 
{ name: "B", salary: 40000 }, 
{ name: "C", salary: 60000 }
];

// * Only salary
const only_salary=emp_sales.map(emp => emp.salary);
console.log("Only Slaray of each Employe:",only_salary);

// * Total salary 

const total=emp_sales.reduce((sum,item) =>{
    return sum+=item.salary;
},0);
console.log("Total Salary grid:",total);




// ! 5. Available Products
    // Remove out-of-stock products.  
    // Return the names of available products.  

const products=[ 
{ name: "Laptop", stock: 5 }, 
{ name: "Phone", stock: 0 }, 
{ name: "Tablet", stock: 10 }];

// * Remove out of stock Product
const removed=products.filter(products => products.stock >0);
// * Return the names pf available products
console.log(removed)



// ! 6.Post Likes Analysis
    // Find total likes across all posts.   
const post_like=[ 
{ postId: 1, likes: 100 }, 
{ postId: 2, likes: 200 } ]


const total_like=post_like.reduce((sum,item) =>{
    return sum+=item.likes;
},0)

console.log(total_like)



// ! 7. Highly Rated Movies 
    // Keep only movies with rating greater than 8.  
    // Return movie titles. 

const movies=[ 
{ title: "Movie A", rating: 8.5 }, 
{ title: "Movie B", rating: 6.0 }]

// *  movie , ratting greater than 8
const highly_rated=movies.filter(movies => movies.rating > 8);
console.log(highly_rated)

const only_title=movies.map(movies => movies.title);
console.log("Only Title ",only_title)




// ! 8. Customer Spending 
    // Find total spending of all customers. 

const customers_spending=[ 
{ customer: "John", amount: 50000 }, 
{ customer: "Emma", amount: 20000 }]

const total_spending=customers_spending.reduce((sum,item) =>{
    return sum+=item.amount;
},0)

console.log("Total spending:",total_spending)



// !9. Bank Transactions 
    // Find total credit amount only.  
const bank=[ 
{ type: "credit", amount: 1000 }, 
{ type: "debit", amount: 300 }, 
{ type: "credit", amount: 500 }]


const total_credit=bank.reduce((sum,item) =>{
    return sum+=item.amount;
},0)

console.log("Total Credit",total_credit)


// ! 10. User Actions
    // Count how many users performed "login". 
const user_action=[ 
{ user: "A", action: "login" }, 
{ user: "B", action: "logout" }, 
{ user: "C", action: "login" }]

const loginCount = user_action.filter(item => item.action === "login").length;
console.log("Number of logins:", loginCount);