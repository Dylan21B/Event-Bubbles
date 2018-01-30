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

var yodaImage = document.getElementById("theYoda");
document.getElementById("change-color").addEventListener("click", () =>{
   yodaImage.classList.toggle("flashy");
});

document.getElementById("force-lots-of")
  .addEventListener("click", function() {
  yodaImage.classList.toggle("moreforce");
});

document.getElementById("add-border")
  .addEventListener("click", function() {
  yodaImage.classList.toggle("bordered");
});


document.getElementById("starwars").addEventListener("click", () => {
   if (event.target.tagName.toLowerCase() === "li"){
       console.log("You clicked on an <li> item");
      
   }

   if(event.target.className == "list-item"){
       console.log("you clicked on list-item element")
   }
});
var quotesArray = [
    "A long time ago in a galaxy far, far away…",
    "Use the force, Luke.",
    "The force is strong with this one.",
    "Do. Or do not. There is no try.",
    "Fear is the path to the dark side.",
    "Someday I will be the most powerful Jedi ever.",
    "You were the chosen one!"
    ]

    quotesArray.forEach( (quote, index) => {
        let quoteBlock = `<div id="quote--${index}">
                         <h3>"${quote}" - Star Wars</h3>
                         </div>`;

        let quoteDiv = doucument.createElement("div");
        quoteDiv.innerHTML = quoteBlock;

        document.getElementById("stickItHere").appendChild(quoteDiv);

        let quoteDom = document.getElementById(`quote--${index}`);
        quoteDom.addEventListener("click", () => {
            event.currentTarget.classList.add("accent");
        });
    });
