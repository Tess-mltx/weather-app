export let listSuggestCity = document.querySelector('#suggestCity');
export function displaySuggestCity(e) {
    
    let option = document.createElement('option');
    option.classList.add("headerPage-sectionHeader-divHeader-suggestCity-option");
    option.appendChild(document.createTextNode(`${e.name}, ${e.state}, ${e.country}`));
    listSuggestCity.appendChild(option);
}