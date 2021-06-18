/*
   javascript for Quiz Ninja
 */
// add a view object
// View Object
const view = {
    score: document.querySelector('#score strong'),
    question: document.getElementById('question'),
    result: document.getElementById('result'),
    info: document.getElementById('info'),
    render(target,content,attributes) {
        for(const key in attributes) {
            target.setAttribute(key, attributes[key]);
        }
        target.innerHTML = content;
    }
};

/*
  replaced with an array in week 3
const quiz = [
    [`What is Superman's real name?`, `Clark Kent`],
    [`What is Wonder Woman's real name?`, `Diana Prince`],
    [`What is Batman's real name?`, `Bruce Wayne`]
]; */
const quiz = [
    { name: "Superman",realName: "Clark Kent" },
    { name: "Wonder Woman",realName: "Diana Prince" },
    { name: "Batman",realName: "Bruce Wayne" },
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
/*
    in week 3, we placed the functions in an object called game
 */
const game = {
    start(quiz){
        this.questions = [...quiz];
        this.score = 0;
        // main game loop
        for(const question of this.questions){
            this.question = question;
            this.ask();
        }
        // end of main game loop
        this.gameOver();
    },
    ask(){
        const question = `What is ${this.question.name}'s real name?`;
        view.render(view.question,question);
        const response =  prompt(question);
        this.check(response);
    },
    check(response){
        const answer = this.question.realName;
        if(response === answer){
            view.render(view.result,'Correct!',{'class':'correct'});
            alert('Correct!');
            this.score++;
            view.render(view.score,this.score);
        } else {
            view.render(view.result,`Wrong! The correct answer was ${answer}`,{'class':'wrong'});
            alert(`Wrong! The correct answer was ${answer}`);
        }
    },
    gameOver(){
        view.render(view.info,`Game Over, you scored ${this.score} point${this.score !== 1 ? 's' : ''}`);
    }
}

// used namespace to call the start() method
game.start(quiz);

/* Report player's score after loop completes. Uses the ternary operator to check
*  the plurality of the score. If score is greater than 1, it will add an 's' to the end
*  replaced with final function in previous block
*
*   alert(`Game Over!\nYou scored ${score} point${score !== 1 ? 's' : ''}`);
 */