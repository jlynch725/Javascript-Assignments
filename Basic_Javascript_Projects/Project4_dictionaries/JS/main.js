function Dictionary_function1() {
    var car = {
        color:"black",
        Make:"mercedez",
        price:75000 
    };
    document.getElementById("Dictionary1").innerHTML = car.price;
}


function Dictionary_function2() {                   //identical element ID's//
    var car = {
        color:"black",  
        color:"mercedez",
        price:75000 
    };
    document.getElementById("Dictionary2").innerHTML = car.color;
}


function Dictionary_function3() {                   //deleted the color element//
    var car = {
        color:"black",  
        Make:"mercedez",
        price:75000 
    };
    delete car.color;
    document.getElementById("Dictionary3").innerHTML = car.color;
}