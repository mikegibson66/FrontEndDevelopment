const formItems = {
    keys: document.querySelectorAll('.key')
}
function removeTransition(e) {
    if (e.propertyName !== 'transform') return; // skip if not transform
    this.classList.remove('playing');
}

function playSound(e) {
    console.log(e.keyCode);
    const audio = document.querySelector(`audio[data-key="${e.keyCode}"]`);
    const key = document.querySelector(`.key[data-key="${e.keyCode}"]`);
    console.log(key);
    if (!audio) {
        return; // stops the function when a key unassociated with sound is pressed
    }
    audio.currentTime = 0;
    audio.play();
    key.classList.add('playing');
}

function clickSound() {
    console.log(this.dataset.key);
    const code = this.dataset.key;
    const audio = document.querySelector(`audio[data-key="${code}"]`);
    const key = document.querySelector(`.key[data-key="${code}"]`);

    audio.currentTime = 0;
    audio.play();
    key.classList.add('playing');
}

window.addEventListener('keydown', playSound);
formItems.keys.forEach(key => key.addEventListener('click', clickSound));
formItems.keys.forEach( key => key.addEventListener('transitionend', removeTransition));