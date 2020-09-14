function change_p_color() {
var A = "click me"
var B = A.fontcolor("green");
var x = document.getElementById("B").innerHTML= B;
}
function myFunction2() {
    var sentence1 = "First wake up";
    sentence1 +=  "then take a shower";
    document.getElementById("string_sentences").innerHTML = sentence1;
}


function myFunction() {                                 //Defining the function///
    var sentence1 = "I am learning";                   
    sentence1 += " a lot from this book";        //the two elements of the string we are putting together.//
    document.getElementById("Concatenate").innerHTML = sentence1;  //Telling the HtML page to add togther those two elements, when the funtion is performed//
}