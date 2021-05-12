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
   combinations of squares that are winners
 */
const winCombo = [
    [1,2,3],
    [4,5,6],
    [7,8,9],
    [1,4,7],
    [2,5,8],
    [3,6,9],
    [1,5,9],
    [3,5,7]
];

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
   check player set against winning combinations
 */
function findWin(aSet) {
    /*
      function to check if winning combination set is a subset of input set
    */
    function subSet(combo, otherSet) {
        // if winning combination set is larger than input set
        // it cannot be a subset
        if(combo > otherSet.size) {
            return false;
        } else {
            for (const elem of combo) {
                // if any member of a winning combination is not
                // in the input set, returns false.
                if(!otherSet.includes(elem)) {
                    return false;
                }
            }
            return true;
        }
    }

    /*
      iterate through winning combinations checking against
      player set
     */
    for (let i = 0; i < winCombo.length; i++){
        const combo = new Set(winCombo[i]);
        if(subSet(combo,aSet)) {
            console.log(combo);
            return combo;
        }
    }
    return null;
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
  set to X or O (unused)

function player1(event){
    event.target.classList.remove('unselected');
    event.target.classList.add('X-square');
}

function player2(event){
    event.target.classList.remove('unselected');
    event.target.classList.add('O-square');
}
*/
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
let Xset = [];
let Oset = [];

function game(){
    let player = 0;

    function markSquare(event) {
        if(player < 9){
            if(player % 2 === 0) {
                player++;
                document.getElementById('turn').innerHTML = '<em class="XO">O</em>\'s turn, <em class="XO">X</em> waits.';
                event.target.classList.remove('unselected');
                event.target.classList.add('X-square');
                Xset.push(squareCoordinates(this.id));
                if(findWin(Xset) !== null) {
                    gameOver('X', findWin(Xset));
                }

            } else {
                player++;
                document.getElementById('turn').innerHTML = '<em class="XO">X</em>\'s turn, <em class="XO">O</em> waits.';
                event.target.classList.remove('unselected');
                event.target.classList.add('O-square');
                Oset.push(squareCoordinates(this.id));
                if(findWin(Oset) !== null) {
                    gameOver('O', findWin(Oset));
                }

            }
        }
        if(player === 9) {
            gameOver('T', null);
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

    function gameOver(win, set) {

        squares.square1.removeEventListener('click',markSquare);
        squares.square2.removeEventListener('click',markSquare);
        squares.square3.removeEventListener('click',markSquare);
        squares.square4.removeEventListener('click',markSquare);
        squares.square5.removeEventListener('click',markSquare);
        squares.square6.removeEventListener('click',markSquare);
        squares.square7.removeEventListener('click',markSquare);
        squares.square8.removeEventListener('click',markSquare);
        squares.square9.removeEventListener('click',markSquare);

        if(win === 'T') {
            tie++;
            document.getElementById('turn').innerHTML = 'TIE! GAME OVER!';
        } else if(win === 'X') {
            Xs++;
            document.getElementById('turn').innerHTML = 'X Wins!';
        } else {
            Os++;
            document.getElementById('turn').innerHTML = 'O Wins!';
        }

        document.getElementById('score').innerHTML = `Score: <em class="X0-2">X</em> - ${Xs}, <em class="X0-2">O</em> - ${Os}, Tie - ${tie}`;

        for (const space in set) {
            switch (space) {
                case 1 :
                    document.getElementById('square-1').classList.add('winLine');
                    break;
                case 2 :
                    document.getElementById('square-2').classList.add('winLine');
                    break;
                case 3 :
                    document.getElementById('square-3').classList.add('winLine');
                    break;
                case 4 :
                    document.getElementById('square-4').classList.add('winLine');
                    break;
                case 5 :
                    document.getElementById('square-5').classList.add('winLine');
                    break;
                case 6 :
                    document.getElementById('square-6').classList.add('winLine');
                    break;
                case 7 :
                    document.getElementById('square-7').classList.add('winLine');
                    break;
                case 8 :
                    document.getElementById('square-8').classList.add('winLine');
                    break;
                case 9 :
                    document.getElementById('square-2').classList.add('winLine');
                    break;
                default:
                    break;
            }
        }
    }
}

game();
