const skillsDevItem = document.querySelectorAll('.skills-development__item');
const promoLinks = document.querySelectorAll('.promo__link');

skillsDevItem.forEach((el) => {
	const widthValue = el.children[0].children[1].innerText;
	const filledEl = el.children[1].firstElementChild;
	filledEl.style.width = widthValue;
});
// ==========================================================

promoLinks.forEach((el) => {
	el.addEventListener('click', (event) => {
		// event.preventDefault();
		for (let i = 0; i <= promoLinks.length - 1; i += 1) {
			promoLinks[i].classList.remove('promo__link-active');
		}
		event.currentTarget.classList.add('promo__link-active');
	});
});
