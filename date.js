/*
Name: Sara Fatah
Date created: 06/10/2025
Date last edited: 06/20/2025
Version: 2.0
Description: Homework 1 JS 
*/

//dynamic date js code
const d = new Date();
let text = d.toLocaleDateString();
document.getElementById("today").innerHTML = text;

//name slider js code
let slider = document.getElementById("range");
let output = document.getElementById("range-slider");
output.innerHTML = slider.value;

slider.oninput = function () {
    output.innerHTML = this.value;
};
