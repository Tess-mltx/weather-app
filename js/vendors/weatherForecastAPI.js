import { openWeatherApiKey } from './APIkeys.js';
import { CitySearch } from '../utils/CitySearchClass.js';
import { displayCard5days, DisplayOtherDays } from '../components/CardsForecast.js';
import { getCityPicture } from './unsplashAPI.js';
import { chartCompare } from '../components/chartCompare.js';
import { fetchData } from '../utils/fetchData.js';

export async function weatherForecast5days(lon, lat) {

    let uri = `https://api.openweathermap.org/data/2.5/forecast?lat=${lat}&lon=${lon}&appid=${openWeatherApiKey}&units=metric`
    let encodedURI = encodeURI(uri)

    try {

        let data = await fetchData(encodedURI);
        console.log(data);
        let theDay = data.list[0];
        let city = data.city.name
        let picture = await getCityPicture(city);
        displayCard5days(data, picture, theDay);
        filterByDate(data);

        let newSearch = new CitySearch(data); // <=== test de classe
        console.log(newSearch);
        chartCompare(newSearch); // <=== test utilisation de classe
        return(data)
    }
    catch (error) {
        console.error('Erreur de récupération des données :', error);
    }

}

function filterByDate(data) {
    for (let i = 0; i < data.list.length; i++) {
        if (i % 8 === 0 && i !== 0) {
            let selectedElement = data.list[i];

            DisplayOtherDays(data.city.name, selectedElement)
            // elementChart.days.push(elementDateInDay)
            // elementChart.temp.push(selectedElement.main.temp);
        }
    }

    // console.log('Prévisions pour aujourd\'hui :', todayForecast);
    // console.log('Prévisions pour +1 :', date1Forecast);

}
