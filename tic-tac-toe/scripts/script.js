let turn = 1;
let squares = document.getElementsByClassName("square");

document.addEventListener('DOMContentLoaded', function() {


    let squareContent = document.getElementsByClassName("square-content");
    for (let i = 0; i < squareContent.length; i++) {
        squareContent[i].style.display = "none";
    }
});

function switchTurn() {
    let turnText = document.getElementById("play")
    if(turn == 0){
        turnText.innerHTML = 'o'
        turn = 1;
        return 0;
    }
    if(turn == 1){
        turnText.innerHTML = 'x'
        turn = 0;     
        return 1;
    }
}

function handleSquareClick(event){
    switchTurn()

    event = window.event
    let square = event.currentTarget;
    squareIndex = Number(square.getAttribute("data-index"));
    console.log(squareIndex)

    let squareContent = document.getElementsByClassName("square-content");

    if(turn == 1){
        squareContent[squareIndex].innerHTML = 'X'
    }else{
        squareContent[squareIndex].innerHTML = 'O'
    }


    squareContent[squareIndex].style.display = "flex"
}

/*function handleSquareClic(event) {
    event = window.event
    let square = event.currentTarget; 
    let squareIndex = square.getAttribute("data-index");
    squareIndex = Number(squareIndex) + 1
    console.log(squareIndex)
}*/
