var tag = document.getElementById('highlight');
tag.style.color="yellow";

var playerOneButton = document.getElementById("p1");
var playerTwoButton = document.getElementById("p2");
var resetButton = document.getElementById("reset");
var playerOneScore = document.getElementById("playerOneScore");
var playerTwoScore = document.getElementById("playerTwoScore");

var p1score = 0;
var p2score = 0;

playerOneButton.addEventListener("click", function() {
    playerOneScore.textContent = ++p1score;
})

playerTwoButton.addEventListener("click", function() {
    playerTwoScore.textContent = ++p2score;
})

resetButton.addEventListener("click", function() {
    
})