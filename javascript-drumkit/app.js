 // listen for key down event
 function playSound(e) {
    // is there an audio element on the page with the same key
    const audio = document.querySelector(`audio[data-key="${e.keyCode}"]`);  // attribute selector
    const key = document.querySelector(`.key[data-key="${e.keyCode}"]`); 
    //console.log(audio);
    if (!audio) return; // stop the function from running all together
    audio.currentTime = 0; // rewind to the start
    audio.play();
    //console.log(key);
    key.classList.add('playing');
}
function removeTransition(e) {
    if (e.propertyName !== 'transform') return; // skip it if not transform event
    //console.log(e.propertyName);
    //console.log(this);
    this.classList.remove('playing');
}
const keys = document.querySelectorAll('.key'); // remove the glowing from every key
keys.forEach(key => key.addEventListener('transitionend',removeTransition));
window.addEventListener('keydown', playSound);