// ! SETTING UP INTEREST CHART
let chartArea = document.getElementById("amountChart");
let ctx = chartArea.getContext('2d');
const interestChart = new Chart(ctx, {
    type: 'doughnut',
    data: {
        labels: ["Interest Amount", "Principal Amount"],
        datasets: [{
            label: "Interest Chart",
            data: [0.06, 0.93],
            backgroundColor: ["#EFC88B", "#2E5EAA"],
            hoverOffset: 10,
            borderWidth: 0
        }]
    }
});