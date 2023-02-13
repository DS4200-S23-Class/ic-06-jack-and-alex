console.log("linked")

const button = document.querySelector("#changeColor");
const rectangle = document.querySelector("#rectangle");

button.addEventListener("click", function() {
  rectangle.style.fill = "red";
});

const circle = document.querySelector("#circle");

circle.addEventListener("mouseover", function() {
  circle.style.fill = "orange";
});

circle.addEventListener("mouseout", function() {
  circle.style.fill = "black";
});