"use strict"
let rightControl = document.getElementById('right-control');
let leftControl = document.getElementById('left-control');
let playSlider = false;
let num = 3;
let runSlider = "";
leftControl.addEventListener('click', () => {   
    if(num == 1) num = 4;
    --num
    playSlider = false;
    sliderPlay(playSlider);
    sliderControl(num);
});
rightControl.addEventListener('click', () => {
    if(num > 2) num = 0;
    ++num
    playSlider = false;
    sliderPlay(playSlider);
    sliderControl(num);
});
const sliderControl = num => {
    let slider = document.getElementById('slider');
    slider.style.backgroundImage = `url("./images/${num}.jpg")`;
}
const sliderPlay = actn =>{
    if(actn){
        this.runSlider = setInterval(() => {
            if(num == 3) num = 0;
            sliderControl(++num);
        },3000); 
        console.log('running');
    }else{
        clearInterval(this.runSlider);
        console.log('paused');
    }
       
}
slider.addEventListener('click', ()=>{
    playSlider = !playSlider;
    sliderPlay(playSlider);
});