'use strict';

const kohde = document.querySelector('#target');

const sivu1 = Number(prompt("Syötä eka sivu"));

const sivu2 = Number(prompt("Syötä toinen sivu"));

const sivu3 = Number(prompt("Syötä kolmas sivu"));

console.log(sivu1 === sivu2 && sivu2 === sivu3);

if ((sivu1 === sivu2) && (sivu2 === sivu3)) {
  // Tasasivuinen (Equilateral)
  kohde.innerHTML = "Kolmio on tasasivuinen";
} else if ((sivu1 !== sivu2) && (sivu2 !== sivu3) && (sivu3 !== sivu1)) {
  // Epäsäännöllinen (Scalene)
  kohde.innerHTML = "Kolmio on epäsäännöllinen";
} else {
  // Tasakylkinen (Isosceles)
  kohde.innerHTML = "Kolmio on tasakylkinen";
}



