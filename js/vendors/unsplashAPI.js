import { unsplashApiKey } from "./APIkeys.js";



export async function getCityPicture(city) {
    let uri = `https://api.unsplash.com/search/photos?page=1&query=${city}&orientation=portrait&per_page=1&client_id=${unsplashApiKey}`;
    let encodedURI = encodeURI(uri)
    try {
        let response = await fetch(encodedURI);
        if (!response.ok) {
            throw new Error(`Réponse du serveur non OK (${response.status})`);
        }

        let data = await response.json();
        // console.log(data);
        let picture = data.results[0].urls.small;
        return(picture)

    } catch (error) {
        console.error('Erreur lors de la requête à l\'API Unsplash:', error);
    }
}

