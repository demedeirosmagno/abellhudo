$(document);  
		//* menu-mobile *//
		$(".button-collapse").sideNav({
			edge: 'left', // Choose the horizontal origin
			draggable: true, // Choose whether you can drag to open on touch screens,
		});
		//* Dropdown menu *//
		$('.dropdown-button').dropdown({
			inDuration: 350,
			outDuration: 225,
			constrainWidth: true, // Does not change width of dropdown to that of the activator
			hover: true, // Activate on hover
			gutter: 0, // Spacing from edge
			belowOrigin: true, // Displays dropdown below the button
			alignment: 'left', // Displays dropdown with edge aligned to the left of button
			stopPropagation: false // Stops event propagation
		  }
		);


		
const sections = document.querySelectorAll('.default');
const viewHeight = window.innerHeight;

const revealSection = () => {
	sections.forEach(section => {
		const distanceFromTop = section.getBoundingClientRect().top;
		distanceFromTop < viewHeight - 100
		? section.classList.add('scroll-reveal')
		: section.classList.remove('scroll-reveal');

	});
};

window.addEventListener('load', () => revealSection());
window.addEventListener('scroll', () => revealSection());