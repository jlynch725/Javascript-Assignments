function addition_function(p1, p2) {
   var A = p1 + p2;
    document.getElementById("math").innerHTML = A
}

function sub_function(p1, p2) {
    var B = p1 - p2;
     document.getElementById("math2").innerHTML = B
 }

 function multiply_function(p1, p2) {
    var C = p1 * p2;
     document.getElementById("math3").innerHTML = C
 }

 function divide_function(p1, p2) {
    var D = p1 / p2;
     document.getElementById("math4").innerHTML = D
 }


 
 function moremath_function(p1, p2, p3, p4, p5) {           //I decided to used variables most of the time//
    var E = (p1 / p2) * p3 / p4 - p5;
     document.getElementById("math5").innerHTML = E
 }

 function modulus_operator() {
     var simple_Math = 27 % 5;
     document.getElementById("math6").innerHTML = "When you divide 27 by 5 you have a remainder of: " + simple_Math;
 }

 function negation_operator() {
    var x = 10;
    document.getElementById("math7").innerHTML = -x
}


function increment_operator() {
    var x = 5;
    x++;
    document.write(x);
}



function decrement_operator() {
    var x = 5;
    x--;
    document.write(x);
}

window.alert(Math.random(0));                       //Generates a random number//
window.alert(Math.random() *100);

function round_operator(p2) {                           //Math operator method//
    var x = Math.round(5.1232);
    document.getElementById("math10").innerHTML = x
}