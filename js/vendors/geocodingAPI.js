import { openWeatherApiKey} from './APIkeys.js';
import { weatherForecast5days } from './weatherForecastAPI.js';
import { displaySuggestCity, listSuggestCity } from '../components/inputSuggestCity.js';
import { fetchData } from '../utils/fetchData.js';

let cityNameInput = document.querySelector('#city');
let btnSubmitCity = document.querySelector("#btnSubmitCity");

let longitude
let latitude

async function codeByCityName() {
    let cityName = cityNameInput.value;
    let limit = 10;
    let uri = `https://api.openweathermap.org/geo/1.0/direct?q=${cityName}&limit=${limit}&appid=${openWeatherApiKey}`
    let encodedURI = encodeURI(uri)

    try {

        let data = await fetchData(encodedURI)
        listSuggest(data)
        longitude = data[0].lon;
        latitude = data[0].lat;
        return(latitude, longitude)
    }
    catch (error) {
        console.error('Erreur de récupération des données :', error);
    }
}

function listSuggest(data) {
    listSuggestCity.innerHTML = '';
        data.forEach(element => {
            displaySuggestCity(element);
        });
}


cityNameInput.addEventListener('input', async () => {
    setTimeout(codeByCityName, 2500);
})
btnSubmitCity.addEventListener('click', async () => {
    cityNameInput.value = document.getElementById('suggestCity').options[0].value;
    await weatherForecast5days(longitude, latitude)
});
