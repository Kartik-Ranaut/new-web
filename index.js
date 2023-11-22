let back = document.querySelector("#back");
let front= document.querySelector("#front");
let inp1= document.querySelector("#one");
let inp2= document.querySelector("#two");
let inp3= document.querySelector("#three");
let inp4= document.querySelector("#four");
let inp5= document.querySelector("#five");
let info = document.querySelector(".info");
let astitva = document.querySelector("#astitva");
let inps=document.querySelectorAll(".inpp");


var div = document.createElement("div");
div.style.width = "100px";
div.style.height = "100px";
div.style.background = "red";
div.style.color = "white";
div.style.position ="absolute"
div.innerHTML = "Hello";
astitva.addEventListener("mouseover",()=>{

    info.appendChild(div);
})
astitva.addEventListener("mouseout",()=>{
    div.remove();
})

function backed(){
    if(inp1.checked){
        return inp5;
    }
    else if(inp2.checked){
        return inp1;
    }
    else if(inp3.checked){
        return inp2;
    }
    else if(inp4.checked){
        return inp3;
    }
    else if(inp5.checked){
        return inp4;
    }
    else{
        return inp1;
    }
};


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
back.addEventListener("click",()=>{
    backed().checked=true;
})
front.addEventListener("click",()=>{
    checkd().checked=true;
})