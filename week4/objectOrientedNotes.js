/*
* constructor function example
 */
/* const Dice = function(sides=6) { // defaults to 6 if nothing is provided by user
    this.sides = sides;
    this.roll = function() {
        return Math.floor(this.sides * Math.random() + 1);
    }
}
*/
/*
* instance of Dice
 */
/*
const redDie = new Dice(); // this will be a six-sided die - normal cube
const whiteDie = new Dice(4); // four sided die - 3-sided pyramid
const blueDie = new Dice(5); // five sided die - can a five sided die be fair?
*/
/*
* using the class declaration
* This was added in ES6
 */
class Dice {
    constructor(sides = 6) {
        this.sides = sides;
    }

    roll() {
        return Math.floor(this.sides * Math.random() + 1);
    }

    static description() {  // static functions are not accessible from instances of the class
        return 'A way of choosing random numbers'; // only accessible from the class itself
        /* Dice.description(); */
    }
}

const redDie = new Dice(); // creates a six-sided die
const blueDie = new Dice(4); // creates a four-sided die
const whiteDie = new Dice(5); // creates a five-sided die

let fourSide = whiteDie.roll();

console.log(Dice.description());

/*
* example of prototype properties and methods
 */

class Turtle {
    constructor(name) {
        this.name = name;
        this.weapon = 'hands';
    }

    sayHi() {
        return `Hi dude, my name is ${this.name}`;
    }
    attack() {
        return `Feel the power of my ${this.weapon}`;
    }
}

const leo = new Turtle('Leonardo'); // leo is not an instance of the Turtle class
// it has a name property and sayHi method references the name property

leo.sayHi(); // returns 'Hi dude, my name is Leonardo'
leo.attack(); // returns 'Feel the power f my hands'

class NinjaTurtle extends Turtle {
    constructor(name) {
        super(name);
        this.weapon = 'hands';
    }
    attack() {
        return super.attack();
    }
}