function create(){
    const ul=document.getElementById("listing");
    const input=document.getElementById("what_to_do").value;
    console.log("hi")
    
    if(input==""){
        alert("Add your task");
    }
    else{
    const li=document.createElement('li');
    li.className="list";
    li.style.fontSize= "20px";
    li.innerHTML=input;
    const btn=document.createElement('span');
    btn.className="cut";
    btn.innerHTML="x";
    li.appendChild(btn);
    ul.appendChild(li);
    ul.addEventListener("click",(e)=>{
        if(e.target.className==="cut"){
            e.target.parentElement.remove();
        }
    })
}
}