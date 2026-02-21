// ==================================================
// TRADE-IN FROM OPEN/CLOSE
// ==================================================

// ? GETTING DOC ELEMENTS
const openTradeInBtn = document.getElementById("tradeInOpen");
const transformer = document.querySelector(".transformer");
const tradeInForm = document.querySelector(".form");
const closeWizardBtns = document.querySelectorAll('.close-tradeIn-btn');

// * FUNCTION TO CLOSE FORM
function closeForm() {
    transformer.classList.remove("expand-fullscreen");

    setTimeout(() => {
        transformer.style.display = "none";
    }, 600);
}

// & EVENT LISTENER TO CLOSE FORM
closeWizardBtns.forEach((btn) => {
    btn.addEventListener('click', closeForm)
})

// & EVENT LISTENER TO OPEN FROM
openTradeInBtn.addEventListener('click', () => {
    transformer.style.display = "block";

    setTimeout(() => {
        transformer.classList.add("expand-fullscreen");
    }, 100);
})

// ==================================================
// FUNCTIONS
// ==================================================

// * FUNCTION TO CHECK IF ALL REQUIRED INPUTS ARE FILLED
function checkRequiredInputs(inputArray, btn) {
    for (const elem of inputArray) {
        if (elem.value.trim() === "") {
            btn.classList.add('disabled');
            return
        };
    }
    btn.classList.remove('disabled');
}

// * FUNCTION TO TRANSIT FROM WIZARD A TO WIZARD B
function transit(wizardA, wizardB) {
    wizardA.classList.add('hide');
    wizardB.classList.remove('hide');

    setTimeout(() => {
        wizardA.style.display = "none";
    }, 200);
}

// ==================================================
// WIZARD 1 SUBMISSION
// ==================================================

// ? GETTING WIZARD ELEMENTS
const brandName = document.getElementById("brandName");
const modelName = document.getElementById("modelName");
const yearOfManufacture = document.getElementById("yearManufacture");
const kmDriven = document.getElementById("kmDriven");
const fuelType = document.getElementById("fuelType");
const transmission = document.getElementById("transmission");

const wizard1SubmitBtn = document.querySelector(".wizard1 .sub-btn");
const wizard1 = document.querySelector(".wizard1");

// & PREPARING REQUIRED INPUT LIST
const wizard1RequiredInputs = [
    brandName, modelName, yearOfManufacture,
    kmDriven, fuelType, transmission,
]

// & EVENT LISTENER FOR INPUT CHANGE
wizard1RequiredInputs.forEach((input) => {
    input.addEventListener('input', () => {
        checkRequiredInputs(wizard1RequiredInputs, wizard1SubmitBtn);
    })
})

// & SUBMISSION ANIMATION FROM WIZ1 TO WIZ2
wizard1SubmitBtn.addEventListener('click', () => {
    if (wizard1SubmitBtn.classList.contains('disabled')) return;
    transit(wizard1, wizard2)
})

// ==================================================
// WIZARD 2 SUBMISSION
// ==================================================

// ? GETTING WIZARD 2 ELEMENTS
const overallCondition = document.getElementById("overallCondition");
const repairHistory = document.getElementById("repairHistory");
const previousOwners = document.getElementById("previousOwners");
const serviceHistory = document.getElementById("serviceHistory");

const wizard2SubmitBtn = document.querySelector(".wizard2 .sub-btn");
const wizard2 = document.querySelector(".wizard2");

// & PREPARING REQUIRED INPUT LIST
const wizard2RequiredInputs = [
    overallCondition, repairHistory,
    previousOwners, serviceHistory
];

// & EVENT LISTENER FOR INPUT CHANGE
wizard2RequiredInputs.forEach((input) => {
    input.addEventListener('input', () => {
        checkRequiredInputs(wizard2RequiredInputs, wizard2SubmitBtn);
    })
})

// & SUBMISSION ANIMATION FROM WIZ2 TO WIZ3
wizard2SubmitBtn.addEventListener('click', () => {
    if (wizard2SubmitBtn.classList.contains('disabled')) return;
    transit(wizard2, wizard3);
})

// ==================================================
// WIZARD 3 SUBMISSION
// ==================================================

// ? GETTING WIZARD 3 ELEMENTS
const timeLine = document.getElementById("timeLine");
const interestedType = document.getElementById("interestedType");

const wizard3SubmitBtn = document.querySelector(".wizard3 .sub-btn");
const wizard3 = document.querySelector(".wizard3");

// & PREPARING REQUIRED INPUT LIST
const wizard3RequiredInputs = [timeLine, interestedType];

// & EVENT LISTENER FOR INPUT CHANGE
wizard3RequiredInputs.forEach((input) => {
    input.addEventListener('input', () => {
        checkRequiredInputs(wizard3RequiredInputs, wizard3SubmitBtn);
    })
})

// & SUBMISSION ANIMATION FROM WIZ3 TO WIZ4
wizard3SubmitBtn.addEventListener('click', () => {
    if (wizard3SubmitBtn.classList.contains('disabled')) return;
    transit(wizard3, wizard4);
})

// ==================================================
// WIZARD 4 SUBMISSION
// ==================================================

// ? GETTING WIZARD ELEMENTS
const nameInput = document.getElementById("name");
const phone = document.getElementById("phone");

const wizard4SubmitBtn = document.querySelector(".wizard4 .sub-btn");
const wizard4 = document.querySelector('.wizard4');

// & PREPARING REQUIRED INPUT LIST
const wizard4RequiredInputs = [nameInput, phone];

// & EVENT LISTENER FOR INPUT CHANGE
wizard4RequiredInputs.forEach((input) => {
    input.addEventListener('input', () => {
        checkRequiredInputs(wizard4RequiredInputs, wizard4SubmitBtn);
    })
})

// & SUBMISSION ANIMATION FROM WIZ4 TO HOME
wizard4SubmitBtn.addEventListener('click', () => {
    if (wizard4SubmitBtn.classList.contains('disabled')) return;
    transit(wizard4, wizard1);
    closeForm();
})