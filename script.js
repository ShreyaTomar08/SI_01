const ctx = document.getElementById('myChart').getContext('2d');
let myChart;

const dataSets = {
    data1: {
        labels: ['January', 'February', 'March', 'April', 'May'],
        data: [12, 19, 3, 5, 2]
    },
    data2: {
        labels: ['June', 'July', 'August', 'September', 'October'],
        data: [5, 8, 3, 12, 9]
    }
};

function updateChart(selectedData) {
    const { labels, data } = dataSets[selectedData];
    
    if (myChart) {
        myChart.destroy(); // Destroy the old chart
    }

    myChart = new Chart(ctx, {
        type: 'bar',
        data: {
            labels: labels,
            datasets: [{
                label: 'Sample Data',
                data: data,
                backgroundColor: 'rgba(75, 192, 192, 0.2)',
                borderColor: 'rgba(75, 192, 192, 1)',
                borderWidth: 1
            }]
        },
        options: {
            scales: {
                y: {
                    beginAtZero: true
                }
            }
        }
    });
}

// Initial chart
updateChart('data1');

// Event listener for data selection
document.getElementById('dataSelect').addEventListener('change', (event) => {
    updateChart(event.target.value);
});
