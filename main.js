console.log("theMessage");

const theButton = document.querySelector('button');
let theBody = document.querySelector('body');
let theThesis = document.getElementById("theMainPoint")

theButton.addEventListener('click', beTheChange )

function beTheChange(){
    console.log("you clicked!");
    theThesis.style.backgroundColor = "White";
    theBody.style.backgroundColor = "yellow"
    theThesis.textContent = "DANGER"
}
function beTheChange(){
    console.log("you clicked!");
    theThesis.style.backgroundColor = "pink";
    theBody.style.backgroundColor = "pink"
    theThesis.textContent =CLOUDS
}