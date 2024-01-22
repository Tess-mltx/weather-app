export async function fetchData(URI) {
    let response = await fetch(URI);
        if (!response.ok) {
            throw new Error(`Réponse du serveur non OK (${response.status})`);
        }
        return response.json()
}