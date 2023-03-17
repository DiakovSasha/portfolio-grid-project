const hamburgerOpenBtn = document.querySelector('.hamburger');
const menuModalCloseBtn = document.querySelector('.close__btn');
const menuModalWindow = document.querySelector('.menu__overlay');
const menuModalItem = document.querySelectorAll('.menu__item');

function menuModalOpen(event) {
	event.preventDefault();
	menuModalWindow.classList.add('active');
	menuModalCloseBtn.addEventListener('click', menuModalClose);
	window.document.addEventListener('click', closeOnOverlayAndEsc);
	window.document.addEventListener('keydown', closeOnOverlayAndEsc);
	menuModalItem.forEach((el) => el.addEventListener('click', menuModalClose));
}
function menuModalClose(event) {
	menuModalWindow.classList.remove('active');
	menuModalCloseBtn.removeEventListener('click', menuModalClose);
	window.document.removeEventListener('click', closeOnOverlayAndEsc);
	window.document.removeEventListener('keydown', closeOnOverlayAndEsc);
	menuModalItem.forEach((el) => el.removeEventListener('click', menuModalClose));
}
function closeOnOverlayAndEsc(event) {
	console.log(event);
	if (event.target === menuModalWindow) {
		menuModalClose();
	}
	if (event.code === 'Escape') {
		menuModalClose();
	}
}
hamburgerOpenBtn.addEventListener('click', menuModalOpen);
