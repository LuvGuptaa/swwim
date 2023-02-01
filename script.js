const btn1 = document.querySelector('.cont1');
const btn2 = document.querySelector('.cont2');
const btn3 = document.querySelector('.cont3');
const btn4 = document.querySelector('.cont4');

btn1.addEventListener('click',function(){
    document.getElementById("hide1").classList.toggle("hide");
    document.getElementById("cross1").classList.toggle("rotating");
})
btn2.addEventListener('click',function(){
    document.getElementById("hide2").classList.toggle("hide");
    document.getElementById("cross2").classList.toggle("rotating");
})
btn3.addEventListener('click',function(){
    document.getElementById("hide3").classList.toggle("hide");
    document.getElementById("cross3").classList.toggle("rotating");
})
btn4.addEventListener('click',function(){
    document.getElementById("hide4").classList.toggle("hide");
    document.getElementById("cross4").classList.toggle("rotating");
})

