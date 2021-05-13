/* const form = document.forms[0];
const form1 = document.getElementsByTagName('form');
const form3 = document.forms['search']; // using dot notation is not recommended
const [input,button] = form.elements;
const input = form.searchInput;

Many different ways to access the same elements in a form
*/
const form = document.forms['search'];
const input = form.searchInput;
input.value = 'Search Here';

/*
  test adding an event listener based on 'focus'
 */
input.addEventListener('focus', () => {
    if(input.value === 'Search Here') {
        input.value = '';
    }
},false);

/*
  event listener based on 'blur'
 */
input.addEventListener('blur', () => {
    if(input.value === '') {
        input.value = 'Search Here'
    }
},false);

/*
  event listener based on 'change'
 */
input.addEventListener('change', () => alert('changed'),false);

/*
  event listener based on 'submit'
 */
form.addEventListener('submit',search,false);

function search() {
    alert(`You searched for ${input.value}`);
    event.preventDefault();
}