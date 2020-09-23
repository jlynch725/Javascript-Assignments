function displayType(animal) {
    var animalType = animal.getAttribute("data-animal-type");
    alert(animalType + " is in the " + animal.innerHTML + " category!");
}