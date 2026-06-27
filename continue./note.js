const closeBtn=document.querySelectorAll(".plus")
const modal=document.querySelector("#myModal")
closeBtn.forEach(function(q) {
    q.addEventListener("click",function(){
        c = q.closest(".today1, .today2, .today3").querySelector(".list");
        modal.style.display="flex"
    })
    const closebtn = document.querySelector(".close-button");
if(closebtn){
    closebtn.addEventListener("click",function(){
        modal.style.display="none";
    })
}
    
});

const modalmsg=document.querySelector("#modal-msg")
const subb=document.querySelector(".sub")
const t=document.querySelector(".result")
const pdateInput = document.querySelector(".pdate"); 
const ptimeInput = document.querySelector(".ptime"); 
let c;
let istask=true
subb.addEventListener("click",function(){
       if(istask){
        const r=t.value.trim()
        const date=pdateInput.value.trim()
        const time=ptimeInput.value.trim()
    
   
       const d=Array.from(c.children).some(function(li){
       return li.textContent.split(" (تاریخ:")[0] === r
})
if(d && r!==""){
    modalmsg.textContent="This task has already been registered"
    modalmsg.style.display="flex"
    setTimeout(function(){
        modalmsg.style.display="none"
    },3000)
    return
}
            else{
            const newItem=document.createElement("li")
            const checkbox=document.createElement("input")
            checkbox.type="checkbox"
            checkbox.checked = false;
            checkbox.addEventListener("change",function(e){
                if(e.target.checked){
                    e.target.parentElement.style.textDecoration="line-through"
                }
                else{
                     e.target.parentElement.style.textDecoration="none"
                }
            })
            newItem.appendChild(checkbox)
            const newSpan=document.createElement("span")
            newSpan.textContent=`${r} (تاریخ: ${date}) (ساعت: ${time})`
            newItem.appendChild(newSpan)
            c.appendChild(newItem)
            subb.addEventListener("click",function(){
            modal.style.display="none"
             t.value=""
             pdateInput.value=""
             modalmsg.textContent=""
             modalmsg.style.display="none"
      })  
            closeAll()
        }    
    } 
       
})


t.addEventListener("input",function(){
    const r=t.value.trim()
    if(!c) return
    const d=Array.from(c.children).some(function(li){
    return li.textContent.split(" (تاریخ:")[0] === r
})
if(d && r!==""){
    modalmsg.textContent="This task has already been registered"
    modalmsg.style.display="flex"
}
else{

    modalmsg.textContent=""    
    modalmsg.style.display="none"
        
}
})




$(".pdate").pDatepicker({
    format: 'YYYY/MM/DD',
    autoClose: true,
    calendarType: 'persian',
    calendar:{
        persian: {
            locale: 'fa'
        },
        gregorian: {
            show: false 
        }
    },
    toolbox:{
        calendarSwitch:{
            enabled: false 
        }
    }
});
$(".ptime").pDatepicker({
    onlyTimePicker: true, 
    format: 'HH:mm',      
    autoClose: true,
    calendarType: 'persian',
    calendar:{
        persian: {
            locale: 'fa' 
        }
    }
});





