// var secretNumber = 4;

// var number = Number(prompt("Guess a number!"));

// if(number > secretNumber) {
//     alert("Wrong number...over...");
// } else if(number < secretNumber) {
//     alert("Wrong number...below...");
// } else {
//     alert("Cool!!!");
// }

// console.log("Nice to meet you, " + name);

// for (let index = 0; index < 20; index++) {
//     console.log(index);
    
// }

// function isEven(x) {
//     if(x % 2 === 0)
//         return "yes!"
//     else
//         return "no!"
// }

// var number = Number(prompt("Enter number!"));
// alert(isEven(number));

// var nextAction = "";
// var todos = ["111", "222", "333"];
// todos.forEach(function (todo, i) {
//     console.log(todo);
//     console.log(i);
// })

var movie1 = {
    title : "In Bruges",
    rating : 5,
    hasWatched : true
}
var movie2 = {
    title : "Frozen",
    rating : 4.5,
    hasWatched : false
}

var movies = [movie1, movie2];
movies.forEach(movie => {
    if(movie.hasWatched)
        console.log("You have watched \"" + movie.title + "\" - " + movie.rating + " stars");
    else
        console.log("You have not watched \"" + movie.title + "\" - " + movie.rating + " stars");
});

///////////////////////////////////// 153.

var tag = document.getElementById('highlight');
tag.style.color="yellow";