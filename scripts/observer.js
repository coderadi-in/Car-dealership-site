// ! INTERSECTION OBSERVER VALUES
const observerOptions = {
    root: null,
    rootMargin: '0px',
    threshold: 0.3
};

// ! INITIALIZING INTERSECTION OBSERVER
export const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('visible');

        } else {
            entry.target.classList.remove('visible');
        }
    });
}, observerOptions);