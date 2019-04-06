$(document).ready(function() {
// There will be four crystals displayed as buttons on the page.

// The player will be shown a random number at the start of the game.
// The random number shown at the start of the game should be between 19 - 120.
var min = 19;
var max = 120;
var goalNumber = Math.floor(Math.random() * (max-min+1)+min);
var wins = 0;
var losses = 0;
var totalScore = 0;
var crystalValues = [0, 0, 0, 0];

$('#number-to-match').html(goalNumber);
console.log(goalNumber);
// When the player clicks on a crystal, it will add a specific amount of points to the player's total score.
// Each crystal should have a random hidden value between 1 - 12.
// Your game will hide this amount until the player clicks a crystal.
$('#crystal1').click(crystal1Clicked());
$('#crystal2').click(crystal2Clicked());
$('#crystal3').click(crystal3Clicked());
$('#crystal4').click(crystal4Clicked());

function setCrystalValue(){
    for(i = 0; i < crystalValues.length; i++){
    var crystalValue = Math.floor(Math.random() * 12 + 1);
    crystalValues[i] = crystalValue;
    console.log(crystalValue[i]);
    }
}
// When they do click one, update the player's score counter.
function crystal1Clicked(){
    totalScore += crystalValues[0];
}
function crystal2Clicked(){
    totalScore += crystalValues[1];
}
function crystal3Clicked(){
    totalScore += crystalValues[2];
}
function crystal4Clicked(){
    totalScore += crystalValues[3];
}
// The player wins if their total score matches the random number from the beginning of the game.
if (totalScore === goalNumber){
    wins++;
}
// The player loses if their score goes above the random number.
if (totalScore > goalNumber){
    losses++;
}
// The game restarts whenever the player wins or loses.
function restartGame(){
// When the game begins again, the player should see a new random number. Also, all the crystals will have four new hidden values. Of course, the user's score (and score counter) will reset to zero.
    totalScore = 0;
    newGoalNumber;
    newGemValue;
}


// The app should show the number of games the player wins and loses. To that end, do not refresh the page as a means to restart the game.




});
