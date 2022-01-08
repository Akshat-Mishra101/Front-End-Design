let taskwindow=document.querySelector(".tasks");
let add_button=document.querySelector(".butt");
let text_aread=document.querySelector(".textar");
let task_section=document.querySelector(".tasks");

let counter=0;

document.querySelectorAll(".delbt").forEach((item)=>item.addEventListener('click',(it)=>{
    item.parentElement.classList.add("deleted");
    setTimeout(function(){ 

        item.parentElement.remove();
        
    }, 400); 

}));



add_button.addEventListener('click',()=>{
   console.log("hi");
task_section.innerHTML=task_section.innerHTML+'<div class="sample-task appear"><p class="task-name">'+text_aread.value+'</p><button class="w3-xlarge chk"><i class="fa fa-check " aria-hidden="true"></i></button><button class="w3-xlarge chk delbt"><i class="fa fa-trash"></i></button></button></div>';
addTheQuerySelector();
});


function addTheQuerySelector(){
  
    document.querySelectorAll(".delbt").forEach((item)=>item.addEventListener('click',(it)=>{
        item.parentElement.classList.add("deleted");
        setTimeout(function(){ 

            item.parentElement.remove();
            
        }, 400); 
       
    }));
    
   
    
}





