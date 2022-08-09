class MarvelService {
    _apiBase = "https://gateway.marvel.com:443/v1/public/";
    _apiKey = "apikey=7ead5a8391500d89377d28c8ae30a1a6"

    getResource = async (url) => {
        let res = await fetch(url);

        if(!res.ok) {
            throw new Error(`could not fetch ${url}, status: ${res.status}`);
        }

        return await res.json();
    }

    getAllCharacters = () => {
        return this.getResource(`${this._apiBase}characters?limit=9&offset=230&${this._apiKey}`);
    }

    getAllCharacter = (id) => {
        return this.getResource(`${this._apiBase}characters/${id}?${this._apiKey}`);
    }

}

export default MarvelService;