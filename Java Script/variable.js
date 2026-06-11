
// var cam be redeclared
// var name="Divya";
// var name="Rohan";
// console.log(name);


// let variable cannt redeclare the variable
// let a='kratika';
// let a='ronak';
// console.log(a);



// const cannot be reclare the 
// const b=10;
// const b=9;
// console.log(b);




// let fruit=['apple','mango']
// for(let key in fruit){
//     console.log(fruit[key]);
// }




// let n=5;
// for(let i=1;i<=n;i++){
//     for(let j=1;j<=n;j++){
//         console.log(j)
//     }
//    console.log("")
// }

let n = 5; // height of triangle
for (let i = 1; i <= 2*n-1; i++) {
  let row = "";
  for (let j = 1; j <= i; j++) {
    row += j + " ";
  }
  console.log(row);
}
for (let i = 2*n-1; i >=n; i--) {
  let row = "";
  for (let j = 1; j <= i; j++) {
    row += j + " ";
  }
  console.log(row);
}
