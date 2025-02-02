const RNGbutton = document.getElementById("RNGbutton");
const RNGLabel = document.getElementById("RNGLabel");
const min = 1;
const max = 99999;
let randomNum;

RNGbutton.onclick = function(){
    randomNum = Math.floor(Math.random() * max-min) + min;
    RNGLabel.textContent = randomNum;
}