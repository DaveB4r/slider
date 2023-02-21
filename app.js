"use strict"
let slider = document.getElementById('slider');
let num = 0;
setInterval(() => {
    slider.style.backgroundImage = `url("./images/${++num}.jpg")`;
    if(num > 2) num = 0;
},3000)