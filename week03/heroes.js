/*
  DOM Elements assigned to a variable
 */
const body = document.body;

/*
   using Document.images in a loop
 */

for(let i = 0, max = document.images.length; i < max; i++) {
    // do something using document.images[i]
}

/*
   change document.images to an array
 */
const imageArray = Array.from(document.images);
// or
const imageArray2 = [...document.images];

/*
   using getElementById, getElementsByTagName, getElementsByClassName
 */
const h1 = document.getElementById('title');
const listItems = document.getElementsByTagName('li');
const heroes = document.getElementsByClassName('hero');
const roster = document.getElementById('roster');

/*
   Query Selectors
 */
const wonderWoman = document.querySelector('li:last-child'); // reference last item only
const ul = document.querySelector('ul#bats'); // reference a ul element with id of roster

/*
   childNodes
 */

const heroChildren = [...heroes.childNodes]; // returns all nodes, including whitespace.
const textNode = wonderWoman.firstChild; // the text of wonderWoman is a child node of the li:last-child
const textNode2 = wonderWoman.textContent; // ^^ matches this ^^

/*
   create dynamic mark-up
 */

const flash = document.createElement('li'); // created an empty element
const flashText = document.createTextNode('Flash'); // created a text node <-- unlinked
flash.appendChild(flashText); // now the 'li' element flash contains the text 'Flash'.
/* --- or you can use the following  instead of creating the flashText and appending it --- */
flash.textContent = 'Flash';

/*
  function to create elements
 */

function createElement(tag, text) {
    const el = document.createElement(tag);
    el.textContent = text;
    return el;
}

// create a new list item with its text
const aquaman = createElement('li', 'Aquaman');

// now the li element needs to be added to the existing node on the page
heroes.appendChild(flash); //  this puts flash at the end of the hero list
heroes.insertBefore(aquaman,wonderWoman);  // moves wonder woman to before aquaman. you can use to move existing elements

/*
  function to create element and insert to page
 */
function addAquaman() {
    createElement('li', 'Aquaman');
    roster.appendChild(aquaman);
}

/*
   Replacing elements on a page using .replaceChild()
 */
function changeIt(){
    const h1 = document.getElementById('title');
    const oldText = h1.firstChild;
    const newText = document.createTextNode('Justice League of America');
    h1.replaceChild(newText,oldText);
    roster.innerHTML = '<li class=\'hero\'>Superman</li><li class=\'vigilante hero\' id=\'bats\'>Batman</li><li class=\'hero\'>Wonder Woman</li>';
}

/*
  Change page to new content
 */
function suicide(){
    h1.innerHTML = 'Suicide Squad';
    roster.innerHTML = '<li>Harley Quinn</li><li>Deadshot</li><li>Killer Croc</li><li>Enchantress</li><li>Captain Boomerang</li>';
}

/*
  add border to first hero  and hide the second hero in list
 */
function addBorder(){
    const firstHero = roster.children[0];
    const secondHero = roster.children[1];
    firstHero.style.border = "red 2px solid";
    secondHero.style.display = 'none';
}