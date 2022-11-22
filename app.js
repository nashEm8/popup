const button = document.querySelector('button');
const popup = document.querySelector('.popup-wrapper');

button.addEventListener('click', () => {
	popup.style.display = 'block';
});

popup.addEventListener('click', event => {
	let elementClicked = event.target.classList[0];
	const classNames = ['popup-link', 'popup-close', 'popup-wrapper'];
	const conditionClosePopup = classNames.some(className => className === elementClicked);

	if(conditionClosePopup){
		popup.style.display = 'none';
	}
});