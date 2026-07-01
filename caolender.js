
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