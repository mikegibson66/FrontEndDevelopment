/*
   javascript for Quiz Ninja
 */

const quiz = [
    [`What is Superman's real name?`, `Clark Kent`],
    [`What is Wonder Woman's real name?`, `Diana Prince`],
    [`What is Batman's real name?`, `Bruce Wayne`]
];

// replaced within function block: let score = 0; // initialize score

/* Welcome alert, displays on page load */
alert('Welcome to Quiz Ninja!');

/* Question alert, displays after first alert*/
/* --- First alert ----
*   const question = `What is Superman's real name?`;
*   const answer = prompt(question);
*   alert(`You answered ${answer}`);
*
*   Replaced with for-of loop */

/* Question game loop replaced with functions to improve
*  maintainability.
*  ---- first game loop was a for-of loop ------
*  for(const [question,answer] of quiz) {
*
*  const response = prompt(question);
*    if(response === answer) {
*        alert('Correct!');
*         score++;
*    } else {
*        alert(`Wrong! The correct answer was ${answer}`);
*    }
* }
*   Replaced with main game loop */

function start(quiz) {
    // initialize score
    let score = 0;

    // main game loop
    for(const [question, answer] of quiz) {
        const response = ask(question);
        check(response, answer);
    }
    // end main loop

    // show results with gameOver function
    gameOver();

    // functions declared

    /* prompts the user with question */
    function ask(question){
        return prompt(question);
    }

    /* check answer against key, update score */
    function check(response, answer){
        if(response === answer){
            alert(`You answered, "${response}" which is correct!`);
            score++;
        } else {
            alert(`Wrong! The correct answer was ${answer}.`)
        }
    }

    /* GameOver provides user with their final results to end the game */
    function gameOver(){
        alert(`Game Over, you scored ${score} point${score !== 1 ? 's' : ''}`);
    }
}
start(quiz);

/* Report player's score after loop completes. Uses the ternary operator to check
*  the plurality of the score. If score is greater than 1, it will add an 's' to the end
*  replaced with final function in previous block
*
*   alert(`Game Over!\nYou scored ${score} point${score !== 1 ? 's' : ''}`);
 */