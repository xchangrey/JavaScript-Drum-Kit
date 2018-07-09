window.addEventListener("keydown", function(e){
	const audio = document.querySelector(`audio[data-key="${e.which}"]`);
	if(!audio)return;
	audio.currentTime =0;
	audio.play();
	key.addClassList.add('playing');
});

function removeTransition(e){
	if(e.propertyName !== 'transform') return;
	this.classList.remove('playing');
}

const keys = document.querySelector('.key');
keys.forEach(key => key.addEventListener('transitionend', removeTransition));
