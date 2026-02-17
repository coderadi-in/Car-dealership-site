// ? GETTING DOC ELEMENTS
const loanAmount = document.getElementById('loanAmount');
const interestRate = document.getElementById('interestRate');
const tenure = document.getElementById('loanTenure');

// * FUNCTION TO CALCULATE FINANCE
function calculateFinance(
    loanAmount,
    interestRate,
    tenure
) {
    // PARSE VALUES
    let principal = parseFloat(loanAmount);
    let rate = parseFloat(interestRate);
    let time = parseFloat(tenure);

    // CALCULATE MONTHLY RATE
    let monthlyRate = rate / 12 / 100;

    // CALCULATE TOTAL MONTHS
    let months = time * 12

    // CALCULATE EMI
    let emi = (principal * monthlyRate * Math.pow(1 + monthlyRate, months)) / (Math.pow(1 + monthlyRate, months) - 1)

    // CALCULATE TOTAL PAYABLE AND INTEREST
    let totalPayable = emi * months;
    let totalInterest = totalPayable - principal;

    return {
        emi: emi,
        totalInterest: totalInterest,
        totalPayable: totalPayable
    };
}

// * FUNCTION TO CALCULATE INTEREST/PRINCIPAL RATIO FOR CHART
function getInterestPrincipalRatio(principalAmount, totalInterestAmount) {
    let principal = parseFloat(principalAmount);
    let interest = parseFloat(totalInterestAmount);
    let total = principal + interest;

    if (!Number.isFinite(principal) || !Number.isFinite(interest) || total <= 0) {
        return {
            interestRatio: 0,
            principalRatio: 0
        };
    }

    return {
        interestRatio: interest / total,
        principalRatio: principal / total
    };
}

// ! SETTING UP CURRENCY FORMATTER
const formatter = new Intl.NumberFormat('en-IN', {
  style: 'currency',
  currency: 'INR',
});

// * FUNCTION TO HANDLE FINANCE INPUT CHANGES
function handleInputChanges() {
    // GET VALUES
    let loanAmountValue = loanAmount.value;
    let interestRateValue = interestRate.value;
    let tenureValue = tenure.value;

    // CALCULATE EMI
    let finance = calculateFinance(loanAmountValue, interestRateValue, tenureValue);
    let ratio = getInterestPrincipalRatio(loanAmountValue, finance.totalInterest);
    let emiFormatted = formatter.format(finance.emi);
    let interestFormatted = formatter.format(finance.totalInterest);
    let amountFormatted = formatter.format(finance.totalPayable);

    // UPDATE OUTPUT
    let emiOutput = document.getElementById('emiOutput');
    emiOutput.textContent = emiFormatted;

    let totalInterest = document.getElementById('totalInterest');
    totalInterest.textContent = interestFormatted;

    let totalAmount = document.getElementById('totalAmount');
    totalAmount.textContent = amountFormatted;

    // UPDATE CHART DATA USING RATIO
    interestChart.data.datasets[0].data = [ratio.interestRatio, ratio.principalRatio];
    interestChart.update();
}

// & EVENT LISTENER FOR FINANCE INPUT CHANGES
let inputs = [loanAmount, interestRate, tenure];
inputs.forEach((elem) => {
    elem.addEventListener('input', handleInputChanges);
})