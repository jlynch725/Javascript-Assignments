var y = 10                  //setting global variable//

function add_function() {           //executing an add function with a local variable//
    var x = 5;
    document.write(x + 10);
}
function add_function2(){           //referencing a local variable in another funtion, error: x is not defined//
    console.log(x + 4);
}

function conditional_function() {  //conditional function using the tool to get the date and time//
    if (new Date().getHours() > 10) {
    document.getElementById("conditional").innerHTML = "How are you this afternoon"
    }
}
function my_conditional_function() {            //creating my own conditional function//
    var x = 10;
    var a = 15;
    if ((x + a ) > 20) {
        document.getElementById("my_conditional").innerHTML = "The product of x and a is greater than 20"
    }
}

function weight_function() {            //creating if/else function that varies based ont he input you enter//
    weight = document.getElementById("weight").value;
    if (weight >= 200) {
        assesment = "You should start going to the gym";
    }
    else {
        assesment = "You are relatively healthy";
    }
    document.getElementById("How_much_do_you_weigh?").innerHTML = assesment;   
}


        