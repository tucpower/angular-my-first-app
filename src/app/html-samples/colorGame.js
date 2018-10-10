var numberOfSquares = 6;
var colors = generateRandomColors(numberOfSquares);

var pickedColor = pickColor();
var colorDisplay = document.getElementById("colorDisplay");
colorDisplay.textContent = pickedColor;

var h1 = document.getElementsByTagName("h1")[0];

var easyButton = document.querySelector("#easy");
easyButton.addEventListener("click", function() {
    easyButton.classList.add("selected");
    hardButton.classList.remove("selected");

    numberOfSquares = 3;
    resetGame(numberOfSquares);
});

var hardButton = document.querySelector("#hard");
hardButton.addEventListener("click", function() {
    hardButton.classList.add("selected");
    easyButton.classList.remove("selected");

    numberOfSquares = 6;
    resetGame(6);
});

var resetButton = document.querySelector("#reset");
resetButton.addEventListener("click", function() {
    resetGame(numberOfSquares);
})

var messageDisplay = document.getElementById("message");

var squares = document.querySelectorAll(".square");
for (let i = 0; i < squares.length; i++) {
    squares[i].style.backgroundColor = colors[i];
    squares[i].addEventListener("click", squareClicked);
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

function resetGame(num) {
    colors = generateRandomColors(num);
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

    h1.style.background = "#232323";
}