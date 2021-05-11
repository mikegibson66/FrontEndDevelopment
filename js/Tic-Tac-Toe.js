const squares = {
    square1: document.getElementById('square-1'),
    square2: document.getElementById('square-2'),
    square3: document.getElementById('square-3'),
    square4: document.getElementById('square-4'),
    square5: document.getElementById('square-5'),
    square6: document.getElementById('square-6'),
    square7: document.getElementById('square-7'),
    square8: document.getElementById('square-8'),
    square9: document.getElementById('square-9'),
    reset: document.getElementById('resetButton'),
    resetScore: document.getElementById('resetScore')
}

/*
  highlight a square with a brighter red color
 */
function highlight(event){
    event.target.classList.toggle('highlight');
}
/*
   highlight unselected squares on mouseover
 */
document.querySelectorAll('.unselected').forEach(item => {
    item.addEventListener('mouseover',highlight);
    item.addEventListener('mouseout',highlight);
})


/*
  set to X or O
 */
function player1(event){
    event.target.classList.remove('unselected');
    event.target.classList.add('X-square');
}

function player2(event){
    event.target.classList.remove('unselected');
    event.target.classList.add('O-square');
}

/*
  Game loop
 */
let player = 1;

function markSquare(event) {
    if(player === 1) {
        event.target.classList.remove('unselected');
        event.target.classList.add('X-square');
    } else {
        event.target.classList.remove('unselected');
        event.target.classList.add('O-square');
    }
    if(player ===1) {
        player++;
    } else {
        player = 1;
    }
}

squares.square1.addEventListener('click',markSquare,{once: true});
squares.square2.addEventListener('click',markSquare,{once: true});
squares.square3.addEventListener('click',markSquare,{once: true});
squares.square4.addEventListener('click',markSquare,{once: true});
squares.square5.addEventListener('click',markSquare,{once: true});
squares.square6.addEventListener('click',markSquare,{once: true});
squares.square7.addEventListener('click',markSquare,{once: true});
squares.square8.addEventListener('click',markSquare,{once: true});
squares.square9.addEventListener('click',markSquare,{once: true});