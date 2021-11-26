let eventAdder = document.getElementById("AddEvent");
let timeCell = document.getElementsByClassName("timeCell");


function show(){
    if(eventAdder.classList.contains("show")){
        setTimeout(delayHide, 100);
    }
    if(eventAdder.classList.contains("hidden")){
        setTimeout(delayShow, 100);
    }
}

function delayShow(){
    eventAdder.classList.add("show");
    eventAdder.classList.remove("hidden");
    console.log("showing it");
}
function delayHide(){
    eventAdder.classList.add("hidden");
    eventAdder.classList.remove("show");
    console.log("hiding it");
}