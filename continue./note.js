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


const box=document.querySelectorAll(".today1, .today2, .today3")
let drag=null
box.forEach(r =>{
    r.setAttribute("draggable", "true")
    r.addEventListener("dragstart",function(){
        drag=this
        drag.classList.add("shoot")
    })
    r.addEventListener("dragover",function(e){
        e.preventDefault()
    })
    r.addEventListener("drop",function(){
        if(drag && drag!==this){
            const dragTask=drag.querySelector(".list")
            const thisTask=this.querySelector(".list")
            if(dragTask && thisTask){
                const tempHTML=dragTask.innerHTML
                dragTask.innerHTML=thisTask.innerHTML
                thisTask.innerHTML=tempHTML
            }
            let dragclass=drag.classList
            let thisclass=this.classList
            dragclass.forEach(item =>{
                if(item.startsWith("today")) dragclass=item
            })
            thisclass.forEach(item =>{
                if(item.startsWith("today")) thisclass=item
            })
            if(dragclass && thisclass){
                drag.classList.remove(dragclass)
                drag.classList.add(thisclass)
                this.classList.remove(thisclass)
                this.classList.add(dragclass)
            }
            setTimeout(function(){
                if(drag) drag.classList.remove("shoot")
            },500)
        }
        drag=null
    })
      r.addEventListener("dragend",function(){
            if(drag)drag.classList.remove("shoot")
                drag=null
        })
})


const toggleBtn=document.querySelector(".toggle")
const circleBtn=document.querySelector(".circle")

toggleBtn.addEventListener("click",function(){
    document.body.classList.toggle("dark-mode")
    if(document.body.classList.contains("dark-mode")){
        toggleBtn.textContent="☀️"
    }
    else{
        toggleBtn.textContent="🌙"
    }
})

const searchinput=document.querySelector(".search-input")
const searchBtn=document.querySelector(".searchicon")
document.addEventListener("click",function(event){
    if(event.target.closest(".searchicon")){
          searchinput.style.display="block"
    }

})


const allDays=document.querySelectorAll(".today1, .today2, .today3")
const weekDays={
  "Saturday": "today1",
  "Sunday": "today2",
  "Monday": "today1",
  "Tuesday": "today2",
  "Wednesday": "today3",
  "Friday": "today1"
};
searchinput.addEventListener("input",function(){
    const searchitem=searchinput.value
    allDays.forEach(item =>{
        item.classList.remove("hilight")
    })
    if(searchitem){
        for(const days in weekDays){
            if(days.includes(searchitem)){
                const daysbox=weekDays[days]
                const targetbox=Array.from(allDays).find(item => item.classList.contains(daysbox))
                if(targetbox){
                    targetbox.classList.add("hilight")
                }
            }
        }
    }
}) 
const tt=document.querySelector(".not")
tt.addEventListener("click",function(){
    window.location.href="note2.html"
})





