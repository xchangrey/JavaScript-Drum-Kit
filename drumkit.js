function playSound(e){
	const audio = document.querySelector(`audio[data-key="${e.keyCode}"]`);
	const key = document.querySelector(`div[data-key="${e.which}"]`);

	if(!audio) return;
	audio.currentTime = 0;
	audio.play();
	key.classList.add('playing');
}

function removeTransition(e){
	if(e.propertyName !== 'transform') return;
	e.target.classList.remove('playing');
}

window.addEventListener("keydown", playSound);

const letters = Array.from(document.querySelectorAll('.letter'));
letters.forEach(letter => letter.addEventListener('transitionend', removeTransition));