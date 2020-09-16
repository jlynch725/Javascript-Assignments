function Ride_Function() {
    var Height, Can_ride;
    Height = document.getElementById("Height").value;
    Can_ride = (Height < 52) ? "You are too short":"You are tall enough";
    document.getElementById("Ride").innerHTML = Can_ride + " to ride.";
}

function vote_Function() {
    var Age, Can_vote;
    Age = document.getElementById("Age").value;
    Can_vote = (Age < 18) ? "You are too young":"You are old enough";
    document.getElementById("vote").innerHTML = Can_vote + " to vote.";
}

function Vehicle(Make, Model, Year, Color) {
    this.Vehicle_Make = Make;
    this.Vehicle_Model = Model;
    this.Vehicle_Year = Year;
    this.Vehicle_Color = Color;
}
var Jack = new Vehicle("Dodge", "Viper", 2020, "Red");
var Emily = new Vehicle("Jeep", "Trail Hawk", 2019, "White and Black");
var Erik = new Vehicle("Ford", "Pinto", 1971, "Mustard");
function myFunction() {
    document.getElementById("Keywords_and_Constructors").innerHTML = "Erik drives a" + Erik.Vehicle_Color + "-colored " + Erik.Vehicle_Model + "manufactured in " + Erik.Vehicle_Year; 
}
var Tom = new Vehicle("Ford", "Edge", 2018, "Black");
function newfunction() {
    document.getElementById("New_and_This").innerHTML = "Tom Drives a "+ Tom.Vehicle_Color +"-colored " + Tom.Vehicle_Model + " manufactured in " + Tom.Vehicle_Year;
}

//var true = 5
function reserved_word_function() {
    document.getElementById("reserved_word").innerHTML = true
}

function count_Function() {
    document.getElementById("Nested").innerHTML = Nested_Function(); 
    function Nested_Function() {
        var starting_point = 9;
        function Plus_one() {starting_point += 1;}
        Plus_one();
        return starting_point;
    }
}