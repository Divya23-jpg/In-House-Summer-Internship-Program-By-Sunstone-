function greet(name,callback){
    console.log(`hello ${name}`);
    callback();
}
function god(){
    console.log("goodboy")
}
greet("rohan",god);

// Callback 

let i=1;
console.log("Before download")
setTimeout(()=>{
    console.log("do2nload completed")
   let time= setInterval(()=>{
        console.log(i)
        i=i+1;
        if(i>10){
            clearInterval(time);
            console.log("stoped")
        }
    },100)
},1000)
console.log("After download")


// const r= loginuser(function(user){
//     gp(user,function(profile){
//         gp(profile,function(post){
//             gc(post,function(comments){
//                 console.log("comments");
//             });
//         });
//     });
// });


//! promise
const promise =new Promise((res,rej)=>{
    let s=false;
    if(s){
        res("fullfiled");
    }
    else{
        rej("rejected");
    }

});
promise.then(result=>{
    console.log(result)
})
.catch(error=>{
    console.log(error)
})
