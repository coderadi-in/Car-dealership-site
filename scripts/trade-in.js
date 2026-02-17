// ? GETTING DOC ELEMENTS
const openTradeInBtn = document.getElementById("tradeInOpen");
const tradeInForm = document.querySelector(".form");
const closeWizardBtns = document.querySelectorAll('.close-tradeIn-btn');

// & EVENT LISTENER TO OPEN TRADE-IN FORM
openTradeInBtn.addEventListener('click', () => {
    tradeInForm.style.display = "flex";

    setTimeout(() => {
        tradeInForm.classList.add("expand-fullscreen");
    }, 100);
})

// & EVENT LISTENER TO CLOSE FORM
closeWizardBtns.forEach((btn) => {
    btn.addEventListener('click', () => {
        tradeInForm.classList.remove("expand-fullscreen");

        setTimeout(() => {
            tradeInForm.style.display = "none";
        }, 100);
    })
})