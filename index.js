let back = document.querySelector(".back");
let front= document.querySelector(".front");
let inp1= document.querySelector("#one");
let inp2= document.querySelector("#two");
let inp3= document.querySelector("#three");
let inp4= document.querySelector("#four");
let inp5= document.querySelector("#five");

let inps=document.querySelectorAll(".inpp");


function checkd(){
    if(inp1.checked){
        return inp2;
    }
    else if(inp2.checked){
        return inp3;
    }
    else if(inp3.checked){
        return inp4;
    }
    else if(inp4.checked){
        return inp5;
    }
    else if(inp5.checked){
        return inp1;
    }
    else{
        return inp1;
    }
};
setInterval(()=>{
    
    console.log(checkd().checked=true);
},2000)
// inps.forEach((element)=>{
//     element.addEventListener('click',()=>{

//     })
// })
