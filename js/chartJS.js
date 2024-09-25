// import {
//     Chart as ChartJS,
//     Title,
//     Tooltip,
//     Legend,
//     BarElement,
//     CategoryScale,
//     LinearScale
// } from 'chart.js'
//
// import { Bar } from "vue-chartjs";
//
// ChartJS.register(CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend)
//
// export default {
//     name: 'App',
//     components: {
//         Bar
//     },
//     data() {
//         return {
//             data: {
//                 labels: ['January', 'February', 'March'],
//                 datasets: [{ data: [40, 20, 12] }]
//             },
//             options: {
//                 responsive: true
//             }
//         }
//     }
// }
const ctx = document.getElementById("chart").getContext('2d');
const gradient = ctx.createLinearGradient(200, 0, 400, 400);
gradient.addColorStop(0, 'rgba(181, 45, 12, 1)');
gradient.addColorStop(1, 'rgba(238, 156, 54, 1)');

const chart = new Chart(ctx, {
    type: 'bar',
    data: {
        labels: ["7/29", "8/5", "8/12", "8/19", "8/26", "9/2"],
        datasets: [{
            label: 'Workouts per Week',
            backgroundColor: gradient,
            // borderColor: 'rgb(47, 128, 237)',
            borderSkipped: true,
            data: [4, 5, 5, 6, 1, 2],
        }]
    },
    options: {
        scales: {
            yAxes: [{
                ticks: {
                    beginAtZero: true,
                    // color: 'rgb(143, 188, 143)'
                }
            }],
            // xAxes: {
            //     ticks: {
            //         color: 'rgb(143, 188, 143)'
            //     }
            // }
        },
        /*Chartjs by default allows user to click on the label of a dataset in the legend to hide it from view.
        This is entirely not helpful for my purposes, so I'm disabling this function.
        https://stackoverflow.com/questions/38583894/how-to-disable-chartjs-legendclick
        */
        legend: {
            onClick: (e) => e.stopPropagation()
        }
    },
})