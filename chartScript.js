const ctx = document.getElementById("chart").getContext('2d');
const gradient = ctx.createLinearGradient(200, 0, 400, 400);
gradient.addColorStop(0, 'rgba(181, 45, 12, 1)');
gradient.addColorStop(1, 'rgba(238, 156, 54, 1)');
const myChart = new Chart(ctx, {
    type: 'bar',
    data: {
        labels: ["7/29", "8/5", "8/12", "8/19", "8/26", "9/2"],
        datasets: [{
            label: 'Workouts per Week',
            backgroundColor: gradient,
            borderColor: 'rgb(47, 128, 237)',
            data: [4, 5, 5, 6, 1, 2],
        }]
    },
    options: {
        scales: {
            yAxes: [{
                ticks: {
                    beginAtZero: true,
                }
            }]
        }
    },
});