import { getDayOfWeek } from "../utils/getDay.js";
import { randomColorLight } from "../utils/getRandomColorLight.js";

let canvas = document.getElementById(`CompareSearch`);
let ctx = canvas.getContext('2d');
let myChart; // <=== déclarer le graph pour vérifier son existance
let allDatasets = []; // stocker datasets de chaque city

export function chartCompare(newSearch) {
    console.log('data pour chartCompare : ', newSearch);
    let days = [];
    let arrayChart = {
        city: newSearch.city,
        temp: [],
    };

    newSearch.weatherDays.forEach(element => {
        let day = getDayOfWeek(element.dt_txt);
        let temp = element.main.temp;
        arrayChart.temp.push(temp);
        days.push(day);
    });

    let newDatasets = {
        label: arrayChart.city,
        data: arrayChart.temp,
        borderColor: randomColorLight(),
        borderWidth: 2,
        fill: false
    };

    allDatasets.push(newDatasets); // <=== pour ajouter les lignes a chaque appel

    if (myChart) {
        myChart.destroy(); // <=== corrige erreur graph exist
    }

    myChart = new Chart(ctx, {
        type: 'line',
        data: {
            labels: days,
            datasets: allDatasets,
        },
        options: {
            // Vos options de graphique ici
        }
    });
}
