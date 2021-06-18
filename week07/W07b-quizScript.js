/*
removed to use AJAX to retch the questions from a server instead of keeping them in an object

const quiz = [
    { name: "Superman", realName: "Clark Kent" },
    { name: "Wonder Woman", realName: "Diana Prince" },
    { name: "Batman", realName: "Bruce Wayne" },
    { name: "The Hulk", realName: "Bruce Banner" },
    { name: "Spider-man", realName: "Peter Parker" },
    { name: "Cyclops", realName: "Scott Summers" },
    { name: "Wasp", realName: "Janet van Dyne" },
    { name: "Iron Man", realName: "Anthony Edward Stark" },
    { name: "Captain America", realName: "Steven Grant Rogers" }
];
 */
/**
 * used instead of the object containing the questions and answers.
 * We have a variable called url to store the reference to the URL.
 *
 * We use the Fetch API, which returns a promise, which if successful can be used
 * with the json() method to return a JavaScript object. If this is successful, two
 * event handlers are registered. These were originally at the end of the code.
 *
 * Keeping the quiz data in a separate file and loading it using Ajax is beneficial because
 * it keeps the question data and the application logic separate. This would allow for many
 * different quiz files to be used with the same logic.
 *
 * The url in the book/website does not work. The url below was taken from the CodePen example
 *
 * @type {string}
 */
const url = 'https://s3-us-west-2.amazonaws.com/s.cdpn.io/123941/questions.json';
fetch(url)
    .then(res => res.json())
    .then(quiz => {
        view.start.addEventListener('click', () => game.start(quiz.questions), false);
        view.response.addEventListener('click', (event) => game.check(event), false);
    });


/**
 * use to make the questions appear at random, rather than always the same order
 * @param a
 * @param b
 * @returns {number}
 */
function random(a,b=1) {
    // if only 1 argument is provided, we need to swap the values of a and b
    if (b === 1) {
        [a,b] = [b,a];
    }
    return Math.floor((b-a+1) * Math.random()) + a;
}

/**
 * shuffles an array's elements into new locations
 * @param array
 */
function shuffle(array) {
    for (let i = array.length; i; i--) {
        let j = random(i)-1;
        [array[i - 1], array[j]] = [array[j], array[i - 1]];
    }
}

/**
 * View Objects
 * @type {{buttons(*): *, question: Element, start: Element, show(*): void, result: Element, score: Element, timer: Element, hide(*): void, response: Element, setup(): void, render(*, *, *): void, teardown(): void, info: Element}}
 */
const view = {
    score: document.querySelector('#score strong'),
    question: document.querySelector('#question'),
    result: document.querySelector('#result'),
    info: document.querySelector('#info'),
    start: document.querySelector('#start'),
    response: document.querySelector('#response'),
    timer: document.querySelector('#timer strong'),
    render(target,content,attributes) {
        for(const key in attributes) {
            target.setAttribute(key, attributes[key]);
        }
        target.innerHTML = content;
    },
    show(element){
        element.style.display = 'block';
    },
    hide(element){
        element.style.display = 'none';
    },
    setup(){
        this.show(this.question);
        this.show(this.response);
        this.show(this.result);
        this.hide(this.start);
        this.render(this.score,game.score);
        this.render(this.result,'');
        this.render(this.info,'');
    },
    teardown(){
        this.hide(this.question);
        this.hide(this.response);
        this.show(this.start);
    },
    buttons(array){
        return array.map(value => `<button>${value}</button>`).join('');
    }
};

const game = {
    start(quiz){
        console.log('start() invoked');
        this.score = 0;
        this.questions = [...quiz];
        view.setup();
        this.secondsRemaining = 20;
        this.timer = setInterval( this.countdown , 1000 );
        this.ask();
    },
    countdown() {
        game.secondsRemaining--;
        view.render(view.timer,game.secondsRemaining);
        if(game.secondsRemaining <= 0) {
            game.gameOver();
        }
    },
    ask(){
        console.log('ask() invoked');
        if(this.questions.length > 2) {
            shuffle(this.questions);
            this.question = this.questions.pop();
            const options = [this.questions[0].realName, this.questions[1].realName, this.question.realName];
            shuffle(options);
            const question = `What is ${this.question.name}'s real name?`;
            view.render(view.question,question);
            view.render(view.response,view.buttons(options));
        }
        else {
            this.gameOver();
        }
    },
    check(event){
        console.log('check(event) invoked');
        const response = event.target.textContent;
        const answer = this.question.realName;
        if(response === answer){
            view.render(view.result,'Correct!',{'class':'correct'});
            this.score++;
            view.render(view.score,this.score);
        } else {
            view.render(view.result,`Wrong! The correct answer was ${answer}`,{'class':'wrong'});
        }
        this.ask();
    },
    gameOver(){
        console.log('gameOver() invoked');
        view.render(view.info,`Game Over, you scored ${this.score} point${this.score !== 1 ? 's' : ''}`);
        view.teardown();
        clearInterval(this.timer);
    }
}
/*
Removed because they are part of the AJAX block at top of the code

view.start.addEventListener('click', () => game.start(quiz), false);
view.response.addEventListener('click', (event) => game.check(event), false);

 */