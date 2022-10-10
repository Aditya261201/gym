const images = [
    "./images/besttrainer.png", "./images/equipments.png", "./images/female trainer.png", "./images/yoga.png", "./images/results.png"];

var l1 = document.getElementById('i1');
var l2 = document.getElementById('i2');
var l3 = document.getElementById('i3');
var l4 = document.getElementById('i4');
var l5 = document.getElementById('i5');


l1.addEventListener('click',()=>{
    document.getElementById('changing_image').src=images[0];
})
l2.addEventListener('click',()=>{
    document.getElementById('changing_image').src=images[1];
})
l3.addEventListener('click',()=>{
    document.getElementById('changing_image').src=images[2];
})
l4.addEventListener('click',()=>{
    document.getElementById('changing_image').src=images[3];
})
l5.addEventListener('click',()=>{
    document.getElementById('changing_image').src=images[4];
})
