/*
   javascript for Quiz Ninja
 */

const quiz = [
  [`What is Superman's real name?`, `Clark Kent`],
  [`What is Wonder Woman's real name?`, `Diana Prince`],
  [`What is Batman's real name?`, `Bruce Wayne`]
];

let score = 0; // initialize score

/* Welcome alert, displays on page load */
alert('Welcome to Quiz Ninja!');

/* Question alert, displays after first alert*/
/* --- First alert ----
*   const question = `What is Superman's real name?`;
*   const answer = prompt(question);
*   alert(`You answered ${answer}`);
*
*   Replaced with for-of loop */

for(const [question,answer] of quiz) {
    const response = prompt(question);
    if(response === answer) {
        alert('Correct!');
        score++;
    } else {
        alert(`Wrong! The correct answer was ${answer}`);
    }
}


/* Report player's score after loop completes. Uses the ternary operator to check
* the plurality of the score. If score is greater than 1, it will add an 's' to the end */

alert(`Game Over!\nYou scored ${score} point${score !== 1 ? 's' : ''}`);