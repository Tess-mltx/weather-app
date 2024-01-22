import 'https://cdn.jsdelivr.net/npm/chart.js';

export let elementChart = {
    city: "",
    days: [],
    temp: [],
};

export function createTempChart() {
    let canvas = document.getElementById(`${elementChart.city}-graph`);
    let ctx = canvas.getContext('2d');

    let elementChartDays = Object.values(elementChart.days);
    let elementChartTemp = Object.values(elementChart.temp);
    
    if (!canvas) {
        console.error(`L'élément avec l'ID ${elementChart.city}-graph n'a pas été trouvé.`);
        return;
    }

    console.log("Chart.js est-il chargé pour ChartForecast ?", typeof Chart !== 'undefined');

    new Chart(ctx, {
        type: 'line',
        data: {
            labels: elementChartDays,
            datasets: [
                {
                    label: 'temp min',
                    data: elementChartTemp,
                    fill: false,
                    borderColor: 'rgb(75, 192, 192)',
                    tension: 0.1
                }
            ]
        }
    });
    elementChart.city = "";
    elementChart.days.length = 0;
    elementChart.temp.length = 0;
}


