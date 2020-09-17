alert(document.getElementById("p1").innerHTML);

function slice_method() {
    var Sentence = "All work and no place makes Johnny a dull boy";  //returns the part of a string when you provide the locaton in the bigger stirng//
    var Section = Sentence.slice(27,33);
    document.getElementById("Slice").innerHTML = Section;
}

slice_method();