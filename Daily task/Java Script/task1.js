// ! Top performing Students

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


const top_performer=avg.filter(student => student.average>=85);
const sort_student=avg.sort((a, b) => a.average - b.average);

console.log(avg);
console.log(top_performer);
console.log(sort_student);

// ! E-commerce Revenue Analysis

sales_data=[{category:"Electronics",amount:500},{category:"Books",amount:100},{category:"Electronics",amount:300},{category:"Clothing",amount:200}];

const group_category=sales_data.map(data=>{
    
}

)