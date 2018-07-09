window.addEventListener("keydown", function(e){
	const audio = document.querySelector(`audio[data-key="${e.which}"]`);
	if(!audio)return;
	audio.currentTime =0;
	audio.play();
	letter.addClassList.add('playing');
});

function removeTransition(e){
	if(e.propertyName !== 'transform') return;
	this.classList.remove('playing');
}

const letters = document.querySelector('letter');
letters.forEach(key => key.addEventListener('transitionend', removeTransition));
