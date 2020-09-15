document.write(typeof "word");              //provides the type of data entered//

function my_function() {
    document.getElementById("Test").innerHTML = 0/0;       // NaN example //
}

function my_function2() {
    document.getElementById("Test2").innerHTML = isNaN("This is a string");  //Returns t/f based on if dats is not a number//
}

function my_function3() {
    document.getElementById("Test3").innerHTML = isNaN("007");
}

function infinity_function() {
    document.getElementById("Test4").innerHTML = 4E389;      // returns infinity, number too large for computer//
}

function neg_infinity_function() {
    document.getElementById("Test5").innerHTML = -3E400;        //Negative infinity//
}

function True_function() {
    document.getElementById("Test6").innerHTML = 2 < 10;       //Boolean examples with greater/less than symbol//
}

function False_function() {
    document.getElementById("Test7").innerHTML = 2 > 10;
}

console.log(2+6)

function coercion_function() {
    document.getElementById("Test8").innerHTML = ("12" + 7);  // strings the data together regardless of type//
}

console.log(2 > 6)                                      //records number in the consol//

function True2_function() {
    document.getElementById("Test9").innerHTML = (10 + 5) == 15;  //More boolean statements, checking if two values are equal//
}

function False2_function() {
    document.getElementById("Test10").innerHTML = (12 + 5) == 19;  //Returns false//
}

function True3_function() {
    x = 4
    y = 2 + 2
    document.getElementById("Test11").innerHTML = (x === y);  // the next 4 check if the value and type of data are the same//
}

function False3_function() {                                
    x = "13"
    y = 4
    document.getElementById("Test12").innerHTML = (x === y);
}

function False4_function() {
    x = "10"
    y = 10
    document.getElementById("Test13").innerHTML = (x === y);
}

function False5_function() {
    x = 8
    y = 10
    document.getElementById("Test14").innerHTML = (x === y);
}

function AND_function() {                               // returns true if BOTH conditions are true//
   
    document.getElementById("Test15").innerHTML = (2 > 1 && 5 > 3);
}

function OR_function() {                                // returns true is EITHER conditino is true//
    
    document.getElementById("Test16").innerHTML = (8 > 12 || 9 > 15);
}

function NOT_function() {                           // askig if the two values are NOT equal//
    
    document.getElementById("Test17").innerHTML = !(20 > 35);
}

function NOT2_function() {
    
    document.getElementById("Test18").innerHTML = !(10 > 8);
}