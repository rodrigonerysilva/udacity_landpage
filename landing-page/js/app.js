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
		li.innerHTML = `<a href="#about" class="sectionAbout" onclick="scrollAbout()"><p><span class="about__selected">${menu__item}</span></p></a>`;
		ul.appendChild(li);
	}
	else if (menu__item === 'products') {
		li.innerHTML = `<a href="#products" class="sectionProducts" onclick="scrollProducts()"><p><span class="product__selected">${menu__item}</span></p></a>`;
		ul.appendChild(li);	
	}
	else if (menu__item === 'advantages') {
		li.innerHTML = `<a href="#advantages" onclick="scrollAdvantages()"><p><span class="advantages__selected">${menu__item}</span></p></a>`;
		ul.appendChild(li);	
	}
	else {
		li.innerHTML = `<a href="#price" onclick="scrollPrice()"><p><span class="price__selected">${menu__item}</span></p></a>`;
		ul.appendChild(li);	
	}
}

// Nav anchors

function scrollAbout() {	
	let scrollAbout = document.getElementById('section1');
	scrollAbout.scrollIntoView({
		behavior: 'smooth'
	})
	let x = document.querySelector('.about__selected');
	x.addEventListener("click", colorChange());
	function colorChange() {
		document.getElementById('navbar__list').style.backgroundColor = "#f37335";
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
		document.getElementById('navbar__list').style.backgroundColor = "#93291e";
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
		document.getElementById('navbar__list').style.backgroundColor = "#0083b0";
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
		document.getElementById('navbar__list').style.backgroundColor = "#11998e";
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

