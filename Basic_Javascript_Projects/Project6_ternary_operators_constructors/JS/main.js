function Ride_Function() {
    var Height, Can_ride;
    Height = document.getElementById("Height").value;
    Can_ride = (Height < 52) ? "You are too short":"You are tall enough";
    document.getElementById("Ride").innerHTML = Can_ride + " to ride.";
}

function vote_Function() {
    var Age, Can_vote;
    Height = document.getElementById("Age").value;
    Can_vote = (Age < 18) ? "You can vote!":"You are old enough";
    document.getElementById("vote").innerHTML = Can_vote + " to vote.";
}