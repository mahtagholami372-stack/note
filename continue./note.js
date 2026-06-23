const closeBtn=document.querySelectorAll(".plus")
const modal=document.querySelector("#myModal")
closeBtn.forEach(function(q) {
    q.addEventListener("click",function(){
        modal.style.display="flex"
    })
    
});

const modalmsg=document.querySelector("#modal-msg")
const subb=document.querySelector(".sub")
const t=document.querySelector(".result")
subb.addEventListener("click",function(){
       const r=t.value.trim()
       if(r===""){
        modalmsg.textContent="Please fill the box"
        modalmsg.style.display="flex"
        setTimeout(function(){
            modalmsg.style.display="none"
        },3000)
       }
})
const pdateInput = document.querySelector(".pdate"); 
const ptimeInput = document.querySelector(".ptime"); 
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

const closebtn = document.querySelector(".close-button");
if(closebtn){
    closebtn.addEventListener("click",function(){
        modal.style.display="none";
    })
}