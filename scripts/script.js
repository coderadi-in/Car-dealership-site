// ? IMPORTING OBSERVER
import { observer } from './observer.js';

// ? GETTING SECTION ELEMENTS
const heroSection = document.querySelector(".hero");
const featuredSection = document.querySelector(".featured");
const financeSection = document.querySelector(".finance");
const tradeInSection = document.querySelector(".tradein");
const testimonialsSection = document.querySelector(".testimonials");

// & PREPARING OBSERVABLES LIST
const observables = [heroSection, featuredSection, financeSection, tradeInSection, testimonialsSection];

// & OBSERVING OBSERVABLE SECTIONS
observables.forEach((elem) => {
    observer.observe(elem);
})