var str = "Hello World!";
var n = str.length;

function array_Function() {       
    var dog_Picture = [];
    dog_Picture[0] = "sleeping";
    dog_Picture[1] = "playing";
    dog_Picture[2] = "eating";
    dog_Picture[3] = "barking";
    document.getElementById("Dog").innerHTML = "In this picture, the dog is " + dog_Picture[2] + ".";
}



function New_Car(userMake, userModel, userColor, userYear) {    //defingin the properties of a car class//
    this.Make = userMake;
    this.Model = userModel;
    this.Color = userColor;
    this.Year = userYear;
}

const My_Car = new New_Car("Ford", "edge", "brown", "2013")     //create new object of class car witht New//
function constant_function() {
    document.getElementById("Constant").innerHTML = "The cost of the " + My_Car.Color + My_Car.Year + My_Car.Make + " was " + My_Car.Price;
}

    var y = 40;
    document.write(y);              //Let tag allowes you declare a variable in a block//
    {
        let y = 35;
        document.write("<br>" + y);
    }
    document.write(y)


    var x = myFunction(4, 3);                   // Using return to give the output of an opperation//

    function myFunction(a, b) {
        return a * b;
    }
    function return_function() {
        document.getElementById("demo").innerHTML = myFunction(4, 3)
    }

    let animal = {
        Species: "Bear ",                   //Let tag to create an object //
        Weight: "1000 ",
        Color: "Brown",
        Description : function() {
            return "This animal is a " + this.Color + this.Species;
        }
    };  function sub_function() {

   
        document.getElementById("Animal_object").innerHTML = animal.Description();
    }
function break_function() {             //The break function stops at a designated point in a loop and outputs something (string usualy)//
    var text = '';
    var a;
    for (a = 0; a < 8; a++) {
        if (a === 3) {break; }
        text += "The number is " + a + "<br>";
        console.log(text);
    }
    document.getElementById("demo2").innerHTML = text;
}
   
function continue_function() {              //continue skips one iteraton in a loop then returns to the loop//
    var text = '';
    var a;
    for (a = 0; a < 8; a++) {
        if (a === 3) {continue; }
        text += "The number is " + a + "<br>";
        console.log(text);
    }
    document.getElementById("demo3").innerHTML = text;
}
       