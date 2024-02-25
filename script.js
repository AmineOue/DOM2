document.addEventListener("DOMContentLoaded", function(event) {
    console.log("DOM content loaded");

});
let colorBox = document.getElementById("color-box");
let changeColor = document.getElementById("change-color-btn");

function getRandomColor(){
   var letter = "123456789ABCDEF"
   var color = "#"
   for(var i =0; i<6 ;i++ ){
    color += letter[Math.floor(Math.random()*16)];
   }
    colorBox.style.backgroundColor = color;    
}
console.log(getRandomColor())
console.log(changeColor)
changeColor.addEventListener("click",getRandomColor);