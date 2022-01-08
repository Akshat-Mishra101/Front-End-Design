
let numbers = document.querySelectorAll(".numbers");
let display=document.querySelector(".display");
let counter=0;
numbers.forEach(button=>{
button.addEventListener("click",()=>{
    counter=counter+1;
    console.log("You Clicked "+button.innerHTML);
    display.innerHTML=display.innerHTML+button.innerHTML;
    });
});

document.querySelector(".clear").addEventListener("click",()=>{
display.innerHTML="";

});
document.querySelector(".add").addEventListener("click",()=>{
    display.innerHTML=display.innerHTML+"+";
    
    });

document.querySelector(".subtract").addEventListener("click",()=>{
    display.innerHTML=display.innerHTML+"-";
        
    });
document.querySelector(".divide").addEventListener("click",()=>{
    display.innerHTML=display.innerHTML+"/";
            
    });  
document.querySelector(".multiply").addEventListener("click",()=>{
    display.innerHTML=display.innerHTML+"*";
   
    });  
    document.querySelector(".output").addEventListener("click",()=>{
        display.innerHTML=math.evaluate(display.innerHTML);
       
        });  
    