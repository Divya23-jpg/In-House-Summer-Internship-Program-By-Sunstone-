
// ! get element for css by id 

// Dom
let dom=document.getElementById('Dom');
dom.innerText="Divya Kumawat";
dom.style.backgroundColor='red';
dom.style.height='50px';

// Bom
let bom = document.getElementsByClassName('Bom'); // returns HTMLCollection
bom[0].style.backgroundColor = 'yellow';
bom[0].style.height = '50px';

// Button
let btn = document.getElementById('btn');
btn.addEventListener("click",function(){
    btn.style.color='black';
    btn.style.backgroundColor='green';
})

