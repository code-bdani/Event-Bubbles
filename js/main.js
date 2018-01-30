// grabs everything from HTML under "page-header"
let header = document.getElementById("page-header");
// grabs everything from the "pre" element
let saywhat = document.getElementById("output");

console.log("header", header);

// 
function handleHeaderMouseEvent(event) {
    // console.log("event", event.target, event.currentTarget);
    saywhat.innerHTML = "The Force is strong with this one."
}

function handleHeaderMouseOut(event) {
    saywhat.innerHTML = "Remember... the Force will be with you always."
}

let listItems = document.getElementsByClassName("list-item");
// console.log("listItems", listItems)

// loops through each list item until it reaches the end of it's length
for(var i = 0; i < listItems.length; i++) {
    listItems.item(i).addEventListener("click", handleClick);
}

function handleClick(MouseEvent) {
    let elementText = MouseEvent.target.innerHTML;
    saywhat.innerHTML = "hummm, " + elementText + " clicked you have.";
}

header.addEventListener("mouseover", handleHeaderMouseEvent);
header.addEventListener("mouseout", handleHeaderMouseOut);
