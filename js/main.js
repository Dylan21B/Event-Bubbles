let header = document.getElementById("page-header");
let satwhat = document.getElementById("output");
console.log("header", header);

function handleHeaderMouseEvent(event){
//     console.log("event", event.target);
  saywhat.innerHTML = "May the force be with you";
 }

function handleHeaderMouseOut(event){
   saywhat.innerHTML = "remember... the force will be with oyu always.";
}

let listItems = document.getElementsByClassName("list-item");

for(var i = 0; i < listItems.length; i++){
    listItems.item(i).addEventListener("click", handleClick);
}

function handleClick(MouseEvent){
    let elementText = MouseEvent.target.innerHTML;
saywhat.innerHTML = "humm," + elementText + " clicked you have";
}

header.addEventListener("mouseover", handleHeaderMouseEvent);
header.addEventListener("mouseout", handleHeaderMouseOut);
