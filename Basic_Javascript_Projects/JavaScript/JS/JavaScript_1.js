function Movie_Function() {
    var Movie_Output;
    var Movies = document.getElementById("Movie_Input").value;
    var Movie_String = " is a great movie!";
    switch(Movies) {
        case "Caddyshack":
            Movie_Output = "Caddyshack" + Movie_String;
        break;
        case "Animal House":
            Movie_Output = "Animal House" + Movie_String;
        break;
        case "Superbad":
            Movie_Output = "Superbad" + Movie_String;
        break;
        case "Old School":
            Movie_Output = "Old School" + Movie_String;
        break;
        case "Harold and Kumar":
            Movie_Output = "Harold and Kumar" + Movie_String;
        break;
        case "Jackass":
            Movie_Output = "Jackass" + Movie_String;
        break;
        default:
        Movie_Output = "Please enter a Movie exactly as written on the above list.";
    }
    document.getElementById("Output").innerHTML = Movie_Output;
}


function test_function() {
    var A = document.getElementsByClassName("statement");
    A[0].innerHTML = "See this sentence just changed!";
}

var c = document.getElementById("canvas_1");
var ctx = c.getContext("2d");
ctx.beginPath();
ctx.arc(190, 100, 80, 0, 4 * Math.PI);
ctx.stroke();

var d = document.getElementById("canvas_2");
var dtx = d.getContext("2d");

var grd = dtx.createLinearGradient(0, 0, 170, 0);
grd.addColorStop(0, "black");
grd.addColorStop(1, "white");

dtx.fillStyle = grd;
dtx.fillRect(20, 20, 150, 100);
