//change the background RGB color randomly when the button is clicked
const bg = document.querySelector("body");
const btn = document.getElementById("btn");
console.log("hey");

btn.addEventListener("click", ChangeColor);

function ChangeColor() {
  console.log("hello");
  let RGB = "";
  setInterval(function(){
    for (let i = 0; i < 100; i++) {
    RGB =
      "rgb" +
      "(" +
      Math.round(Math.random() * 255).toString() +
      "," +
      Math.round(Math.random() * 255).toString() +
      "," +
      Math.round(Math.random() * 255).toString() +
      ")";
    
    console.log(typeof RGB);
    bg.style.backgroundColor = RGB;


  }},1000)
  
  
}
