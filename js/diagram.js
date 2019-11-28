var ctx = document.getElementById('myChart').getContext('2d');
var chart = new Chart(ctx, {
    // The type of chart we want to create
    type: 'line',
    options: {
        layout: {
            padding: {
                left: 450,
                right: 0,
                top: 0,
                bottom: 0,
            }
        }
    },

    // The data for our dataset
    data: {
        labels: ['1', '1.30', '2', '2.30', '3', '3.30', '4',  '4.30'],
        datasets: [{
            label: 'Cofficent',
            borderColor: 'rgb(255, 99, 132)',
            data: [1, 10, 5, 2, 20, 30, 45, 65]
        }]
    },

    // Configuration options go here
    options: {}
});