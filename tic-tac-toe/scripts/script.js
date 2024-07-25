let turn = 1;
let squares = document.getElementsByClassName("square");
let turnCounter = 0;
document.addEventListener('DOMContentLoaded', function() {


    let squareContent = document.getElementsByClassName("square-content");
    for (let i = 0; i < squareContent.length; i++) {
        squareContent[i].style.innerHTML = "";
    }
});

function switchTurn() {

    let turnMark = document.getElementById("turn-mark")
    turnMark.style.transition = "ease 1s"


    let turnText = document.getElementById("play")
    if(turn == 0){
        turnText.innerHTML = 'O'
        turn = 1;
        turnMark.style.backgroundColor = "#dade73"
        return 0;
    }
    if(turn == 1){
        turnText.innerHTML = 'X'
       turnMark.style.backgroundColor = "#73de93"
        turn = 0;     
        return 1;
    }
}

function handleSquareClick(event){


    event = window.event
    let square = event.currentTarget;
    squareIndex = Number(square.getAttribute("data-index"));

    let squareContent = document.getElementsByClassName("square-content");
    if(squareContent[squareIndex].value != 'X' && squareContent[squareIndex].value != 'O'){
        switchTurn()
        if(turn == 1){
            squareContent[squareIndex].value = 'X'
            squareContent[squareIndex].innerHTML = 'X'
            squares[squareIndex].style.backgroundColor = "#73de93"
        }else{
            squareContent[squareIndex].value = 'O'
            squareContent[squareIndex].innerHTML = 'O'
            squares[squareIndex].style.backgroundColor = "#dade73"
        }
        squareContent[squareIndex].style.display = "flex"
    }
    let winner = verifyWin()
    if(winner == 0){
        alert('X ganhou')
        restartGame();
        return;
    }
    if(winner == 1){
        alert('O ganhou')
        restartGame();
        return;
    }
    turnCounter++;
    if(turnCounter == 9){
        alert('Empate')
    }
}
function verifyWin(){
    let squareContent = document.getElementsByClassName("square-content");
    //verifica X
    if(squareContent[0].value == 'X' && squareContent[1].value == 'X' && squareContent[2].value == 'X'){
        return 0;
    }
    if(squareContent[3].value == 'X' && squareContent[4].value == 'X' && squareContent[5].value == 'X'){
        return 0;
    }
    if(squareContent[6].value == 'X' && squareContent[7].value == 'X' && squareContent[8].value == 'X'){
        return 0;
    }
    if(squareContent[0].value == 'X' && squareContent[3].value == 'X' && squareContent[6].value == 'X'){
        return 0;
    }
    if(squareContent[1].value == 'X' && squareContent[4].value == 'X' && squareContent[7].value == 'X'){
        return 0;
    }
    if(squareContent[2].value == 'X' && squareContent[5].value == 'X' && squareContent[8].value == 'X'){
        return 0;
    }
    if(squareContent[0].value == 'X' && squareContent[4].value == 'X' && squareContent[8].value == 'X'){
        return 0;
    }
    if(squareContent[2].value == 'X' && squareContent[4].value == 'X' && squareContent[6].value == 'X'){
        return 0;
    }
    //verifica O
    if(squareContent[0].value == 'O' && squareContent[1].value == 'O' && squareContent[2].value == 'O'){
        return 1;
    }
    if(squareContent[3].value == 'O' && squareContent[4].value == 'O' && squareContent[5].value == 'O'){
        return 1;
    }
    if(squareContent[6].value == 'O' && squareContent[7].value == 'O' && squareContent[8].value == 'O'){
        return 1;
    }
    if(squareContent[0].value == 'O' && squareContent[3].value == 'O' && squareContent[6].value == 'O'){
        return 1;
    }
    if(squareContent[1].value == 'O' && squareContent[4].value == 'O' && squareContent[7].value == 'O'){
        return 1;
    }
    if(squareContent[2].value == 'O' && squareContent[5].value == 'O' && squareContent[8].value == 'O'){
        return 1;
    }
    if(squareContent[0].value == 'O' && squareContent[4].value == 'O' && squareContent[8].value == 'O'){
        return 1;
    }
    if(squareContent[2].value == 'O' && squareContent[4].value == 'O' && squareContent[6].value == 'O'){
        return 1;
    }

}
function restartGame(){
    let turnMark = document.getElementById("turn-mark")
    let turnText = document.getElementById("play")

    turnMark.style.backgroundColor = "#dade73"
    turnText.innerHTML = 'O'
    turnCounter = 0;
    turn = 1;
    let squareContent = document.getElementsByClassName("square-content");
    for (let i = 0; i < squareContent.length; i++) {
        squareContent[i].innerHTML = '';
        squareContent[i].value = "none";
        squares[i].style.backgroundColor = "#1b1b1b";
    }
}
/*function handleSquareClic(event) {
    event = window.event
    let square = event.currentTarget; 
    let squareIndex = square.getAttribute("data-index");
    squareIndex = Number(squareIndex) + 1
    console.log(squareIndex)
}*/
