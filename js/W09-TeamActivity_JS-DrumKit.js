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

formItems.keys.forEach( key => key.addEventListener('transitionend', removeTransition));
window.addEventListener('keydown', playSound);