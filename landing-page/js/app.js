/**
 * 
 * Manipulating the DOM exercise.
 * Exercise programmatically builds navigation,
 * scrolls to anchors from navigation,
 * and highlights section in viewport upon scrolling.
 * 
 * Dependencies: None
 * 
 * JS Version: ES2015/ES6
 * 
 * JS Standard: ESlint
 * 
*/


// build the nav

const menu__items = ['about', 'products', 'advantages', 'price'];

const ul = document.querySelector('#navbar__list');

for (menu__item of menu__items) {
	let li = document.createElement('li');

	if (menu__item === 'about') {
		li.innerHTML = `<a href="#about" id="titleSection1" class="sectionAbout" onclick="scrollAbout()"><p><span class="about__selected">${menu__item}</span></p></a>`;
		ul.appendChild(li);
	}
	else if (menu__item === 'products') {
		li.innerHTML = `<a href="#products" id="titleSection2" class="sectionProducts" onclick="scrollProducts()"><p><span class="product__selected">${menu__item}</span></p></a>`;
		ul.appendChild(li);	
	}
	else if (menu__item === 'advantages') {
		li.innerHTML = `<a href="#advantages" id="titleSection3" onclick="scrollAdvantages()"><p><span class="advantages__selected">${menu__item}</span></p></a>`;
		ul.appendChild(li);	
	}
	else {
		li.innerHTML = `<a href="#price" id="titleSection4" onclick="scrollPrice()"><p><span class="price__selected">${menu__item}</span></p></a>`;
		ul.appendChild(li);	
	}
}

// Changing menu items case while scrolling
// Changing titles colors while scrolling

const contentAbout = document.querySelector('#section1');
window.addEventListener('scroll', function() {
	if (contentAbout.getBoundingClientRect().top < window.innerHeight) {
		document.getElementById('titleSection1').style.textTransform = "uppercase";
		document.getElementById('section1title').style.transitionDuration = "2s";
		document.getElementById('section1title').style.color = "#7B2A03";
	} else {
		document.getElementById('titleSection1').style.textTransform = "lowercase";
		document.getElementById('section2title').style.transitionDuration = "2s";
		document.getElementById('section2title').style.color = "#fff";
	}
});

const contentProducts = document.querySelector('#section2');
window.addEventListener('scroll', function() {
	if (contentProducts.getBoundingClientRect().top < window.innerHeight) {
		document.getElementById('titleSection2').style.textTransform = "uppercase";
		document.getElementById('section2title').style.transitionDuration = "2s";
		document.getElementById('section2title').style.color = "#2E0704";
	} else {
		document.getElementById('titleSection2').style.textTransform = "lowercase";
		document.getElementById('section2title').style.transitionDuration = "2s";
		document.getElementById('section2title').style.color = "#fff";
	}
});

const contentAdvantages = document.querySelector('#section3');
window.addEventListener('scroll', function() {
	if (contentAdvantages.getBoundingClientRect().top < window.innerHeight) {
		document.getElementById('titleSection3').style.textTransform = "uppercase";
		document.getElementById('section3title').style.transitionDuration = "2s";
		document.getElementById('section3title').style.color = "#003E53";
	} else {
		document.getElementById('titleSection3').style.textTransform = "lowercase";
		document.getElementById('section3title').style.transitionDuration = "2s";
		document.getElementById('section3title').style.color = "#fff";
	}
});

const contentPrice = document.querySelector('#section4');
window.addEventListener('scroll', function() {
	if (contentPrice.getBoundingClientRect().top < window.innerHeight) {
		document.getElementById('titleSection4').style.textTransform = "uppercase";
		document.getElementById('section4title').style.transitionDuration = "2s";
		document.getElementById('section4title').style.color = "#06433E";
	} else {
		document.getElementById('titleSection4').style.textTransform = "lowercase";
		document.getElementById('section4title').style.transitionDuration = "2s";
		document.getElementById('section4title').style.color = "#fff";
	}
});


// Nav anchors
//Changing menu items case if clicked

function scrollAbout() {	
	let scrollAbout = document.getElementById('section1');
	scrollAbout.scrollIntoView({
		behavior: 'smooth'
	})
	let x = document.querySelector('.about__selected');
	x.addEventListener("click", colorChange());
	function colorChange() {
		document.getElementById('titleSection1').style.textTransform = "uppercase";
	}
}

function scrollProducts() {
	let scrollProducts = document.getElementById('section2');
	scrollProducts.scrollIntoView({
		behavior: 'smooth'
	});
	let x = document.querySelector('.price__selected');
	x.addEventListener("click", colorChange());
	function colorChange() {
		document.getElementById('titleSection2').style.textTransform = "uppercase";
	}
}

function scrollAdvantages() {
	let scrollAdvantages = document.getElementById('section3');
	scrollAdvantages.scrollIntoView({
		behavior: 'smooth'
	});
	let x = document.querySelector('.advantages__selected');
	x.addEventListener("click", colorChange());
	function colorChange() {
		document.getElementById('titleSection3').style.textTransform = "uppercase";
	}
}

function scrollPrice() {
	let scrollPrice = document.getElementById('section4');
	scrollPrice.scrollIntoView({
		behavior: 'smooth'
	});
	let x = document.querySelector('.advantages__selected');
	x.addEventListener("click", colorChange());
	function colorChange() {
		document.getElementById('titleSection4').style.textTransform = "uppercase";
	}
}


// Returning to the top os the page

let toTop = document.getElementById('returnTop');
let btn = document.createElement('a');
btn.innerHTML = "<button class='boost__selected' onclick='topOfPage()'>Bost me to Top!</button>";
toTop.appendChild(btn);


function topOfPage() {
	window.scrollTo( 0, 0);
	let x = document.querySelector('.boost__selected');
	x.addEventListener("click", colorChange());
	function colorChange() {
		document.getElementById('navbar__list').style.backgroundColor = "#323232";
	}
}

