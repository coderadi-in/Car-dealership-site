// ? IMPORTING OBSERVER
import { observer } from './observer.js';

// ? GETTING SECTION ELEMENTS
const heroSection = document.querySelector(".hero");
const featuredSection = document.querySelector(".featured");
const financeSection = document.querySelector(".finance");
const tradeInSection = document.querySelector(".tradein");

// & PREPARING OBSERVABLES LIST
const observables = [heroSection, featuredSection, financeSection, tradeInSection];

// & OBSERVING OBSERVABLE SECTIONS
observables.forEach((elem) => {
    observer.observe(elem);
})