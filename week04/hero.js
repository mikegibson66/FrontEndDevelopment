/*
  to set focus to a specific element, you can use autofocus attribute.
       --  or the following JavaScript  --
  document.forms.hero.heroName.focus();
 */

const form = document.forms['hero'];
form.addEventListener('submit', makeHero, false);
/*
* to set up a validate function that will be used to validate form content
 */
form.addEventListener('submit', validate, false);
form.heroName.addEventListener('keyup',validateInline,false);
// form.heroName.addEventListener('keyup',disableSubmit,false);


/*
*  checkbox elements all have the same 'name' property, making them accessible through
*  an HTML collection. This allows us to iterate over the collection using a for loop.
*
* hero.powers = [];
* for (let i=0; i < form.powers.length; i++) {
*     if (form.powers[i].checked) {
*         hero.powers.push(form.powers[i].value);
    }
}
* using the spread operator to turn the node list into an array. Use the filter()
* method to make the array contain only the checked boxes. Use the map() method to fill the array
* with the 'value' property
 */
/*
  makeHero: returns an object based on the information provided in the form
 */
function makeHero(event) {
    event.preventDefault(); // prevent the form from being submitted
    const hero = {}; // create an empty object
    hero.name = form.heroName.value; // create a name property based on the input field's value
    hero.realName = form.realName.value;
    hero.powers = [...form.powers].filter(box => box.checked).map(box => box.value);
    hero.category = form.category.value;
    hero.age = form.age.value;
    hero.city = form.city.value;
    hero.origin = form.origin.value;
    alert(JSON.stringify(hero)); // convert object to JSON string and display in alert dialog
    return hero;
}

/*
* validate: form validation using JavaScript. This will exclude any hero names that begin with X
*
* This is not the best type of validation for the user experience.
 */
function validate(event) {
    const firstLetter = form.heroName.value[0];
    if (firstLetter.toUpperCase() === 'X') {
        event.preventDefault();
        alert('Your name is not allowed to start with X!');
    }
}

/*
* validateInline: more direct feedback to the user, rather than waiting for them to click/tap submit
* This provides immediate feedback to improve the user experience.
 */
const label = form.querySelector('label');
const error = document.createElement('div');
error.classList.add('error');
error.textContent = '! Your name is not allowed to start with X.';
label.append(error);
function validateInline() {
    const heroName = this.value.toUpperCase();
    if(heroName.startsWith('X')){
        error.style.display = 'block';
    } else {
        error.style.display = 'none';
    }
}

/*
* disableSubmit: in addition to the direct feedback to the user, disabling the submit button
* will prevent the form from even being submitted based on certain tests.
 */
function disableSubmit(event) {
    if(event.target.value === ''){
        document.getElementById('submit').disabled = true;
    } else {
        document.getElementById('submit').disabled = false;
    }
}
/*
* you can preset a check box to on, using .checked = true;
* This specific line pre-sets flight to checked
 */

document.forms.hero.powers[0].checked = true;
