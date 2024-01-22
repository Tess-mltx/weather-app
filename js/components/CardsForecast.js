import { getDayOfWeek } from "../utils/getDay.js";

export function displayCard5days(data, picture, e) {
    let section = document.querySelector('.mainPage-sectionForecast');

        let card = document.createElement('section');
        card.classList.add('mainPage-sectionForecast-forecastCard');
        card.style.backgroundImage = `url('${picture}')`
        section.appendChild(card);

        let overlay = document.createElement('div');
        overlay.classList.add('mainPage-sectionForecast-forecastCard-overlay');
        card.appendChild(overlay);

        let city = document.createElement('h2');
        city.classList.add('mainPage-sectionForecast-forecastCard-overlay-city');
        city.appendChild(document.createTextNode(data.city.name));
        overlay.appendChild(city);

        let infosToday = document.createElement('div');
        infosToday.classList.add('mainPage-sectionForecast-forecastCard-overlay-infosToday');
        overlay.appendChild(infosToday);

        let infoDesc = document.createElement('p');
        infoDesc.classList.add(`mainPage-sectionForecast-forecastCard-overlay-infosToday-description`);
        infoDesc.appendChild(document.createTextNode(e.weather[0].description));
        infosToday.appendChild(infoDesc);

        let dot = `<span class="dot">•</span>`;

        let todayDetails = document.createElement('p');
        todayDetails.classList.add('mainPage-sectionForecast-forecastCard-overlay-infosToday-windFeel');
        todayDetails.innerHTML = ` ${e.wind.speed} ${dot} ${e.main.feels_like}`; // <=== permet de metre le dot en span dans le p
        overlay-infosToday.appendChild(todayDetails);

        let todayTemp = document.createElement('div');
        todayTemp.classList.add('mainPage-sectionForecast-forecastCard-overlay-todayTemp');
        overlay.appendChild(todayTemp);

        let icon = document.createElement('img');
        icon.classList.add(`mainPage-sectionForecast-forecastCard-overlay-todayTemp-icon`);
        let uri = `http://openweathermap.org/img/wn/${e.weather[0].icon}@4x.png`
        icon.setAttribute('src', uri)
        todayTemp.appendChild(icon);

        let temp = document.createElement('p');
        temp.classList.add('mainPage-sectionForecast-forecastCard-overlay-todayTemp-temp');
        temp.appendChild(document.createTextNode(e.main.temp));
        todayTemp.appendChild(temp);

        let forecastDays = document.createElement('div');
        forecastDays.classList.add(`mainPage-sectionForecast-forecastCard-overlay-forecastDays`);
        forecastDays.id = data.city.name;
        overlay.appendChild(forecastDays);


        // Add graph 5 days forecast in each card

        // let forecastGraph = document.createElement('div');
        // forecastGraph.classList.add(`mainPage-sectionForecast-forecastCard-overlay-forecastGraph`);
        // overlay.appendChild(forecastGraph);

        // let canvaGraph = document.createElement('canvas');
        // canvaGraph.id = `${data.city.name}-graph`;
        // forecastGraph.appendChild(canvaGraph);

}

export async function DisplayOtherDays(city, e) {
    let dayOfWeek = getDayOfWeek(e.dt_txt)

    let forecastDay = document.querySelector(`#${city}`)

    let daysOf = document.createElement('div');
    daysOf.classList.add('mainPage-sectionForecast-forecastCard-overlay-forecastDays-day');
    forecastDay.appendChild(daysOf);

    let dayD = document.createElement('p');
    dayD.appendChild(document.createTextNode(dayOfWeek));
    daysOf.appendChild(dayD);

    let dayTemp = document.createElement('p');
    dayTemp.appendChild(document.createTextNode(e.main.temp));
    daysOf.appendChild(dayTemp);
}

