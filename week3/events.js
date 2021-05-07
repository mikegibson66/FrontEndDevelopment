/*
function doSomething(event){

    console.log(event.type);
    console.log(event.target);
    console.log(`screen: (${event.screenX}, ${event.screenY})\nclient: (${event.clientX}, ${event.clientY})\npage: (${event.pageX}, ${event.pageY})`);
}
addEventListener('click', doSomething);
 */

/*
    click mouse event
 */
const clickParagraph = document.getElementById('click');
clickParagraph.addEventListener('click',() => console.log('click') );
clickParagraph.addEventListener('mousedown',() => console.log('down') );
clickParagraph.addEventListener('mouseup',() => console.log('up') );

/*
   double click mouse event
 */
const dblclickParagraph = document.getElementById('dblclick');
dblclickParagraph.addEventListener('dblclick', highlight);
function highlight(event){
    event.target.classList.toggle('highlight');
}

/*
   mouseover, mouseout, and mousemovve
 */
const mouseParagraph = document.getElementById('mouse');
mouseParagraph.addEventListener('mouseover', highlight);
mouseParagraph.addEventListener('mouseout', highlight);
mouseParagraph.addEventListener('mousemove', () => console.log('You Moved!'))

addEventListener('keydown', highlight);
addEventListener('keyup', (event) => console.log(`You stopped pressing the key on ${new Date}.\n
You pressed the ${event.key} character.`));

/*
   removeEventListener implementation example
 */
const onceParagraph = document.getElementById('once');
onceParagraph.addEventListener('click', remove);
function remove(event) {
    console.log('Enjoy this while it lasts!');
    onceParagraph.style.backgroundColor = 'pink';
    onceParagraph.removeEventListener('click',remove);
}

/*
   override default behavior example
 */
const brokenLink = document.getElementById('broken');

brokenLink.addEventListener('click', (event) => {
   event.preventDefault();
   console.log('Broken Link!');
});

/*
  bubbling example
 */
ulElement = document.getElementById('list');
liElement = document.querySelector('#list li');

ulElement.addEventListener('click', (event) => console.log('Clicked on ul') );

liElement.addEventListener('click', (event) => console.log('Clicked on li') );


/*
   capture example
 */
ulElement = document.getElementById('list');
liElement = document.querySelector('#list li');

ulElement.addEventListener('click', (event) => console.log('Clicked on ul'), true );

liElement.addEventListener('click', (event) => console.log('Clicked on li'), true );

ulElement.addEventListener('click',highlight);