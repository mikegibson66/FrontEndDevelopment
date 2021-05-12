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
const winCombo = [
    [1,2,3],
    [4,5,6],
    [7,8,9],
    [1,4,7],
    [2,5,8],
    [3,6,9],
    [1,5,9],
    [3,5,7]
]

/*
  convert square id to integer
 */
function squareCoordinates(id) {
    switch(id) {
        case 'square1':
            return 1;
        case 'square2':
            return 2;
        case 'square3':
            return 3;
        case 'square4':
            return 4;
        case 'square5':
            return 5;
        case 'square6':
            return 6;
        case 'square7':
            return 7;
        case 'square8':
            return 8;
        case 'square9':
            return 9;
        default:
            return 0;
    }
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
  reset board
 */
function resetBoard() {
    document.querySelectorAll('.square').forEach(item => {
        document.getElementById('turn').innerHTML = '<em class="XO">X</em>\'s turn, <em class="XO">O</em> waits.';
        item.classList.remove('X-square');
        item.classList.remove('O-square');
        item.classList.add('unselected');
        game();
    })
}



/*
  Game loop
 */
let tie = 0;
let Os = 0;
let Xs = 0;
let Xset = new Set();
let Oset = new Set();

function game(){
    let player = 0;

    function markSquare(event) {
        if(player < 9){
            if(player % 2 === 0) {
                player++;
                document.getElementById('turn').innerHTML = '<em class="XO">O</em>\'s turn, <em class="XO">X</em> waits.';
                event.target.classList.remove('unselected');
                event.target.classList.add('X-square');
                Xset.add(squareCoordinates(this.id));
            } else {
                player++;
                document.getElementById('turn').innerHTML = '<em class="XO">X</em>\'s turn, <em class="XO">O</em> waits.';
                event.target.classList.remove('unselected');
                event.target.classList.add('O-square');
                Oset.add(squareCoordinates(this.id));
            }
        }
        if(player === 9) {
            document.getElementById('turn').innerHTML = 'GAME OVER';

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
    squares.reset.addEventListener('click', resetBoard);
}

game();
