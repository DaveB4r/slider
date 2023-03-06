"use strict"
let rightControl = document.getElementById('right-control');
let leftControl = document.getElementById('left-control');
let playSlider = true;
let num = 3;
let runSlider = "";
let playIcon = document.getElementById('play-icon');
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
 
  let classPlay = "fa-solid fa-";
  if(actn){
    this.runSlider = setInterval(() => {
      if(num == 3) num = 0;
      sliderControl(++num);
    },3000); 
    playIcon.className = `${classPlay}play`;
    console.log('running');
  }else{
    clearInterval(this.runSlider);
    playIcon.className = `${classPlay}pause`;
    console.log('paused');
  }
       
}
window.addEventListener('load', sliderPlay(playSlider));
playIcon.addEventListener('click', ()=>{
  playSlider = !playSlider;
  sliderPlay(playSlider);
});