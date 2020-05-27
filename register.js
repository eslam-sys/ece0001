var myInput = document.getElementById("psw");
var  upper = document.getElementById("fs");
var  digit = document.getElementById("ss");
var  spe = document.getElementById("ts");
var  len = document.getElementById("fos");
var  spa = document.getElementById("fis");


myInput.onkeyup = function () {
    
    "use strict";
    
    var capital = /[A-Z]/g,
        res = myInput.value.charAt(0);
    if (res.match(capital)) {
        upper.classList.add("ok");
        upper.classList.remove("not");
    } else {
        upper.classList.add("not");
        upper.classList.remove("ok");
    }
    
    var dig = /[0-9]/g;
    if(myInput.value.match(dig)){
        digit.classList.add("ok");
        digit.classList.remove("not");
    }
    else{
         digit.classList.add("not");
        digit.classList.remove("ok");
    }
    
    var special = /[*\-\_\#\&\@\!\^\%\$]/g;
    if(myInput.value.match(special)){
        spe.classList.add("ok");
        spe.classList.remove("not");
    }
    else{
         spe.classList.add("not");
        spe.classList.remove("ok");
    }
    
    if(myInput.value.length == 8 ){
       len.classList.add("ok");
        len.classList.remove("not");
    }
    else{
        len.classList.add("not");
        len.classList.remove("ok");   
    }
    var space = " ";
    if(myInput.value.match(space)){
        
       spa.classList.add("not");
        spa.classList.remove("ok");
    }
    else{
        spa.classList.add("ok");
        spa.classList.remove("not");      
    }
}




