var numberOfSquares;
var colors;
var pickedColor;

var colorDisplay = document.getElementById("colorDisplay");
var h1 = document.getElementsByTagName("h1")[0];
var easyButton = document.querySelector("#easy");
var hardButton = document.querySelector("#hard");
var resetButton = document.querySelector("#reset");
var messageDisplay = document.getElementById("message");
var squares = document.querySelectorAll(".square");

init();

function init() {
    numberOfSquares = 6;

    easyButton.addEventListener("click", function() {
        easyButton.classList.add("selected");
        hardButton.classList.remove("selected");
    
        numberOfSquares = 3;
        resetGame();
    });

    hardButton.addEventListener("click", function() {
        hardButton.classList.add("selected");
        easyButton.classList.remove("selected");
    
        numberOfSquares = 6;
        resetGame();
    });

    resetButton.addEventListener("click", function() {
        resetGame();
    })    

    resetGame();

    for (let i = 0; i < squares.length; i++) {
        squares[i].style.backgroundColor = colors[i];
        squares[i].addEventListener("click", squareClicked);
    }
}

function squareClicked() {
    var clickedColor = this.style.backgroundColor;
    if(clickedColor === pickedColor) {
        messageDisplay.textContent = "Correct!";
        changeColors(pickedColor);
        h1.style.backgroundColor = pickedColor;
        resetButton.textContent = "Play Again?";
    }
    else {
        this.style.backgroundColor = "#232323";
        messageDisplay.textContent = "Try Again";
    }
}

function changeColors(color) {
    squares.forEach(square => {
        square.style.backgroundColor = color;
    });
}

function pickColor() {
    var random = Math.floor(Math.random() * colors.length);
    return colors[random];
}

function generateRandomColors(num) {
    var arr = [];

    for (let i = 0; i < num; i++) {
        arr.push(randomColor());
    }

    return arr;    
}

function randomColor() {
    var red = Math.floor(Math.random() * 256);
    var green = Math.floor(Math.random() * 256);
    var blue = Math.floor(Math.random() * 256);

    return "rgb(" + red + ", " + green + ", " + blue + ")";
}

function resetGame() {
    colors = generateRandomColors(numberOfSquares);
    pickedColor = pickColor();
    colorDisplay.textContent = pickedColor;

    for (let i = 0; i < squares.length; i++) {
        if(colors[i]) {
            squares[i].style.backgroundColor = colors[i];
            squares[i].style.display = "block";
        }
        else {
            squares[i].style.display = "none";
        }
    }

    h1.style.background = "steelblue";
    messageDisplay.textContent = "";
    resetButton.textContent = "New Colors";
}