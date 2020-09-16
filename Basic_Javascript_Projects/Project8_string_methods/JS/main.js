function build_sentence() {             //stringing together parts of sentence with concatenate funtion//
    var part_1 = "This sentence is ";
    var part_2 = "built with the ";
    var part_3 = "concatenate tool";
    var complete_sentence = part_1.concat(part_2, part_3);
    document.getElementById("concatenate").innerHTML = complete_sentence;
}

function slice_method() {
    var Sentence = "All work and no place makes Johnny a dull boy";  //returns the part of a string when you provide the locaton in the bigger stirng//
    var Section = Sentence.slice(27,33);
    document.getElementById("Slice").innerHTML = Section;
}

function uppercase_method() {                       //changes an entire string to uppercase//
    var str = "This sentence is uppercase";
    var res = str.toUpperCase();
    document.getElementById("Uppercase").innerHTML = res;
}

function search_method() {                      
    var str = "This sentence is uppercase";                 //searches the string and outputs the location of a charactor or word you are lookking for//
    var n = str.search("uppercase");
    document.getElementById("search").innerHTML = n;
}

function string_Method() {
    var x = 182;
    document.getElementById("Numbers_to_string").innerHTML = x.toString();    //converts any value into a string//
}

function precision_Method() {
    var x = 12938.3012987376112;
    document.getElementById("Precision").innerHTML = x.toPrecision(10);    //specifies how many places you want to use for a complicated number//
}

function rounding_Method() {
    var x = 5.56789;
    document.getElementById("Round").innerHTML = x.toFixed(2);   //specifies how many characters you want to round the number to//
}

function value_of_Method() {                    // gives the value of the string, used behind the scenes//
    var str = "Hello World!";
    var res = str.valueOf();
    document.getElementById("Primitive").innerHTML = res;
}