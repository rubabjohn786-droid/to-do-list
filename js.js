let btn=document.querySelector("#btn");
let ol=document.querySelector("#ol");
let input=document.querySelector("#input");


btn.addEventListener("click",()=>{
      if(input.value===""){
     btn.disabled=true;
     return;
    }
    let inputVal=input.value;
  
    let checkbox=document.createElement("input");
checkbox.type="checkbox";
let li=document.createElement("li");
let span=document.createElement("span");
span.textContent=inputVal;


checkbox.addEventListener("change",()=>{
    if(checkbox.checked){
        span.style.textDecoration="line-through";
    }else{
        span.style.textDecoration="none";
    }
});
li.appendChild(checkbox);
li.appendChild(span);
ol.appendChild(li);


input.value="";
})
